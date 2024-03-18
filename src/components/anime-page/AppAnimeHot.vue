<template>
  <div class="hot__title"><my-blue-word :fontSize="20">Hot</my-blue-word><span>новинки</span></div>
  <app-anime-list :items="hotAnimes"/>
</template>

<script setup lang="ts">
import AppAnimeList from "./AppAnimeList.vue";
import type { Anime } from "@/models";
import { onMounted, ref, defineProps } from "vue";

const hotAnimes = ref<Anime[]>([])

const props = defineProps<{
    animes: Anime[]
}>()

onMounted(async () => {
  for (let i = 0; i < 2; i++) {
    let randomComponent: any;
    do {
      randomComponent = props.animes[Math.floor(Math.random() * props.animes.length)];
    } while (hotAnimes.value.includes(randomComponent));

    hotAnimes.value.push(randomComponent);
  }
})

</script>   

<style scoped lang="scss">
.hot {
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding-top: 30px;
    span {
      margin-left: 5px;
    }
  }
}
</style>