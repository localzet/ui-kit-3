import './tailwind.css'
import './sass/app.scss'

import { events } from './bus'

const modules = import.meta.glob('./components/**/*.vue', { eager: true })

export const components = Object.values(modules)
    .map((module) => module.default)
    .filter((component) => component && component.name)

export { events }

export default {
    install(Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })

        Vue.prototype.$zorinUiEvents = events
    },
}
