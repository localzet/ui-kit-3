<template>
    <iframe
        class="preview-frame"
        :src="previewUrl"
        :title="`${example.title} isolated preview`"
        loading="lazy"
    />
</template>

<script>
export default {
    name: 'PreviewFrame',
    props: {
        example: {
            type: Object,
            required: true,
        },
    },
    computed: {
        previewUrl() {
            const url = new URL('demo/preview.html', window.location.href)
            url.searchParams.set('id', this.example.id)

            return url.toString()
        },
    },
}
</script>
