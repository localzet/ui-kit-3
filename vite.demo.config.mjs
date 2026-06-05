import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

export default defineConfig({
    base: process.env.GITHUB_PAGES === 'true' ? '/ui-kit-3/' : '/',
    plugins: [vue()],
    publicDir: 'public',
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: fileURLToPath(new URL('./index.html', import.meta.url)),
                preview: fileURLToPath(new URL('./demo/preview.html', import.meta.url)),
            },
        },
    },
})
