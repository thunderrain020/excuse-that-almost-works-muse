import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, my dentist moved my appointment to this morning and I'm still numb, can barely talk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
