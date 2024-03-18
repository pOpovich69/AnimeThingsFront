<template>
    <app-header/>
    <main class="main">
        <slot></slot>
    </main>
    <app-footer/>
</template>

<script setup lang="ts">
import AppHeader from '../components/layouts-components/AppHeader.vue';
import AppFooter from '../components/layouts-components/AppFooter.vue';

</script>   

<style scoped lang="scss">

.main {
    @include limiter;
    min-height: calc(100vh - 54px);
    padding-top: 60px;
    display: flex;
}
</style>