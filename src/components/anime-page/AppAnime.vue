<template>
<div class="main">
	<div class="main__filter">
		<div class="filter__block">
			<app-search-field/>
			<app-genre-filter @send-genre="getValues" />
		</div>
	</div>
	<div class="main__anime">
		<app-anime-list :items="animes"/>
	</div>
	<div class="main__hot">
		<app-anime-hot :animes="animes"/>
	</div>
</div>
</template>

<script setup lang="ts">
import AppAnimeList from "./AppAnimeList.vue";
import AppAnimeHot from "./AppAnimeHot.vue";
import AppGenreFilter from "./AppGenreFilter.vue";
import AppSearchField from "./AppSearchField.vue";
import type { Anime } from "@/models";
import { ref } from "vue";

const animes = ref<Anime[]>([
  {
    id: 1,
    title: "Attack on Titan",
    description: "Humanity fights for survival against giant humanoid creatures known as Titans.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 2,
    title: "Fullmetal Alchemist: Brotherhood",
    description: "Two brothers seek the Philosopher's Stone to restore their bodies after a failed alchemy experiment.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 3,
    title: "Death Note",
    description: "A high school student gains a supernatural notebook that allows him to kill anyone by writing the person's name.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 4,
    title: "Naruto",
    description: "A young ninja seeks recognition and dreams of becoming the strongest ninja in his village.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 5,
    title: "One Piece",
    description: "A pirate sets out on a grand adventure to find the legendary treasure known as One Piece.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 6,
    title: "Dragon Ball Z",
    description: "Goku and his friends defend Earth against villains seeking the Dragon Balls.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 7,
    title: "My Hero Academia",
    description: "A boy born without superpowers inherits the abilities of the world's greatest hero.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 8,
    title: "Demon Slayer",
    description: "A young boy becomes a demon slayer after his family is slaughtered by demons.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  },
  {
    id: 9,
    title: "Steins Gate",
    description: "A group of friends discovers a way to send messages to the past, leading to unintended consequences.",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  }
  // {
  //   id: 10,
  //   title: "Hunter x Hunter",
  //   description: "A boy embarks on a journey to become a Hunter and find his missing father.",
  //   img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
  // }
])

const selectedGenres = ref<string[]>([])

function getValues(items: string[]) {
  selectedGenres.value = items
}


</script>   

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: row;
    flex: 1; 
    padding: 0px 20px;
    &__filter {
        background-color: $customBlue;
        height: 700px;
    }
    &__anime {
        width: 60%;
        background-color: $mainBlack;
        height: 100%; 
    }
    &__hot {
      width: 236px;
      background-color: $hotBlockGrey; 
      max-height: 830px;
    }
}
.filter {
	&__block {
		height: 100%;
		padding: 9px 11px;
		border: 1px solid black;
	}
}



</style>