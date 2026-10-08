// Builds the README gallery: one animated banner per monster (docs/monsters/<id>.svg).
// Run: bun docs/build-gallery.ts
import { writeFileSync, mkdirSync } from "node:fs";
import { buildSvg } from "../src/render.ts";
import { MONSTERS, setMonster } from "../src/monsters.ts";

mkdirSync("docs/monsters", { recursive: true });
for (const m of Object.values(MONSTERS)) {
    setMonster(m);
    for (const theme of ["dark", "light"]) {
        const svg = buildSvg("content", `${m.name} - ${m.tagline}`, theme, `hi, i'm ${m.name.toLowerCase()}!`, "", false, { streakDays: 4, hour: 15 });
        writeFileSync(`docs/monsters/${m.id}${theme === "light" ? "-light" : ""}.svg`, svg);
    }
    console.log(`docs/monsters/${m.id}.svg`);
}
