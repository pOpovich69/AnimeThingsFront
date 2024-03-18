<template>
    <div class="text" :style="{fontSize: fontSize + 'px'}">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    fontSize: {
        type: number,
        default: 16
    }
}>()

</script>

<style scoped lang="scss">
.text {
    color: $customLightPurple;
}
</style>
