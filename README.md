[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/baguspriyoariwibowo07-sketch/toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/baguspriyoariwibowo07-sketch/toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

# The Funniest Toaster Error — entry by bagus-priyo

A make.fun entry: the funniest toaster error message. One line, at
most 120 characters.

## The entry

> E04: Bread jammed again. I am a toaster. This is my entire job and I am still failing at it.

92 characters, single line.

## Why it lands

It starts as a plausible firmware fault — a terse error code and a
jammed slice — then the appliance turns reflective. The escalation
is the joke: the toaster states its identity, reduces its existence
to a single task, and admits it is failing at that task. Deadpan,
self-aware, and formatted like a message a real toaster could show.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` is a Node program using only the standard library. It
validates the line at runtime (single line, non-blank, code-point
count within the 120-character gate) and writes it to
`entry.txt` in the output directory — `MAKEFUN_OUTPUT_DIR` or
`OUTPUT_DIR` when set, otherwise `/output`, as in the grader.
