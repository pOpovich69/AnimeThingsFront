<template>    
    <div class="anime__list">
        <app-anime-list-item :anime="item" :key="index" v-for="(item, index) in items"/>
    </div>
</template>

<script setup lang="ts">
import { Anime } from '@/models';
import { defineProps } from 'vue';
import AppAnimeListItem from './AppAnimeListItem.vue';

const props = defineProps<{
    items: Anime[],
}>()


</script>   

<style scoped lang="scss">
.anime {
    &__list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        justify-items: center;
        padding-top: 20px;
    }
}
</style>