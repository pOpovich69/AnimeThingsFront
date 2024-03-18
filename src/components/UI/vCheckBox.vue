<template>
    <div class="genres__item">
        <label class="checkbox">
            <input type="checkbox" :value="value" @change="sendData"/>
            <div class="checkbox__text">{{ title }}</div>
        </label>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'


const props = defineProps<{
    title: string,
    value: any
}>()

const emit = defineEmits<{
    (e: 'getData', value: any): void
}>()

function sendData() {
    emit('getData', props.value)
}

</script>   

<style scoped lang="scss">
.genres {
    &__item {
		position: relative;
		margin-top: 15px;

		label {
			font-size: 18px;
		}
		.checkbox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row-reverse;
			cursor: pointer;
			&__text {
				padding-left: 3px;
			}
			input[type="checkbox"] {
				cursor: pointer;
				appearance: none;
				background: $filterCheckGrey;
				border: 0;
				height: 20px;
				width: 20px;
				position: relative;
				&::before{
					content: "";
					position: absolute;
					margin: auto;
					left: 0;
					right: 0;
					bottom: 0;
					overflow: hidden;
					top: 0;
				}
				&:checked::before{
					background: $customLightPurple;
				}
			}
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: $filterCheckGrey; 

		}
		&:first-child {
			margin-top: 0px;
		}
	}
}
</style>