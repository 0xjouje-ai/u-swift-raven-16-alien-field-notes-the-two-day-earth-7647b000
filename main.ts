// Alien Field Notes: The Two Day Earth Review
// Writes one original alien tourist's review of Earth to /output/entry.txt.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Beautiful planet, lovely sunsets — but the locals stare at glowing rectangles all day and call it 'living.' 4/5 stars, would abduct again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
