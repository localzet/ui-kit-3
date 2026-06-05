import Vue from 'vue'
import VueI18n from 'vue-i18n'

import '../src/tailwind.css'
import '../src/sass/app.scss'

import AlertBox from '../src/components/UI/Others/AlertBox.vue'
import ButtonBase from '../src/components/UI/Buttons/ButtonBase.vue'
import ColorLabel from '../src/components/UI/Labels/ColorLabel.vue'
import ListInfo from '../src/components/UI/List/ListInfo.vue'
import ListInfoItem from '../src/components/UI/List/ListInfoItem.vue'
import ProgressBar from '../src/components/UI/Others/ProgressBar.vue'
import SectionTitle from '../src/components/UI/Labels/SectionTitle.vue'
import SwitchInput from '../src/components/Inputs/SwitchInput.vue'
import TextLabel from '../src/components/UI/Labels/TextLabel.vue'
import { liveExamples } from './registry'
import PreviewApp from './PreviewApp.vue'

Vue.config.productionTip = false
Vue.use(VueI18n)

const previewComponents = [
    AlertBox,
    ButtonBase,
    ColorLabel,
    ListInfo,
    ListInfoItem,
    ProgressBar,
    SectionTitle,
    SwitchInput,
    TextLabel,
]

previewComponents.forEach((component) => {
    Vue.component(component.name, component)
})

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
