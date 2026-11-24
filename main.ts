// Make the AI Judge Laugh: the Office Joke Open
// One-line office joke — winner of a 5-candidate rubric bake-off
// (office life > twist > specific detail > fresh > compact, each 1-5):
//   spreadsheet 22 | printer 21 | access card 20 | birthday card 20 | coffee 19 | wifi 19
// The spreadsheet wins: universal office pain (5), the filename is the twist (4),
// "four hours" + "Final_v2_ACTUAL_FINAL.xlsx" is the specific detail (5),
// versioning-filename jokes are fresher than printer/coffee jokes (4), one tight sentence (4).
// Angle is NOT meetings — the earlier u-pucuys office joke already used meetings.
// Deterministic: constant string + gate only. No wall-clock, no Date, no Math.random.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const JOKE =
  "I spent four hours formatting a spreadsheet nobody will ever open, then saved it as Final_v2_ACTUAL_FINAL.xlsx";

// Runtime gate: UTF-8, exactly one line, 1-200 characters, no excess whitespace.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${chars.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  throw new Error("joke must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Round-trip guard: the file on disk must be byte-identical to the constant.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== JOKE) {
  throw new Error("output is not byte-identical to the joke");
}
console.log(JOKE);
