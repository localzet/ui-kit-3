# Zorin UI 3

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

```bash
npm run build:demo
```