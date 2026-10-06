# Verification — 6 October 2026

## Passed

- JavaScript syntax checks for application and roadmap data.
- 25 jsdom checks: roadmap counts and dates; overview and all six routes; local task saving and completion dates; all target rows; measured-result evidence requirement; selected public results and summaries; exclusion of private task/journal notes; HTML escaping; rejection of unsafe link schemes, unknown backup keys and invalid dates; cloud insert path; stale-revision conflict rejection without overwriting server records.
- Live Supabase migration applied successfully.
- Supabase security advisor: no findings.
- Live unauthenticated REST request to private records: HTTP 401 (denied).
- Live unauthenticated REST request to public showcase: HTTP 200 with an empty list; no results published.
- Non-owner JWT context with spoofed editable GitHub metadata: owner check false; zero private records visible.
- Transactional owner-identity fixture: owner check true, workspace visible, insert successful. Transaction rolled back; fixture user/identity/record were not retained.
- Public authentication settings endpoint confirms GitHub provider is currently disabled.
- Official ROS Humble TF2, rosbag and C++ tutorial source files fetched through GitHub. Modern Robotics, Nav2, filtering, calibration, marker, PCL and SLAM resource pages retrieved. Version caveats are in the UI.

## Not yet verified

- Visual rendering, keyboard flow and responsive layout in a real browser. The supported browser QA capability was unavailable; no browser inspection is claimed.
- GitHub Pages deployment: repository and Pages configuration are pending.
- Real owner OAuth flow, refresh-token behaviour and two-computer synchronisation: GitHub OAuth app/provider and redirect settings must be configured first.
- Live publication and unpublication by the real signed-in owner; no user progress has been published during development.

## Final acceptance after hosting

1. Open desktop and narrow mobile layouts; inspect overflow, labels and dialog controls.
2. Configure OAuth and sign in as YAGNADATTA25. Confirm cloud-connected status.
3. Save a clearly labelled test note; verify on a second device. Exercise sign-out.
4. Open a non-owner/private browser session; verify no private records are readable or writable.
5. Preview and publish an intentionally public test summary; verify only selected content in an unsigned visitor session. Unpublish the test snapshot.
6. Export/import a private backup and check a static public snapshot offline.
7. Keep real project task status incomplete until actual learning/build evidence exists.
