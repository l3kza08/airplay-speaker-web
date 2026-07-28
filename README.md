# Airplay Speaker Website

Official product website and APK download page for **Airplay Speaker**, an AirPlay music receiver built for Android TV.

## Live website

- GitHub Pages: <https://l3kza08.github.io/airplay-speaker-web/>
- Download page: <https://l3kza08.github.io/airplay-speaker-web/download/>

## Features

- Interactive five-song Android TV preview with karaoke, duet, instrumental, queue, and plain-lyrics screens
- Six real Android TV films that rotate automatically every 15 seconds
- Word-by-word lyrics demonstration
- Dedicated APK download and installation guide
- v2.0.0 additions and fixes compared directly with the previous v1.0.0 GitHub release
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
