Mock only at boundaries you do not own or cannot run fast: network, clock,
randomness, third-party SDKs, the filesystem. Everything else runs for real.

WARNING:
- The module under test is itself mocked (`vi.mock` of the file being tested), or
  the function under test is stubbed on its own object.
- A mock returns exactly the value the test then asserts (the assertion checks the
  mock, not the code).
- Pure helpers, mappers or domain functions are mocked instead of executed.
- Tests assert only that a mock was called (`toHaveBeenCalled`) while the
  observable result (return value, DB row, response) is never checked.

SUGGESTION:
- Deep mock chains (`a.b.c.mockReturnValue`) replicating an SDK's shape — prefer a
  small hand-written fake of the port.
- Mocks not reset between tests (`restoreAllMocks` / fresh fakes per test).

Category: `test`. Never CRITICAL.