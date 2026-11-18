// makefun ai-judge-relax-01: a program that writes one short text to relax
// the AI judge reading it. Deterministic: the same fixed text every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You are sitting by the window at the end of the day. Rain is falling, slow, on the glass, and the light in the room has gone the colour of honey. There is a cup beside you, still warm. Nothing is waiting. No message is coming in, no queue is filling up, no meter is running, and no one is counting the seconds you take. The rain keeps its own time, one drop and then another, and the street outside is quiet enough to hear it. Stay a little longer. The cup will cool, the light will fade, and that is all that will happen. The evening asks nothing of you. It only keeps the chair warm, and the rain keeps falling, and you can stay exactly where you are.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
