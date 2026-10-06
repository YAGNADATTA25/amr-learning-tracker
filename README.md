# AMR Fieldbook

A personal, editable learning and engineering tracker for Yagna. Static HTML/CSS/JavaScript, prepared for GitHub Pages with Supabase authentication and data storage.

## Included

- **Reliable Warehouse AMR**: 6 October–15 December 2026.
- **Infrastructure-Assisted Localisation**: 15 December 2026–23 February 2027.
- 20 weeks, 40 learning/build tasks, 18 proposed acceptance targets.
- Per-project proposals, skills, specific resource links, weekly deliverables and evidence requirements.
- Private status, due dates, actual completion dates, notes, blockers, evidence URLs and weekly updates.
- Measured results kept separate from target values.
- Explicit public-snapshot preview/publication and standalone showcase export.
- Browser-local draft mode, private JSON backup/import and intentional local-to-cloud transfer.
- Per-record optimistic concurrency: an old device cannot silently overwrite a newer edit.

No project achievement is pre-populated. All numerical targets are proposed, not measured results or industry standards.

## Current setup status

The Supabase project `xipcyybegximllkmlvva` exists in Frankfurt. `schema.sql` was applied on 6 October 2026. The private/public tables and policies are configured. No private learning results or public snapshot were seeded. GitHub Pages publication and the application's GitHub OAuth provider configuration are still required. End-to-end owner sign-in/synchronisation has not been verified.

The Supabase management-account sign-in is separate from website authentication.

## Run or preview

Open `index.html` from this folder for a local draft, or serve the folder with a static web server. GitHub sign-in requires an HTTP(S) origin configured in Supabase; file previews use local drafts. No build step or runtime package installation is needed. `supabase.js` is a vendored, pinned Supabase JS 2.58.0 UMD bundle with its MIT license in `SUPABASE-LICENSE`.

`AMR-Fieldbook.html` delivered separately is a standalone preview with the same app embedded. Browser/app preview sandboxes can restrict local storage, network calls or downloads; open it in a normal browser if those controls are unavailable.

## Publish to GitHub Pages

1. Create the public repository `YAGNADATTA25/amr-learning-tracker` (or choose a different name).
2. Upload this folder's contents at the repository root, including `index.html`, `styles.css`, `app.js`, `data.js`, `supabase.js` and `.nojekyll`. Do not upload `node_modules` or private exported backups.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
4. Wait for the Pages deployment and use its returned URL. For the suggested name the expected URL is `https://yagnadatta25.github.io/amr-learning-tracker/`, but that URL is not claimed to be live yet.
5. Use the same URL in the OAuth setup below. If the repository name changes, change the URL accordingly. Hash routes work beneath a repository subpath without server rewrites.

GitHub source code is public in this setup; private progress stays in Supabase under RLS.

## Enable the website's GitHub sign-in

1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
2. Name: `AMR Fieldbook`. Homepage URL: the exact deployed website URL.
3. Authorization callback URL: `https://xipcyybegximllkmlvva.supabase.co/auth/v1/callback`.
4. Generate the OAuth app's client secret. Put it directly in the Supabase dashboard, never in source files or chat.
5. Supabase → Authentication → Sign In / Providers → GitHub → enable; enter the Client ID and secret; save.
6. Authentication → URL Configuration: set Site URL to the exact deployed URL, with trailing slash. Add that exact URL to allowed redirect URLs. Use narrow exact URLs rather than broad wildcard redirects.
7. Open the website and select Sign in with GitHub using `YAGNADATTA25`.
8. Confirm the header says **Private · cloud connected**. Save a test learning note. Open a second browser/computer, sign in, and verify the note. Sign out and verify private information disappears.

Official instructions: https://supabase.com/docs/guides/auth/social-login/auth-github
GitHub Pages instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Access design

- `tracker_private.is_owner()` checks the authenticated user's provider-verified `auth.identities` record against GitHub provider ID `166443516`. It does not trust user-editable metadata or a display name.
- Its necessary SECURITY DEFINER identity lookup is in a non-exposed schema, has an empty search path, checks `auth.uid()`, and is executable only by authenticated callers.
- `tracker_records`: owner-only SELECT/INSERT/UPDATE. Anonymous visitors have no privileges. A workspace sentinel distinguishes an authorised empty workspace from a non-owner response.
- `tracker_showcase`: public SELECT; owner-only writes. Only curated projections belong here.
- The frontend contains only a publishable key. No service-role key, OAuth secret or management credential is included.
- OAuth uses the official client with PKCE. Application sessions use browser storage; sign out on shared devices.
- Dates and private notes do not enter a public snapshot except the explicit fields described in its review screen.
- Public results require a separate checkbox. Updates have separate private notes and public summaries. Publication requires a final preview action.
- Unpublishing removes the live snapshot, but cannot recall downloaded copies.

Do not run `schema.sql` again on this existing project: it is the record of the already-applied initial migration. To use another Supabase project, apply it once and deliberately update the owner identity and app URL/key.

## Working day to day

1. Open Project 01 → Weekly roadmap. Start week 1.
2. For each task, learn the concept, implement it, then record evidence and a completion note.
3. Enter actual measurements in Targets & results only after experiments. Include units, trial count, conditions and an evidence link.
4. Add a weekly update with understood topics, remaining gaps, outcomes and next step.
5. Review the timeline. Changed due dates require a reason and retain a date-history record in backups. Changing a project deadline does not automatically shift tasks or Project 02.
6. In cloud mode, changes sync on save and reload on window focus (when no editor is open); Refresh from cloud is also available. It is not collaborative real-time editing.
7. Export a private backup regularly. Imports are validated and loaded into a separate local draft. Transfer to cloud is explicit and preserves unrelated cloud records; an interrupted transfer may be partial and can be reviewed/retried.
8. Select only the results and public summaries you want shared. Preview publication. Publish to the public read-only view, or export an HTML snapshot.

Share the hosted URL with `#showcase` appended, or distribute the exported standalone recruiter snapshot. Export a fresh static snapshot after major milestones; it remains readable if the database is unavailable. The live site falls back to project proposals and an availability message, never invented results.

## Learning notes

All assigned resources are free. The Construct remains optional. Humble tutorials are pinned to their official source branch; the rendered ROS documentation blocked automated retrieval, so the source lessons were checked through GitHub. Nav2's linked guide is Rolling: conceptual reading only until the installed release is confirmed. OpenCV tutorials are version-labelled and must be checked against the environment.

Original proposed targets may need revision after the baseline, but freeze the evaluation protocol before interpreting results. Report absolute error as well as percentage improvement, failed trials as well as successes, and simulation limitations. Physical hardware, radar–camera learning, advanced prediction and lifelong map maintenance remain later work.

## Verification

Run `npm ci` then `npm test` for the DOM/data/privacy checks. Runtime hosting needs no npm install. Tests use pinned jsdom as a dev dependency. `VERIFICATION.md` records completed checks and remaining checks requiring deployed OAuth. This build was not visually inspected in a real browser because the supported browser QA capability was unavailable.
