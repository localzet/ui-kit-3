<template>
    <div class="page-tab-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PageTabGroup',
}
</script>

<style lang="scss" scoped>
@use '../../../sass/zorin-ui/variables' as *;
@use '../../../sass/zorin-ui/mixins' as *;

.page-tab-group {
    margin-bottom: 65px;
}
</style>
