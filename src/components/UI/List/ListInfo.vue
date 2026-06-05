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
@use '../../../../sass/zorin-ui/variables' as *;
@use '../../../../sass/zorin-ui/mixins' as *;
</style>
