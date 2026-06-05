<template>
    <b class="text-label">
        <slot />
    </b>
</template>

<script>
export default {
    name: 'TextLabel',
}
</script>

<style lang="scss" scoped>
@use '../../../../sass/zorin-ui/variables' as *;
@use '../../../../sass/zorin-ui/mixins' as *;

.text-label {
    padding-left: 25px;
    @include font-size(12);
    color: #afafaf;
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
}

@media only screen and (max-width: 1024px) {
    .text-label {
        padding-left: 20px;
    }
}

.dark {
    .text-label {
        opacity: 0.35;
    }
}
</style>
