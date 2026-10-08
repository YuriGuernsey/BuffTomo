# Contributing to github-pet

Thanks for considering it! A few ground rules that keep this project what it is:

## The zero-dependency rule

The generator must stay **dependency-free**: Node/Bun standard library only,
no `package.json`, no `npm install`. If an idea needs a package, restructure
the idea. (Rendering is hand-drawn pixel grids + SMIL for the same reason:
GitHub strips JS/CSS from README images, so everything must be plain SVG.)

## Run it locally

```bash
node generate.ts        # Node 24+ (native type stripping)
# or
bun generate.ts
```

No token needed - without `GITHUB_TOKEN` the calendar falls back to flat
slabs, which is exactly what CI tests. Set env vars to exercise more:

```bash
PET_USER=you PET_MONSTER=drako GITHUB_TOKEN=ghp_... PET_TZ_OFFSET_MINUTES=60 \
  PET_WATCHED_REPOS="repo1,repo2" PET_NAME=you PET_CONTACT=you@x.com \
  node generate.ts
```

## Before opening a PR

1. `node generate.ts` must exit 0 **with and without** a token (the no-token
   fallback path is what external contributors can run - never break it).
2. Every SVG in the output dir must be well-formed XML.
3. New pet behavior = a new rule in `src/state.ts` mapped to **real GitHub
   data**. No fake randomness - the monster only reacts to truth.
4. Monsters live in `src/monsters.ts`: a 20x16 grid (rows 0-9 head, 10-15
   body), a colour map, eye coords, two tail frames and an optional band.
   Keep the body edge at column 17 so the shared paw poses line up.

## Feedback / ideas

Not a code change? Open a Discussion (ideas, show-and-tell) or an Issue
(bugs). Screenshots of the cat being weird are always appreciated.
