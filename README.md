
# Video Player

Simple React video player using Video.js with adaptive bitrate, quality selector and playback-speed controls. Built with Vite.

## Quick Start
- **Prerequisites:** Node.js (16+)
- **Install dependencies:**

```bash
npm install
```

- **Run dev server:**

```bash
npm run dev
```

- **Build:**

```bash
npm run build
```

- **Preview production build:**

```bash
npm run preview
```

## Features
- **Adaptive bitrate (HLS):** configured via HLS `.m3u8` source and `videojs-http-source-selector` plugin
- **Quality selector:** enabled via `videojs-http-source-selector` and `videojs-contrib-quality-levels`
- **Playback speed:** configurable via `playbackRates` option
- **Contained responsive player:** CSS keeps the player inside the viewport and preserves aspect ratio

## Important Files
- **Video component:** [src/components/videojs.jsx](src/components/videojs.jsx)
- **App entry:** [src/App.jsx](src/App.jsx)
- **Styles:** [src/App.css](src/App.css)

## Configuration
- **Change sources:** edit the `sources` array inside `videoJsOptions` in [src/App.jsx](src/App.jsx). Use HLS (`application/x-mpegURL`) for adaptive bitrate with an MP4 fallback.
- **Change playback speeds:** update `playbackRates` in [src/App.jsx](src/App.jsx).
- **Control sizing:** the project uses CSS in [src/App.css](src/App.css) to keep the player contained. If you enable Video.js `fluid` mode the player will scale differently.

## Troubleshooting
- **Quality selector missing:** ensure the source is an HLS manifest (`.m3u8`) containing quality variants and that `videojs-http-source-selector` and `videojs-contrib-quality-levels` are installed (they appear in `package.json`).
- **Video or controls not visible:** open the browser console for errors (CORS, network, or JS errors). Confirm `fluid`/`responsive` options—CSS-based sizing expects `fluid: false`.

## Notes
- Uses Vite: `npm run dev` for development.
- To add plugins, `npm install <plugin>` and import it in [src/components/videojs.jsx](src/components/videojs.jsx).

If you want, I can add a demo page with multiple sources or a UI to switch streams—should I add that next?
