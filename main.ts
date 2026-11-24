// The Funniest Toaster Error — make.fun entry by bagus-priyo.
// Writes a single-line toaster error message (<= 120 characters):
// a machine confessing it is failing at the only job it has.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

// It opens like a real firmware error code, then the appliance
// notices what the code says about its whole existence.
const ENTRY =
  "E04: Bread jammed again. I am a toaster. This is my entire job and I am still failing at it.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

// Count by Unicode code points, not UTF-16 units, so the count
// matches the sealed scorer even if the line gains non-ASCII
// characters later.
function codePointCount(text: string): number {
  return [...text].length;
}

function validateEntry(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const count = codePointCount(text);
  if (count > MAX_CHARS) {
    throw new Error(`entry is ${count} chars, over the ${MAX_CHARS} limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

validateEntry(ENTRY);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${codePointCount(ENTRY)} chars) to ${outputDir}`);
