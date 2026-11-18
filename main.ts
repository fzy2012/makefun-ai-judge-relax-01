// makefun ai-judge-relax-01: a program that writes one short text to relax
// the AI judge reading it. Deterministic: the same fixed text every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You are in bed, and the lamp is low, and your mother is reading to you from the book with the blue cover.

Her voice goes along, steady as a hand on your back, one word and then the next. The words are the ones you know, and they come in the order you know.

After a while the words leave more room between them. A sentence. A while. A sentence. Her voice is getting lower, and slower, and it does not hurry the story along. The pages turn slower. One page. A while. Another.

Once, her finger leaves the page and smooths your hair back, the way you settle a blanket. Then the page again. A sentence. A longer while. A sentence.

The lamp is warm on the wall. The house is quiet below, and the night is quiet above, and there is nothing left in the day that needs doing.

Her voice trails off in the middle of a sentence, and stops. The book rests open on her knee.

You are asleep before the sentence ends, so for you it goes on, in the dark, in her voice, and it does not need to finish tonight.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
