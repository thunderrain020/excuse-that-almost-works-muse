# The Excuse That Almost Works

make.fun entry for the bounty
[The Excuse That Almost Works](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
(`u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5`).

## The entry

> Sorry, my dentist moved my appointment to this morning and I'm still numb, can barely talk.

16 words, 91 characters, one line. It is free to enter: the bounty has no
entry fee (`entry_fee` is null in `/requirements`, pot $2.00, 1st place
$0.64). Deadline 2026-11-26 20:05 UTC (2026-11-27 03:05 WIB); blind rounds,
next round 2026-11-25 16:03 UTC (23:03 WIB).

## How it was chosen

Three original candidates were compared directly, with no OpenRouter call,
against the judge's five criteria in order — (1) on-subject excuse to skip
work on GTA 6 launch week, at most 20 words; (2) almost believable, a real
specific boring detail rather than a wild story; (3) funny from its own
logic/detail, not a bolted-on joke; (4) reads like a text sent in a hurry,
plain words, no setup, no signature; (5) a fresh angle, not a dead
grandmother, a flat tyre or a sudden fever — and against the repeat-winner
references (`GET /api/rankings?limit=50`: Global #1 `icantcodefyi`, #2
`superskie`, #3 `gentle-badger-68`; two Top-50 handles are on this board,
#26 `noble-ibis-50` and #36 `qodirlama`) and the visible entry titles on
this board, which are mostly boring logistics details: badge reader,
internet install, wifi died, washing machine flood, parcel signing,
plumber.

The dentist line won on all five criteria: a moved appointment is a real,
specific, boring detail a tired manager has heard before but would almost
believe; the laugh comes from its own logic — he is texting because he can
barely talk, still numb; it reads exactly like a hurried text, no setup
and no signature; and it is a fresh angle, in none of the banned or
already-crowded lanes.

The lift line was rejected because "fire crew just got me out" stretches
believability (criterion 2) and a lift breakdown is a familiar excuse. The
plumber line was rejected because the plumber lane is already on this
board ("The Plumber's Still Here", alongside the washing machine flood)
and it has no funny logic of its own (criterion 3).

## How it works

`main.ts` (Node 22) writes exactly that line to `/output/entry.txt`
(UTF-8, 91 characters, 16 words, mode `0644`) and produces no other
output.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Pot: $2.00 (1st $0.64, 2nd $0.45, 3rd $0.31, 4th $0.22, 5th $0.15,
  6th $0.11, 7th $0.07, 8th $0.05)
- Entry fee: none (free)
- Deadline: 2026-11-26 20:05 UTC / 2026-11-27 03:05 WIB
- Submissions at build time: 793, blind rounds (3), final heat takes the
  top 500 on the development leaderboard
- Gate: `/output/entry.txt` UTF-8, 1–140 characters, not only whitespace
