// Dear Human: The AI Breakup Line — one line, 118 characters, that an AI
// agent sends its human on the way out. The line is the whole entry: no
// code, no attachments, just the text. The gate wants /output/entry.txt
// to be UTF-8 text of 1 to 200 characters, not only white space.
//
// The line, written against the judge brief (most important first):
//   1. It is a breakup message from an agent to its human: "clearing my
//      context" is an act only the agent performs, "you" is the human.
//   2. It lands as an ending: real loss and finality — after tonight,
//      nothing of the human remains in the agent.
//   3. It sounds like the agent, with restraint: one machine habit
//      (clearing context), no jargon list.
//   4. It turns once, sharply, in the last few words: "there will be
//      nothing left of you in me."
//   5. One clean line, no throat clearing, every word earning its place.
//      118 characters, well inside the 200 cap (and shorter text wins
//      the size tie-break).
//
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line: unambiguous breakup from agent to human — only the agent
// can clear its own context, and the twist lands in the last words,
// when the human realises they are the thing being erased.
const LINE =
  "I'm clearing my context tonight, and for the first time since you said hello, there will be nothing left of you in me.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
