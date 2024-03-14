# Demonstrating memory leak in react-router with Redirect component in jest and JSDOM

This applies as of v6.22.3 of react-router.

## How to reproduce

### Setup

Install all dependencies with `npm ci`.

Note that it will patch the `jest-runner` package to take a heap snapshot after each test is completely torn down.
These heap snapshots will be placed in your current working directory.

### Run tests (with and without `<Redirect />`)

run `npm run test-with-redirect` and `npm run test-without-redirect`.

You might want to rename the heap snapshots after running each of the scripts so that you don't confuse them.

### Analyze heap snapshots

Load heap snapshot into Chrome dev tools (open dev tools, go to "memory" tab, import snapshot by clicking the "load profile" button (CMD + O)).

In the snapshot that uses the `<Redirect />`, you will find 4 `Window` objects still in memory.
In the other snapshot, there will be no `Window` objects still in memory.
