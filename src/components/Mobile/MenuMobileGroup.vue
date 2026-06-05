<template>
    <div class="menu-options">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MenuMobileGroup',
}
</script>

<style scoped lang="scss">
@use '../../../sass/zorin-ui/variables' as *;
@use '../../../sass/zorin-ui/mixins' as *;

.menu-options {
    margin-top: 10px;
    list-style: none;
    width: 100%;
}
</style>
