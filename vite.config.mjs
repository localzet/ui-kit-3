import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

const external = [
    'vue',
    'vuex',
    'vue-router',
    'vue-i18n',
    'vue-feather-icons',
    'vee-validate',
    'v-click-outside',
    'axios',
    'lodash',
    'twemoji',
    'pdfvuer',
    'datatransfer-files-promise',
]

export default defineConfig({
    plugins: [vue()],
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
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
            name: 'ZorinUi3',
            fileName: 'zorin-ui-3',
        },
        rollupOptions: {
            external,
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    vuex: 'Vuex',
                    'vue-router': 'VueRouter',
                    'vue-i18n': 'VueI18n',
                    'vue-feather-icons': 'VueFeatherIcons',
                    'vee-validate': 'VeeValidate',
                    'v-click-outside': 'vClickOutside',
                    axios: 'axios',
                    lodash: '_',
                    twemoji: 'twemoji',
                    pdfvuer: 'pdfvuer',
                    'datatransfer-files-promise': 'DataTransferFilesPromise',
                },
            },
        },
    },
})
