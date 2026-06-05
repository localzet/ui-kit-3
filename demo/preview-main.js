import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ZorinUi3 from '../src'
import { liveExamples } from './registry'
import PreviewApp from './PreviewApp.vue'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ZorinUi3)

const i18n = new VueI18n({
    locale: 'en',
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    messages: {
        en: {},
    },
})

const params = new URLSearchParams(window.location.search)
const example = liveExamples.find((item) => item.id === params.get('id')) || liveExamples[0]

new Vue({
    i18n,
    render: (h) => h(PreviewApp, { props: { example } }),
}).$mount('#preview')
