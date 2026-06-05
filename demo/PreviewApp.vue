<template>
    <main class="preview-root">
        <component :is="previewComponent" />
    </main>
</template>

<script>
export default {
    name: 'PreviewApp',
    props: {
        example: {
            type: Object,
            required: true,
        },
    },
    computed: {
        previewComponent() {
            return {
                template: this.example.template,
            }
        },
    },
}
</script>

<style>
html,
body {
    min-height: 100%;
    margin: 0;
    background: #f8f9fb;
}

.preview-root {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 28px;
    color: #1f2933;
}

.preview-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
}

.preview-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    width: 100%;
}

.preview-card {
    width: min(100%, 420px);
    box-sizing: border-box;
    padding: 22px;
    border: 1px solid #e7eaf0;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 14px 32px rgba(31, 41, 51, 0.08);
}

.preview-label {
    margin-bottom: 14px;
    color: #6b7280;
    font-size: 13px;
    font-weight: 700;
}
</style>
