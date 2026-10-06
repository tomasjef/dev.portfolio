// Runs only for /projects/* (wrangler.jsonc, run_worker_first). Cloudflare's
// static assets answer a Range request with the whole file, and Safari on
// iPhone won't play a video from a server that does that, so this cuts the
// requested bytes out and answers 206. Everything else is the asset as it is.
//
// _headers isn't applied to a Worker's responses, so the headers it would add
// for these files are set here.

type Env = { ASSETS: { fetch(request: Request): Promise<Response> } };

const MEDIA_HEADERS = {
  "Accept-Ranges": "bytes",
  "Cache-Control": "public, max-age=14400",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Ask the asset store for the whole file: it rejects a Range header itself
    const whole = new Headers(request.headers);
    whole.delete("Range");
    whole.delete("If-Range");
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: request.method, headers: whole }));
    const headers = new Headers(asset.headers);
    for (const [name, value] of Object.entries(MEDIA_HEADERS)) headers.set(name, value);

    const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("Range")?.trim() ?? "");
    if (asset.status !== 200 || !range || (range[1] === "" && range[2] === "")) {
      return new Response(asset.body, { status: asset.status, headers });
    }

    const body = await asset.arrayBuffer();
    const size = body.byteLength;
    // "bytes=500-" from 500 to the end, "bytes=-500" the last 500
    const start = range[1] === "" ? Math.max(0, size - Number(range[2])) : Number(range[1]);
    const end = range[1] === "" || range[2] === "" ? size - 1 : Math.min(Number(range[2]), size - 1);
    if (start >= size || start > end) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(body.slice(start, end + 1), { status: 206, headers });
  },
};

export default worker;
