# Airplay Speaker Website

Official product website and APK download page for **Airplay Speaker**, an AirPlay music receiver built for Android TV.

## Live website

- GitHub Pages: <https://l3kza08.github.io/airplay-speaker-web/>
- Download page: <https://l3kza08.github.io/airplay-speaker-web/download/>

## Features

- Interactive Android TV playback preview
- Product film recorded on Android TV
- Word-by-word lyrics demonstration
- Dedicated APK download and installation guide
- v0.14.13 additions and fixes shown beside the APK download
- Responsive layouts for desktop, tablet, and mobile

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Validation

```bash
npm run lint
npm test
```

## Deployment

The source lives on `main`. The generated static website is published from the `gh-pages` branch so it can be served directly by GitHub Pages.

Build the GitHub Pages version with:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/airplay-speaker-web npm run build:pages
```

The Android TV application source and APK releases are available in the [Sonic-Cast repository](https://github.com/l3kza08/Sonic-Cast).

## License

GPL-3.0. Airplay Speaker is not affiliated with or endorsed by Apple Inc.
