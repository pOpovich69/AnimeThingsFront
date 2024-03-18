<template>
    <div class="genres__block">
        <div class="genres__list">
			<my-checkbox :key="index" @get-data="getValues" v-for="(item, index) in genres" :title="item" :value="item"/>
        </div>
    </div>
	<my-button :properties="{backgroundColor: '#172440', fontColor: '#fff', hoverBackgroundColor: '#fff', hoverFontColor: '#172440'}" >Sort</my-button>
	<my-button class="mt-2" :properties="{backgroundColor: '#fff', fontColor: '#172440', hoverBackgroundColor: '#172440', hoverFontColor: '#fff'}">Reset</my-button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"


const genres = ref<string[]>([
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
  "Experimental",
  "Fairy Tale",
  "Mockumentary",
  "Neo-Noir",
  "Psychological",
  "Satire",
  "Slice of Life"
])

const selectedGenres = ref<string[]>([])

const emit = defineEmits<{
  (e: 'sendGenre', genre: string[]): void
}>()

function getValues(item: string) {
	if(selectedGenres.value.indexOf(item) === -1) {
		selectedGenres.value.push(item)
	}
	else {
		selectedGenres.value.splice(selectedGenres.value.indexOf(item), 1)
	}
	emit('sendGenre', selectedGenres.value)
}
</script>   

<style scoped lang="scss">
.genres {
	&__block {
		height: 520px;
		margin: 6px 0px;
		padding: 16px;
		background-color: rgba(0, 0, 0, 0.5);
		overflow-y: auto;
		border: 1px solid $filterBorderBlue;
	}
	&__list {}
}
</style>