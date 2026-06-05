<template>
    <ul class="list-info">
        <slot />
    </ul>
</template>

<script>
export default {
    name: 'ListInfo',
}
</script>

<style lang="scss" scoped>
@import '../../../../sass/zorin-ui/variables';
@import '../../../../sass/zorin-ui/mixins';
</style>
