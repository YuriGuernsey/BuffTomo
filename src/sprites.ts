// Shared prop sprites for the BuffTomo scenes. The monsters themselves live in
// monsters.ts. "." = empty; other characters are mapped to colours by the renderer.

export const HEART = [
    ".h.h.",
    "hhhhh",
    "hhhhh",
    ".hhh.",
    "..h..",
];

export const BOWL = [
    "............",
    ".XXXXXXXXXX.",
    "..XXXXXXXX..",
    "...XXXXXX...",
    "............",
];

// ---------------- props for the banner scene
// training dumbbell (w = plates, b = bar) - sits where the original yarn ball did
export const DUMBBELL = [
    "ww.....ww",
    "ww.....ww",
    "wwbbbbbww",
    "ww.....ww",
    "ww.....ww",
];

// ---------------- v1.1 props ----------------
// campfire (f = flame outer, F = flame core, w = wood log) - two flicker frames
export const FIRE_A = [
    "....f.....",
    "....ff....",
    "...fFFf...",
    "...fFFf...",
    "..ffffff..",
    "..ffffff..",
    ".wwwwwwww.",
    "..wwwwww..",
];
export const FIRE_B = [
    ".....f....",
    "....ff....",
    "...fFF....",
    "..ffFFf...",
    "..fffff...",
    "..ffffff..",
    ".wwwwwwww.",
    "..wwwwww..",
];

// birthday cake (k = cake body, p = frosting, c = candle, f = flame)
export const CAKE = [
    ".....c......",
    ".....c......",
    "..pppppppp..",
    ".kkkkkkkkkk.",
    ".kkkkkkkkkk.",
    "kkkkkkkkkkkk",
    "kkkkkkkkkkkk",
];
export const CAKE_CANDLE: Array<[number, number]> = [[5, 0], [5, 1]];
export const CAKE_FLAME: Array<[number, number]> = [[5, -1]];

// crescent moon (m)
export const MOON = [
    "...mmm..",
    "..mmmm..",
    ".mmm....",
    ".mmm....",
    ".mmm....",
    "..mmmm..",
    "...mmm..",
];

// ---------------- v1.2 props ----------------
// release trophy (y = gold)
export const TROPHY = [
    "..yyyy..",
    ".yyyyyy.",
    ".yyyyyy.",
    "..yyyy..",
    "...yy...",
    "...yy...",
    "..yyyy..",
    ".yyyyyy.",
];

// sick-day thermometer (w = tube, r = mercury)
export const THERMOMETER = [
    "..w..",
    ".w.w.",
    ".wrw.",
    ".wrw.",
    ".wrw.",
    ".rrr.",
    ".rrr.",
];

// october pumpkin (o = body, g = stem)
export const PUMPKIN = [
    "....g.....",
    "..ooooo...",
    ".ooooooo..",
    "oooooooooo",
    "oooooooooo",
    ".ooooooo..",
    "..ooooo...",
];

// weekend lemonade (y = drink, s = straw)
export const LEMONADE = [
    "s....",
    ".s...",
    "yyyy.",
    "yyyy.",
    "yyyy.",
    ".yyy.",
];
