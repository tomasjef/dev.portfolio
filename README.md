# dev.portfolio

Next.js (App Router, TypeScript, Tailwind) built as a static export and served as a Cloudflare Workers static site at https://dev.tomasjef.com.

## Setup

```sh
nvm use        # Node 24 (wrangler needs >= 22)
npm install
```

## Scripts

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Next dev server at http://localhost:3100                  |
| `npm run build`   | Static export to `out/`                                   |
| `npm run preview` | Build, then serve `out/` with Cloudflare's local runtime  |
| `npm run deploy`  | Build, then upload `out/` to the `dev-portfolio` Worker   |
| `npm run lint`    | ESLint                                                    |

## Static export limits

`output: "export"` means no server at runtime: no API routes, Server Actions,
cookies/headers, ISR or `next/image` optimization (images are served as-is).
Everything renders at build time.

## Deploying

Pushing to `main` runs lint and build in GitHub Actions, then `wrangler deploy`
(`.github/workflows/deploy.yml`). It needs a `CLOUDFLARE_API_TOKEN` repository
secret (Cloudflare's "Edit Cloudflare Workers" token template) and a
`CLOUDFLARE_ACCOUNT_ID` repository variable. `npm run deploy` still works locally.
