# bundled-dev

Performance of Vite bundled dev (`vite --experimentalBundle`) compared with Vite dev (`vite`) on real open-source apps.

| App | Folder | Vite | rolldown |
|---|---|---|---|
| tldraw `apps/examples` | [`tldraw/`](tldraw/README.md) | 8.3.3 | `c532f8106` (1.2.12 + #11127 + #11126) |

## Test compatibility dashboard

[`site/`](site/README.md) is a site that shows how many of Vite's playground tests that apply to bundled dev pass in bundled dev. A nightly workflow runs the tests, commits the results to `results/` and deploys the site.
