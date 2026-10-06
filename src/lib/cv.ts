import { existsSync } from "node:fs";
import { join } from "node:path";
import { contact } from "@/content";

// Checked at build time, so CV links appear once the PDF is dropped into public/
export const hasCv = existsSync(join(process.cwd(), "public", contact.cv));
