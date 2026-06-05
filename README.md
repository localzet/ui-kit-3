# Zorin UI 3

Vue 2 UI-kit extracted from the original application.

The package is intentionally independent from Laravel Mix. It builds with Vite and can be consumed by Laravel, standalone Vue frontends, or any bundler that supports Vue 2 single-file components.

## Install

```bash
npm install @localzet/ui-kit-3
```

## Vue usage

```js
import Vue from 'vue'
import ZorinUi3 from '@localzet/ui-kit-3'
import '@localzet/ui-kit-3/style.css'

Vue.use(ZorinUi3)
```

## Tailwind usage

```js
module.exports = {
    presets: [require('@localzet/ui-kit-3/tailwind')],
    content: [
        './resources/js/**/*.{js,vue}',
        './node_modules/@localzet/ui-kit-3/dist/**/*.js',
    ],
}
```

## Assets

Some legacy components reference assets by absolute `/assets/...` paths. After installing the package, copy `node_modules/@localzet/ui-kit-3/dist/assets` into the consuming app public assets directory.

## Build

```bash
npm run build
```

## Demo

```bash
npm run dev
```

The demo page has two layers:

- Live examples render inside `iframe` previews from `demo/preview.html`, with UI-kit CSS loaded only inside the preview document.
- The catalog page reads component names from `src/components/**/*.vue` and lists every extracted component, including legacy components that still need fixtures before they can be safely rendered standalone.

The GitHub Pages build outputs to `docs`:

```bash
npm run build:demo
```

## Release

Publishing is handled by `.github/workflows/npm-publish.yml`.

1. Add an npm automation token as the `NPM_TOKEN` repository secret.
2. Create a GitHub release for the package version.
3. The workflow runs `npm ci`, `npm run build:lib`, and `npm publish --access public --provenance`.

The demo is deployed by `.github/workflows/pages.yml` from the `main` branch. Enable GitHub Pages with GitHub Actions as the source in repository settings.

## Current extraction boundary

This first extraction keeps the visual component surface from Drive and preserves legacy integrations as optional runtime dependencies. The next cleanup pass should split the package into:

- `core`: purely presentational components and design tokens.
- `legacy-drive`: components that still depend on Drive events, Vuex getters, routes, axios endpoints, or domain data shapes.
