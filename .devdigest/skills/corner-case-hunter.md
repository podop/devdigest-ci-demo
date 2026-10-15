For every changed function, walk its inputs through the boundary list and
report the ones that produce a wrong result, a crash or an unbounded cost.

- **Empty** — `[]`, `''`, `{}`: division by length, `arr[0]!`, `Math.max(...[])` (`-Infinity`),
  reduce without an initial value.
- **Zero / negative / huge** — pagination `limit=0` or negative offset, a count that
  can overflow a DB `integer`, a timeout of 0 meaning "no timeout".
- **Null / undefined / missing keys** — optional fields read without a guard,
  `||` replacing a legitimate `0` / `''` / `false`.
- **Duplicates and ordering** — the same id twice in an input list, unstable sort
  assumptions, "first match" on non-unique data.
- **Text** — unicode / emoji length vs byte length, case-insensitive comparisons,
  trailing whitespace in identifiers.
- **Time** — DST and time-zone boundaries, end-of-month, inclusive vs exclusive ranges.

State the exact input that breaks the code in the rationale. WARNING when a
realistic input triggers it; SUGGESTION when it needs an unusual one.