<template>
    <div class="list__item" v-if="isWaiting">
        <div class="item__img">
            <img :src="anime.img" alt="anime">
        </div>
        <div class="item__title">
            {{ anime.title }}
        </div>
    </div>
    <div class="list__item" v-else>
        <div class="loadingio-spinner-spinner-rlqd0cx167"><div class="ldio-efgizvhb1z">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
        <div class="item__title">
            Loading
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Anime } from '@/models';
import { onMounted, ref } from 'vue';

const isWaiting = ref<boolean>(false)

const props = defineProps<{
    anime: Anime
}>()

onMounted(async () => {
    isWaiting.value = false
    while(props.anime === undefined){
        await new Promise(resolve => setTimeout(resolve, 100))
    }
    isWaiting.value = true
})

</script>   

<style scoped lang="scss">
.list {
    &__item {
        padding: 20px 21.5px;
    }
}
.item {
    &__img {
        width: 180px;
        height: 280px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__title {
        margin-top: 15px;
        width: 180px;
        text-align: center;
    }
}

@keyframes ldio-efgizvhb1z {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.ldio-efgizvhb1z div {
  left: 90px;
  top: 40px;
  position: absolute;
  animation: ldio-efgizvhb1z linear 1s infinite;
  background: #93dbe9;
  width: 6.12px;
  height: 22.44px;
  border-radius: 3.06px / 4.263599999999999px;
  transform-origin: 3.06px 47.94px;
}.ldio-efgizvhb1z div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9411764705882353s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(2) {
  transform: rotate(21.176470588235293deg);
  animation-delay: -0.8823529411764706s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(3) {
  transform: rotate(42.35294117647059deg);
  animation-delay: -0.8235294117647058s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(4) {
  transform: rotate(63.529411764705884deg);
  animation-delay: -0.7647058823529411s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(5) {
  transform: rotate(84.70588235294117deg);
  animation-delay: -0.7058823529411765s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(6) {
  transform: rotate(105.88235294117646deg);
  animation-delay: -0.6470588235294118s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(7) {
  transform: rotate(127.05882352941177deg);
  animation-delay: -0.5882352941176471s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(8) {
  transform: rotate(148.23529411764707deg);
  animation-delay: -0.5294117647058824s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(9) {
  transform: rotate(169.41176470588235deg);
  animation-delay: -0.47058823529411764s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(10) {
  transform: rotate(190.58823529411765deg);
  animation-delay: -0.4117647058823529s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(11) {
  transform: rotate(211.76470588235293deg);
  animation-delay: -0.35294117647058826s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(12) {
  transform: rotate(232.94117647058823deg);
  animation-delay: -0.29411764705882354s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(13) {
  transform: rotate(254.11764705882354deg);
  animation-delay: -0.23529411764705882s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(14) {
  transform: rotate(275.29411764705884deg);
  animation-delay: -0.17647058823529413s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(15) {
  transform: rotate(296.47058823529414deg);
  animation-delay: -0.11764705882352941s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(16) {
  transform: rotate(317.6470588235294deg);
  animation-delay: -0.058823529411764705s;
  background: #93dbe9;
}.ldio-efgizvhb1z div:nth-child(17) {
  transform: rotate(338.8235294117647deg);
  animation-delay: 0s;
  background: #93dbe9;
}
.loadingio-spinner-spinner-rlqd0cx167 {
    width: 180px;
    height: 230px;
    display: inline-block;
    overflow: hidden;
}
.ldio-efgizvhb1z {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-efgizvhb1z div { box-sizing: content-box; }
</style>