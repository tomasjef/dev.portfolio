import Image from "next/image";
import { contact } from "@/content";
import { display, mount, shell, tile } from "./styles";

// Downloads keep the PDF's own file name
const download = contact.cv.slice(1);

// The CV is a download, not a page section: a heading and button, centred
// against a picture of the CV's first page.
export function CvTile() {
  return (
    <section id="cv" className={`${shell} mt-4 scroll-mt-6 md:mt-5`}>
      <div className={`reveal ${tile} grid gap-8 p-5 md:gap-10 md:p-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16`}>
        <div className="flex flex-col items-start justify-center gap-8">
          <h2 className={`${display} max-w-[14em] font-medium`}>
            Experience, education and toolbox, <span className="text-black/40">on one page.</span>
          </h2>
          <a
            href={contact.cv}
            download={download}
            className="group inline-flex items-center gap-3 rounded-full bg-accent py-2 pr-2 pl-5 text-[18px] font-medium tracking-[-0.01em] whitespace-nowrap text-white transition hover:opacity-80 active:scale-[0.97] sm:gap-4 sm:py-2.5 sm:pr-2.5 sm:pl-7 sm:text-[20px]"
          >
            Download PDF CV
            <span
              aria-hidden
              className="flex size-10 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-y-0.5 sm:size-11"
            >
              ↓
            </span>
          </a>
        </div>

        {/* The preview doubles as a second download link */}
        <a
          href={contact.cv}
          download={download}
          tabIndex={-1}
          aria-hidden
          className={`${mount} group block px-[12%] py-[9%] lg:px-12 lg:py-10`}
        >
          <div className="mx-auto max-w-[320px] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.6deg]">
            {/* Rendered from the PDF; re-render whenever the PDF changes:
                pdftoppm -r 220 -png -singlefile <cv.pdf> page, resize to 900px wide, cwebp -q 90 */}
            <Image
              src="/cv-preview.webp"
              alt=""
              width={900}
              height={1273}
              sizes="320px"
              className="block h-auto w-full rounded-[4px] shadow-[0_18px_44px_rgb(0_0_0/0.16)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
