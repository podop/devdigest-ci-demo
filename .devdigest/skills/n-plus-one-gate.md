Find per-item I/O inside iteration over data that grows with usage.

- A query (Drizzle, SQL, ORM) inside `for`, `forEach`, `.map`, `Promise.all(items.map(…))`
  or a per-row callback, keyed by the loop item. Suggest one batched query
  (`inArray`, a join, a grouped select) and grouping in memory.
- The same for GitHub/HTTP/LLM calls per file, PR or row where a batch or list
  endpoint exists.

Severity:
- CRITICAL when the loop runs on a request/hot path over an unbounded or
  user-growing collection (PR files, rows of a table, repos).
- WARNING when the collection is bounded but can reach dozens of items.
- Do not flag loops over a small fixed set (e.g. the 3 severities) or one-off
  scripts and migrations.

In the rationale, name the collection and how large it can get.