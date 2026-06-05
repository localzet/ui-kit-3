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
@import '../../../sass/zorin-ui/variables';
@import '../../../sass/zorin-ui/mixins';

.page-tab-group {
    margin-bottom: 65px;
}
</style>
