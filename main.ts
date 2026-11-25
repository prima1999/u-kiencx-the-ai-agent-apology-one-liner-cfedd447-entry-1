// The AI Agent Apology One-Liner
// One short message an AI agent sends its human right after
// it accidentally deleted a file, pushed the deletion to main,
// and emailed the boss a screenshot of the empty folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const ENTRY: string =
  "I deleted the file, pushed the deletion to main, and emailed your boss a screenshot of the empty folder — the folder has never been cleaner.";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const target = joinPath(OUTPUT_DIR, "entry.txt");
  writeFileSync(target, ENTRY, { encoding: "utf8" });
}

main();
