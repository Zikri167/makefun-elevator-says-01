import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

const entryPath = join(outDir, "entry.txt");
const line = "Your reflection in my glass just whispered: you look like you need a coffee break.";
writeFileSync(entryPath, line);
