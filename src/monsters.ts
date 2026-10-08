// BuffTomo monster roster - the five MyBuffBuddy species, hand-drawn as
// 20 x 16 pixel grids so every renderer (banner, graph, iso) shares one shape.
//
// Grid legend: "." = empty, every other character is looked up in the
// monster's `colors` map ("X" is always the main body colour and is the one
// that turns red when the monster overheats).
//
// Rows 0-9 are the head (it bobs while eating), rows 10-15 the body.
// Eyes, tail frames and bands are coordinate overlays so they can animate.

export type Px = [number, number];
export type TintedPx = [number, number, string?]; // optional grid char, defaults to "X"

export interface Monster {
    id: string;
    name: string;
    tagline: string;
    grid: string[];                  // 20 wide x 16 tall
    colors: Record<string, string>;  // grid char -> hex
    eye: string;                     // pupil colour
    lid: string;                     // grid char drawn over the eyes on a blink
    eyes: Px[];
    tailA: TintedPx[];               // tail wag frame A
    tailB: TintedPx[];               // tail wag frame B
    band?: Px[];                     // headband / belt, drawn in the accent colour
    bandColor?: string;              // fixed band colour instead of the accent
}

export const HEAD_ROWS: [number, number] = [0, 9];
export const BODY_ROWS: [number, number] = [10, 15];
export const GRID_W = 20, GRID_H = 16;

// shared paw poses (yarn/dumbbell bat + wave) - every monster's body edge sits at col 17
export const PAW_TUCKED: Px[] = [[14, 11], [15, 11], [14, 12], [15, 12]];
export const PAW_EXTENDED: Px[] = [[16, 12], [17, 12], [18, 12], [19, 12], [19, 11]];
export const PAW_WAVE: Px[] = [[18, 4], [19, 3], [19, 4]];

const row = (x0: number, x1: number, y: number): Px[] => Array.from({ length: x1 - x0 + 1 }, (_, i) => [x0 + i, y] as Px);

// ---------------------------------------------------------------- Beastor
// Strong, confident, gym-focused: bone horns, underbite fangs, huge shoulders,
// a sweatband with the knot trailing off the left side.
const BEASTOR: Monster = {
    id: "beastor",
    name: "Beastor",
    tagline: "lives for the gym - every set is a chance to prove something",
    grid: [
        "..h..............h..",
        "..hh............hh..",
        "...hXXXXXXXXXXXXh...",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXfssssfXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        ".XXXXXXXXXXXXXXXXXX.",
        "XXXXXXXXXXXXXXXXXXXX",
        "XXXbbbbbbbbbbbbbbXXX",
        "XX.bbbbbbbbbbbbbb.XX",
        "XX.XbbbbbbbbbbbbX.XX",
        "...XXXXXXXXXXXXXX...",
        "...XXX..XXXX..XXX...",
    ],
    colors: { X: "#FF6B4A", s: "#B8402A", b: "#FFB59E", h: "#F4E9D8", f: "#FFFFFF" },
    eye: "#2A1A12",
    lid: "X",
    eyes: [[6, 5], [13, 5]],
    tailA: [[18, 15], [19, 15]],
    tailB: [[18, 15], [19, 14]],
    band: [...row(2, 17, 3), [1, 3], [0, 4]],
};

// ---------------------------------------------------------------- Drako
// Fiery and ambitious: little horns, cream belly, wings, flame-tipped tail.
const DRAKO: Monster = {
    id: "drako",
    name: "Drako",
    tagline: "burns hot and fast - cardio, sprints, big goals",
    grid: [
        "....h..........h....",
        "....hX........Xh....",
        "...XXXXXXXXXXXXXX...",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXsXXsXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "...XXXXXXXXXXXXXX...",
        "w.XXXXXXXXXXXXXXXX.w",
        "ww.XbbbbbbbbbbbbX.ww",
        "www.XbbbbbbbbbbX.www",
        "....XbbbbbbbbbbX....",
        "...XXXXXXXXXXXXXX...",
        "...XXX..XXXX..XXX...",
    ],
    colors: { X: "#FF3D68", s: "#A8203F", b: "#FFD3A8", h: "#FFE7B3", w: "#9C2B57", t: "#FFB84A" },
    eye: "#2A0F1A",
    lid: "X",
    eyes: [[6, 5], [13, 5]],
    tailA: [[17, 15], [18, 15], [19, 14, "t"]],
    tailB: [[17, 15], [18, 14], [18, 13, "t"]],
};

// ---------------------------------------------------------------- Pumpkin
// Cheerful and comforting: round ridged body, stem + leaf, rosy cheeks,
// a big smile and a curly green vine for a tail.
const PUMPKIN: Monster = {
    id: "pumpkin",
    name: "Pumpkin",
    tagline: "celebrates every little win with you, no judgment",
    grid: [
        ".........g..........",
        ".........gGG........",
        "....XXXXsXXsXXXX....",
        "..XXXXXXsXXsXXXXXX..",
        ".XXXXXXXsXXsXXXXXXX.",
        ".XXXXXXXsXXsXXXXXXX.",
        ".XXXXXXXsXXsXXXXXXX.",
        ".XXkkXXXsXXsXXXkkXX.",
        ".XXXXXmXXXXXXmXXXXX.",
        ".XXXXXXmmmmmmXXXXXX.",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXsXXsXXXXXX..",
        "..XXXXXXsXXsXXXXXX..",
        "...XXXXXsXXsXXXXX...",
        "....XXXXXXXXXXXX....",
        "....XX........XX....",
    ],
    colors: { X: "#FFB84A", s: "#E08A1E", k: "#FF7E8A", m: "#7A3E0A", g: "#4F7D2A", G: "#7FD06A" },
    eye: "#3A2208",
    lid: "X",
    eyes: [[5, 5], [14, 5]],
    tailA: [[16, 14, "g"], [17, 14, "G"], [18, 13, "G"]],
    tailB: [[16, 14, "g"], [17, 13, "G"], [17, 12, "G"]],
};

// ---------------------------------------------------------------- Neko
// Agile, curious, mischievous: tall pointy ears, forehead + side stripes,
// one cheeky fang and a long striped tail.
const NEKO: Monster = {
    id: "neko",
    name: "Neko",
    tagline: "quick, curious, and always exploring something new",
    grid: [
        "..X..............X..",
        "..XX............XX..",
        "..XkX..........XkX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXmmXXXXXXmmXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXkXXXXXXXX..",
        "..XXXXXXXXfXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XmXXXbbbbbbXXXmX..",
        "..XmXXbbbbbbbbXXmX..",
        "..XXXXbbbbbbbbXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "...XXX..XXXX..XXX...",
    ],
    colors: { X: "#7FE0C0", m: "#3FA88A", k: "#FF9BCE", f: "#FFFFFF", b: "#D6FFF1" },
    eye: "#10332A",
    lid: "X",
    eyes: [[6, 5], [13, 5]],
    tailA: [[17, 15], [18, 15, "m"], [19, 15], [19, 14, "m"]],
    tailB: [[19, 15], [19, 14, "m"], [19, 13], [18, 13, "m"]],
};

// ---------------------------------------------------------------- Shadow
// Calm, mysterious, disciplined: a hooded wisp with glowing eyes, a wavy
// floating hem, a black belt and a trailing wisp for a tail.
const SHADOW: Monster = {
    id: "shadow",
    name: "Shadow",
    tagline: "values discipline and recovery as much as effort",
    grid: [
        ".........XX.........",
        "........XXXX........",
        "......XXXXXXXX......",
        "....XXXXXXXXXXXX....",
        "...XXssssssssssXX...",
        "..XXXssssssssssXXX..",
        "..XXXssssssssssXXX..",
        "..XXXssssssssssXXX..",
        "..XXXXssssssssXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        "..XXXXXXXXXXXXXXXX..",
        ".XXXXXXXXXXXXXXXXXX.",
        ".XXXXXXXXXXXXXXXXXX.",
        ".XXXXXXXXXXXXXXXXXX.",
        ".XX.XXX.XXXX.XXX.XX.",
        ".X...X...XX...X...X.",
    ],
    colors: { X: "#8B7BFF", s: "#2B2160", l: "#B7ADFF" },
    eye: "#FFE36E",
    lid: "s",
    eyes: [[7, 6], [12, 6]],
    tailA: [[19, 12, "l"], [19, 13, "l"]],
    tailB: [[19, 11, "l"], [19, 12, "l"]],
    band: row(1, 18, 11),
    bandColor: "#4B3FC4",
};

export const MONSTERS: Record<string, Monster> = {
    beastor: BEASTOR,
    drako: DRAKO,
    pumpkin: PUMPKIN,
    neko: NEKO,
    shadow: SHADOW,
};
export const MONSTER_IDS = Object.keys(MONSTERS);
export const DEFAULT_MONSTER = "beastor";

// "random" picks a monster per UTC day, so the profile gets a new visitor daily
// while staying stable across the 6h regenerations of a single day.
export function resolveMonster(id: string | undefined, now = new Date()): Monster {
    const key = (id || "").trim().toLowerCase();
    if (key === "random" || key === "daily") {
        const day = Math.floor(now.getTime() / 86400e3);
        return MONSTERS[MONSTER_IDS[day % MONSTER_IDS.length]];
    }
    return MONSTERS[key] ?? MONSTERS[DEFAULT_MONSTER];
}

// The monster in use for this run. Renderers read it via current(); generate.ts
// (and the preview worker) call setMonster() once before building SVGs.
let CURRENT: Monster = MONSTERS[DEFAULT_MONSTER];
export function setMonster(m: Monster): void { CURRENT = m; }
export function current(): Monster { return CURRENT; }

// grid colour map with the overheat body swap applied
export function colorsFor(m: Monster, state: string): Record<string, string> {
    const c = { ...m.colors };
    if (state === "overheat") c.X = "#ff7b72";
    return c;
}

// angry brows (grumpy): slanted pixels just above each eye, slanting inward
export function brows(m: Monster): Px[] {
    const [l, r] = [...m.eyes].sort((a, b) => a[0] - b[0]);
    return [[l[0] - 1, l[1] - 1], [l[0], l[1] - 1], [r[0], r[1] - 1], [r[0] + 1, r[1] - 1]];
}

// weekend shades: a 3x2 lens over each eye plus a bridge between them
export function shades(m: Monster): Px[] {
    const [l, r] = [...m.eyes].sort((a, b) => a[0] - b[0]);
    const out: Px[] = [];
    for (const [ex, ey] of [l, r]) for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 0; dy++) out.push([ex + dx, ey + dy]);
    for (let x = l[0] + 2; x <= r[0] - 2; x++) out.push([x, l[1] - 1]);
    return out;
}

// Small monster for the contribution graph + isometric city: full grid, band,
// tail and blinking eyes at an arbitrary scale. Returns SVG fragments.
export function drawMini(scale: number, y0: number, state: string, accent: string): string[] {
    const m = current();
    const colors = colorsFor(m, state);
    const out: string[] = [];
    const cell = (x: number, y: number, fill: string, w = 1) =>
        `<rect x="${x * scale}" y="${y0 + y * scale}" width="${w * scale}" height="${scale}" fill="${fill}"/>`;
    m.grid.forEach((line, y) => {
        let x = 0;
        while (x < line.length) {
            const ch = line[x];
            if (ch in colors) {
                const s = x;
                while (x < line.length && line[x] === ch) x++;
                out.push(cell(s, y, colors[ch], x - s));
            } else x++;
        }
    });
    for (const [x, y] of m.band ?? []) out.push(cell(x, y, m.bandColor ?? accent));
    for (const [x, y, ch] of m.tailA) out.push(cell(x, y, colors[ch ?? "X"] ?? colors.X));
    const open = m.eyes.map(([x, y]) => cell(x, y, m.eye)).join("");
    const lid = m.eyes.map(([x, y]) => cell(x, y, colors[m.lid] ?? colors.X)).join("");
    out.push(`<g><animate attributeName="opacity" values="1;0;1" keyTimes="0;0.96;1" calcMode="discrete" dur="4s" repeatCount="indefinite"/>${open}</g>`);
    out.push(`<g opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;0.96;1" calcMode="discrete" dur="4s" repeatCount="indefinite"/>${lid}</g>`);
    if (state === "grumpy") for (const [x, y] of brows(m)) out.push(cell(x, y, m.eye));
    return out;
}
