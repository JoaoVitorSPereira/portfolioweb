# João Pereira — Portfolio

Personal portfolio of a Senior Mobile Developer, presented as a **phone that boots up in the browser**: you tap the *Portfolio* app icon and it opens a mobile-style app with a launcher, screens that slide in like a navigation stack, and a status bar with a live clock. It is bilingual (EN/PT), statically exported, and also readable by AI agents.

Live: <https://joaovitorspereira.github.io/portfolioweb>

## Tech stack

| Layer       | Technology                                                                    |
| ----------- | ----------------------------------------------------------------------------- |
| Framework   | Next.js 16 (Pages Router, `output: 'export'`) + React 19                      |
| Language    | TypeScript (strict, no `any`)                                                 |
| Styling     | styled-components v6 (theme tokens, `styled-normalize`), CSS-only animations  |
| i18n        | i18next + `i18next-browser-languagedetector` (`en`, `pt`)                     |
| Icons/Fonts | `react-icons` (Ionicons 5), local font *MADE Mirage* via `next/font/local`    |
| Agents      | WebMCP (browser) + remote MCP server on a Cloudflare Worker                   |
| Tooling     | `tsx` (build scripts), Prettier, EditorConfig                                 |
| CI/Hosting  | GitHub Actions → GitHub Pages (`gh-pages` branch)                             |

## Getting started

```bash
npm i
npm run dev          # http://localhost:3000 (generates agent files first)
npm run build        # static site in ./out
```

| Script                | What it does                                                |
| --------------------- | ----------------------------------------------------------- |
| `npm run dev`         | Generates agent files, then starts the Next dev server      |
| `npm run build`       | Generates agent files, then builds the static export        |
| `npm run test:mcp`    | Smoke-tests the MCP JSON-RPC handler                        |
| `npm run worker:dev`  | Runs the Cloudflare Worker (MCP server) locally             |
| `npm run worker:deploy` | Publishes the Worker (needs `npx wrangler login` once)    |

## How the portfolio works (dynamics)

### 1. Phone shell — `src/components/Phone`
- **Boot animation** (`BOOT_MS = 2400`) with a JP logo and progress bar, shown once per browser tab.
- **Phone home screen** with a single *Portfolio* app icon. Tapping it zooms the app out of the icon (the `transform-origin` is computed from the icon's position), like iOS. `Esc` or the home indicator closes it.
- **Status bar** with a live clock (updated every 20 s), signal/Wi-Fi/battery icons and a dynamic island.
- State (`booted`, `phone-open`) is kept in `sessionStorage`, so a reload resumes where you were.

### 2. Launcher + screen stack — `HomeContent`
- The app opens on a **launcher** with one icon per section (`menu.ts`): Projects, Skills, About me, Statement, Contact.
- Each section is a screen that **slides in over the launcher** like a navigation stack, with a back button. The active screen is tracked by `useScreenStack` (`src/hooks/useScreenStack.ts`) and persisted in `sessionStorage`.
- Inactive screens stay in the DOM, hidden with `inert`, so **all content is still crawlable** and not focusable by keyboard.
- Header has an avatar, greeting and an **EN / PT switch** that navigates between `/en` and `/pt`.

### 3. Visual language — `src/styles`, `FragmentsBackground`
- **Glassmorphism** helper (`glass.ts`): translucent background, `backdrop-filter` blur/saturate, subtle border and shadow, reused across surfaces.
- **FragmentsBackground**: a PS3 XMB-style animated background of 110 drifting particles over a blue sweep, pure CSS. Positions come from a **seeded PRNG**, so server and client render identical markup (no hydration mismatch).
- All colors/breakpoints come from `src/themes/default.ts` (typed via `styled.d.ts`).

### 4. Internationalization — `src/i18n`, `src/locales`, `src/lib/lang.ts`
- Two languages: `en` (default) and `pt`. Translation strings live in `src/locales/<lang>/translation.json`.
- `getStaticPaths` pre-renders `/en` and `/pt`; `/` redirects to the browser's language (`RedirectScreen`).
- Long-form data (projects, timeline, skills) lives in `src/constants/constants.ts` with `title`/`titlePT`-style fields.

### 5. SEO / AEO — `src/lib/seo.ts`, `pages/[lang]/index.tsx`
- Per-language `<head>`: title, description, Open Graph / locale + alternate locale, canonical URL and JSON-LD structured data.
- `public/og.png` is the link-preview image; `sitemap.xml` is generated at build.

### 6. Agent surfaces (WebMCP / MCP / llms.txt)
`src/lib/agent.ts` is the **single source of truth** for what an agent can read; everything below derives from it.

| Surface                | Where                                    | Purpose                                                     |
| ---------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| WebMCP tools           | `src/components/WebMCP`                  | Registers `get_resume` and `get_projects` for in-browser agents |
| Remote MCP server      | `worker/` (Cloudflare Worker) + `src/lib/mcp.ts` | Same tools over JSON-RPC 2.0 (streamable HTTP, stateless, CORS) |
| Generated files        | `public/resume.json`, `resume.pt.json`, `llms.txt`, `llms-full.txt`, `agents.md`, `sitemap.xml`, `robots.txt`, `ai-index.json`, `schema.json`, `docs.json`, `en.md`, `pt.md` | Machine-readable profile (JSON Resume + [aeo.js](https://aeojs.org) files) |

- `scripts/generate-agent-files.ts` writes the generated files before `dev` and `build`. `llms.txt`, `llms-full.txt` and `sitemap.xml` are hand-written there; [aeo.js](https://aeojs.org) adds `robots.txt` (AI crawlers allowed), `ai-index.json`, `schema.json`, `docs.json` and Markdown copies of each page.
- `/` renders the same crawlable page as `/en` (canonical points to `/en`) and then redirects to the visitor's language, so crawlers that skip JS still get content.
- Check the deployed site with `npx aeo.js check <url>` or https://check.aeojs.org.
- To enable the remote server: `npm run worker:deploy`, then set `MCP_URL` in `src/lib/agent.ts` so it is advertised in `llms.txt` / `agents.md`.

## Architecture

```
src/
├── pages/                  # Screens: thin routing files (Head + one Content)
│   ├── index.ts            #   RedirectScreen → /<lang>
│   └── [lang]/index.tsx    #   HomeScreen
├── components/
│   ├── Contents/home/HomeContent/   # launcher + Projects/Skills/About/Statement/Contact
│   ├── Phone/              # phone shell, boot, status bar, app open/close
│   ├── FragmentsBackground/
│   └── WebMCP/
├── hooks/                  # useScreenStack
├── constants/              # static data (experiences, skills, timeline)
├── i18n/  locales/         # i18next config + en/pt strings
├── lib/                    # agent (tools/resume), mcp (JSON-RPC), seo, lang
├── styles/  themes/        # global styles, fonts, glass helper, theme tokens
└── images/
worker/                     # Cloudflare Worker (remote MCP server)
scripts/                    # generate-agent-files, test-mcp
public/                     # static assets + generated agent files
```

## Engineering rules & conventions

This project is deliberately built the way I'd run a production mobile/web codebase: explicit rules, one responsibility per layer, and checks before anything is called "done". The same rules are enforced for AI coding agents through `CLAUDE.md`.

### 1. Screen pattern — separate responsibility
A **Screen** is a file under `src/pages`. It owns only what Next.js needs from a route:
- `<Head>` / metadata, `getStaticProps`, `getStaticPaths`;
- rendering exactly **one** Content component.

A Screen has **no** data hooks, no store access, no layout, no UI states and no styled-components. The exported function is always named `<ContextName>Screen` (`HomeScreen`, `RedirectScreen`), matching the domain, never `Home`/`Index`/`Screen`.

```tsx
// src/pages/[lang]/index.tsx
export default function HomeScreen({ language }: Props) {
  return (
    <>
      <Head>…</Head>
      <HomeContent language={language} />
    </>
  );
}
```

### 2. Content pattern
Screen content lives in `src/components/Contents/<screen>/<Name>Content/`. The Content owns everything the screen needs: hooks, stores, every UI state (loading, empty, error) and every layout decision.
- One Content per screen, named `<Screen><Route>Content` (`HomeContent`, `ProjectsIndexContent`).
- Styled components used by only one Content live in that Content's `styles.ts`; a second consumer promotes them to `src/components/<Name>/`.
- Sub-components used by one Content live inside its folder (`About`, `Projects`, `Skills`…), promoted to `src/components/` when a second screen needs them.
- Route data (e.g. `language`) reaches the Content through props from the Screen.

### 3. State management
- **Local UI state** (open/closed, selected tab, input value) stays in the Content with `useState`.
- **Shared or persistent state** gets its own store in `src/stores/use<Name>Store.ts` (Zustand v5). One store per domain, never one global store; components select only what they need; Screens never touch stores.
- **Data fetching/derivation** lives in a custom hook in `src/hooks/`, not inline in the Content (e.g. `useScreenStack`).
- **Browser storage** (`sessionStorage`/`localStorage`) is only accessed inside `try/catch` and only from an effect or event handler, because it doesn't exist during static rendering.

### 4. Function nomenclature

| Context                          | Style                  | Example                                    |
| -------------------------------- | ---------------------- | ------------------------------------------ |
| React components                 | `function` declaration | `export default function HomeContent() {}` |
| Custom hooks                     | `function` declaration | `export function useScreenStack() {}`      |
| Zustand store creators           | `function` declaration | `create<State>((set) => ({ … }))`          |
| Inline event handlers            | Arrow function         | `onClick={() => go(null)}`                 |
| `useCallback` / `useMemo` bodies | Arrow function         | `useCallback(() => { … }, [])`             |
| Object / record properties       | Arrow function         | `setToken: (token) => set({ token })`      |
| Style interpolations             | Arrow function         | `${({ theme }) => theme.colors.primary}`   |

Top-level components and hooks are **never** arrow functions.

### 5. Path aliases
Configured in `tsconfig.json` (`paths`), resolved by Next.js in dev and build with no extra bundler config.

| Alias            | Resolves to        | Use for                            |
| ---------------- | ------------------ | ---------------------------------- |
| `@/components/*` | `src/components/*` | shared components and `Contents/*` |
| `@/constants/*`  | `src/constants/*`  | static data                        |
| `@/i18n/*`       | `src/i18n/*`       | i18n config/init                   |
| `@/hooks/*`      | `src/hooks/*`      | custom hooks                       |
| `@/lib/*`        | `src/lib/*`        | helpers (`lang`, `agent`, `mcp`)   |
| `@/locales/*`    | `src/locales/*`    | translation JSON                   |
| `@/styles/*`     | `src/styles/*`     | global styles, fonts, `glass`      |
| `@/themes/*`     | `src/themes/*`     | theme tokens                       |
| `@/images/*`     | `src/images/*`     | imported images                    |

- Cross-folder imports always use an alias (`@/lib/agent`), never `../../..`; relative imports are only for siblings in the same folder (`./styles`).
- Pages are never imported from anywhere.
- Files in `scripts/` and `worker/` sit outside `src`, so they import into `src` with relative paths; the `src` files they pull in still use `@/` aliases, which `tsx` and `wrangler` resolve through `tsconfig.json`.
- A new alias (e.g. `@/stores/*`) is added to `tsconfig.json` in the same change that creates its folder.

### 6. TypeScript rules
- **Strict mode is on** and never turned off.
- **No `any`**: use a real type, a generic, or `unknown` and narrow it. Untyped browser APIs (like `document.modelContext` for WebMCP) get a minimal hand-written interface instead of a cast.
- **No `@ts-ignore`**: if suppression is unavoidable, `@ts-expect-error` with a one-line reason.
- **No non-null assertions (`!`)** unless the invariant is guaranteed and commented.
- **`interface Props`** above every component that takes props; components without props declare none.
- **`interface` for object shapes and props, `type` for unions, mapped and utility types.**
- **No `enum`**: string-literal unions or `as const` objects (`type ScreenId = (typeof menu)[number]['id']`).
- **`import type`** for type-only imports.
- **Explicit return types** on exported functions and hooks when not obvious from the body.
- **Transient props** on styled components (`styled.div<{ $active: boolean }>`) so they never reach the DOM.
- **Typed theme** through `DefaultTheme` (`src/styles/styled.d.ts`); colors and breakpoints from `src/themes/default.ts` are never hardcoded.
- **Data shapes live next to their data** (`constants.ts` exports its interfaces) and are reused, not redeclared.
- **`npx tsc --noEmit -p .` must pass** before a change is reported as done.

### 7. Git workflow
- Conventional commit messages (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`).
- Verify first (typecheck, tests, build), then present the diff/summary and get an explicit go-ahead before every `git commit` and every push to `main`.
- No AI attribution trailers in commit messages or PR descriptions.

## Architecture decisions & what they show

| Decision | Why it matters |
| -------- | -------------- |
| **Single source of truth** (`src/lib/agent.ts`, `constants.ts`) feeds the UI, JSON-LD, `resume.json`, `llms.txt`, WebMCP and the Worker | No drift between what a human sees and what an agent reads; add data once |
| **Thin Screen / fat Content** | Routing concerns stay separate from UI logic, so screens are easy to test, move and reason about (the same idea as separating navigation from feature modules in a mobile app) |
| **Stack-style navigation** (`useScreenStack`) with `inert` inactive layers | Mobile navigation semantics on the web: state survives reloads, keyboard focus stays in the visible screen, content stays crawlable |
| **Static export + build-time generated files** | Zero-runtime server, cheap hosting, deterministic output; agent files are regenerated on every `dev`/`build` |
| **Seeded PRNG for the animated background** | Deterministic SSR/CSR markup, so no hydration mismatch |
| **Pure functions as tools** (`run` is data-in/data-out) | The same definitions back WebMCP in the browser and the MCP server on the Worker |
| **Stateless MCP over JSON-RPC 2.0** on Cloudflare Workers | Edge-deployed, no session storage, CORS-ready, smoke-tested with `npm run test:mcp` |
| **Defensive browser-API access** (`try/catch` storage, feature-detected `modelContext`) | Works in private mode, SSR and browsers without WebMCP |
| **Typed boundaries** (strict TS, no `any`, typed theme, typed tool inputs) | Refactors are safe; the compiler is the first reviewer |
| **Accessibility & SEO by default** (`inert`, `aria-*`, hreflang, canonical, OG, JSON-LD, sitemap) | The site is usable by keyboard, crawlers and AI agents alike |

## Skills demonstrated

This portfolio is also a compact showcase of how I work as a **Senior Mobile Developer** (React Native, TypeScript, native bridges), translated to the web:
- **Architecture ownership**: layered structure, clear module boundaries, promotion rules for shared code, documented conventions others can follow.
- **Mobile UX craft**: iOS-style app open/close transitions, launcher and navigation stack, safe-area handling, status bar, persistent navigation state.
- **Code quality at scale**: strict typing, consistent naming, function-style rules, alias-only cross-module imports, one checked command (`tsc`) before "done".
- **Team practices**: written standards (`CLAUDE.md`), Git workflow and commit conventions, review-before-merge discipline.
- **Release lifecycle**: CI on every push/PR, automated build and deploy, base-path handling per environment.
- **Security & resilience mindset**: defensive storage access, stateless endpoints, no secrets in the client, read-only tool annotations.
- **Cross-platform thinking**: one data source, multiple surfaces (web UI, WebMCP, MCP server, JSON Resume, `llms.txt`).
- **Internationalization**: EN/PT routing, pre-rendered locales, alternate-language metadata.

## Deployment

Pushing to `main` triggers `.github/workflows/definitive-build.yml`: `npm ci` → `npm run build` → deploy `out/` to the `gh-pages` branch. In production the site is served under the `/portfolioweb` base path (set in `next.config.js`); images are unoptimized because the export is static.
