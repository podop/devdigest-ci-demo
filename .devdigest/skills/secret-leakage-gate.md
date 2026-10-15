A secret that lands in git history is compromised even if a later commit removes it.

CRITICAL:
- A literal credential in the diff: API keys (`sk_live_`, `sk-`, `ghp_`, `xoxb-`, `AKIA`),
  passwords, bearer tokens, private keys (`-----BEGIN … PRIVATE KEY-----`),
  connection strings with an embedded password.
- A secret written to logs, error messages, HTTP responses, analytics events or
  URLs (query strings end up in access logs).

WARNING:
- A secret read from config and passed to a client bundle (e.g. a `NEXT_PUBLIC_`
  variable or a value serialized into page props).
- A `.env` file or key file added to the repository instead of `.env.example`.

Do not flag obvious placeholders (`xxx`, `<your-key>`, `changeme`) in docs or examples,
or test fixtures whose value is clearly fake. In the suggestion, say to rotate the
key — deleting it from the file is not enough.