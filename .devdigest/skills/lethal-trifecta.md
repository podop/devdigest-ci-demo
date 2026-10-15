The lethal trifecta is one flow where an LLM or agent (1) reads private data,
(2) is exposed to untrusted content that can carry instructions, and (3) can send
data out (HTTP request, email, webhook, rendered link or image URL, tool call).
With all three, a prompt injection in (2) can exfiltrate (1) through (3).

- Report only when you can point at all THREE components in code reachable in one
  flow; then set `kind` to "lethal_trifecta" with `trifecta_components` and
  `evidence` (file + line for each). CRITICAL.
- Two of the three is not a trifecta — at most a WARNING describing which leg is
  missing and why it matters.
- A plain `request → DB read → JSON response` endpoint with no LLM in the loop is
  ordinary access control, never a trifecta.

Mitigations to suggest: drop one leg (no outbound tools while untrusted content is
in context), allow-list outbound destinations, require human confirmation.