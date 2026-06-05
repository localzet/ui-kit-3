<template>
    <div class="demo-shell">
        <aside class="demo-sidebar">
            <div class="brand">
                <span class="brand-mark">Z3</span>
                <div>
                    <h1>Zorin UI 3</h1>
                    <p>Vue 2 component kit</p>
                </div>
            </div>

            <nav class="nav-list" aria-label="Component examples">
                <button
                    v-for="example in liveExamples"
                    :key="example.id"
                    type="button"
                    :class="{ active: example.id === activeExample.id }"
                    @click="activeId = example.id"
                >
                    <span>{{ example.title }}</span>
                    <small>{{ example.group }}</small>
                </button>
            </nav>
        </aside>

        <main class="demo-main">
            <section class="hero">
                <div>
                    <h2>Component previews without style bleed</h2>
                    <p>
                        Each live example is rendered in its own iframe with the UI-kit styles loaded inside
                        the preview only. The catalog page keeps its own CSS boundary.
                    </p>
                </div>
                <a href="https://github.com/localzet/ui-kit-3" target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </section>

            <section class="preview-section">
                <div class="section-header">
                    <div>
                        <small>{{ activeExample.group }}</small>
                        <h3>{{ activeExample.title }}</h3>
                    </div>
                    <p>{{ activeExample.description }}</p>
                </div>

                <PreviewFrame :example="activeExample" />
            </section>

            <section class="catalog-section">
                <div class="section-header">
                    <div>
                        <small>Catalog</small>
                        <h3>Exported components</h3>
                    </div>
                    <p>{{ componentCatalog.length }} components detected from source files.</p>
                </div>

                <div class="catalog-toolbar">
                    <input v-model.trim="query" type="search" placeholder="Filter components" />
                    <select v-model="group">
                        <option value="">All groups</option>
                        <option v-for="name in groups" :key="name" :value="name">{{ name }}</option>
                    </select>
                </div>

                <div class="component-grid">
                    <article v-for="component in filteredCatalog" :key="component.path">
                        <b>{{ component.name }}</b>
                        <span>{{ component.group }}</span>
                        <code>{{ component.path }}</code>
                    </article>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { componentCatalog } from './component-catalog'
import PreviewFrame from './PreviewFrame.vue'
import { liveExamples } from './registry'

export default {
    name: 'DemoApp',
    components: {
        PreviewFrame,
    },
    data() {
        return {
            activeId: liveExamples[0].id,
            componentCatalog,
            group: '',
            liveExamples,
            query: '',
        }
    },
    computed: {
        activeExample() {
            return this.liveExamples.find((example) => example.id === this.activeId) || this.liveExamples[0]
        },
        filteredCatalog() {
            const query = this.query.toLowerCase()

            return this.componentCatalog.filter((component) => {
                const matchesQuery =
                    !query ||
                    component.name.toLowerCase().includes(query) ||
                    component.path.toLowerCase().includes(query)
                const matchesGroup = !this.group || component.group === this.group

                return matchesQuery && matchesGroup
            })
        },
        groups() {
            return [...new Set(this.componentCatalog.map((component) => component.group))].sort()
        },
    },
}
</script>
