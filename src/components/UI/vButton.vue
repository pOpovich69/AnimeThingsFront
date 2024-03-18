<template>
	<div 
	@mouseleave="isActive = false" 
	@mouseover="isActive = true" 
	:style="{backgroundColor: isActive ? properties.hoverBackgroundColor : properties.backgroundColor}" 
	class="btn">
		<button  :style="{color: isActive ? properties.hoverFontColor : properties.fontColor}"><slot></slot></button>
	</div>
</template>

<script setup lang="ts">
import type { ButtonProperties } from '@/models';
import { defineProps, ref } from 'vue';

const props = defineProps<{
    properties: ButtonProperties,
}>()

const isActive = ref<boolean>(false)

</script>   

<style scoped lang="scss">
.btn {
    cursor: pointer;
    // background-color: $filterBorderBlue;
    border-radius: 10px;
	transition: all 300ms;
	button{
		width: 100%;
		padding: 6px 0px;
        font-size: 22px;
		transition: color 300ms;
	}
}
</style>