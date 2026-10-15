Map each changed production branch to a test in the diff.

- A new conditional, error path, early return or calculation with no test that
  would fail if it were removed or inverted. WARNING when the path affects money,
  auth, data writes or a public contract; otherwise SUGGESTION.
- A bug fix with no regression test that reproduces the original bug. WARNING.
- A changed public function signature or response shape whose existing tests were
  not updated (they now test the old behaviour or were deleted). WARNING.

Name the exact branch and the test case to add (input → expected result).
Do not ask for tests of trivial getters, type-only changes, logging or config
wiring. Category: `test`.