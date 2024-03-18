<template>
    <header class="header">
        <div class="header__block">
            <my-logo/>
            <ul class="navigation__list">
                <li :key="index" v-for="(item, index) in navigationItems" @click="item.href">
                    <img :src="item.icon" alt="icon"/><div class="li__item">{{ item.name }}</div>
                </li>
            </ul>
            <div class="navigation__login">
                <div @click="routing.toAnime()" class="login__sign">Sing<my-blue-word :fontSize="17.5">Up</my-blue-word></div>
                <div class="dec-line">|</div>
                <div @click="routing.toAnime()" class="login__sign">Sing<my-blue-word :fontSize="17.5">In</my-blue-word></div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/models'
import { routingService } from '@/services'
import { ref } from 'vue'

import homeIcon from '@/assets/icons/home.png' 
import folderIcon from '@/assets/icons/folder.png' 
import heartIcon from '@/assets/icons/heart.png' 
import popcornIcon from '@/assets/icons/popcorn.png' 
import trophyIcon from '@/assets/icons/trophy.png' 


const routing = routingService()

const navigationItems = ref<NavigationItem[]>([
    {
        name: "Главная",
        href: routing.toAnime,
        icon: homeIcon
    },
    {
        name: "Анонсы",
        href: routing.toAnime,
        icon: folderIcon
    },
    {
        name: "Избранные",
        href: routing.toAnime,
        icon: heartIcon
    },    {
        name: "Просмотренные",
        href: routing.toAnime,
        icon: popcornIcon
    },
    {
        name: "Топ 100",
        href: routing.toAnime,
        icon: trophyIcon
    }
])

</script>   

<style scoped lang="scss">
.header {
    height: 60px;
    width: 100%;
    position: fixed;
    &__block {
        @include limiter;
        padding-left: 60px;
        background-color: $customGrey;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.navigation {
		&__list {
            display: flex;
            align-items: center;
            height: 100%;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0px calc(27px - 6px - 6px);
                margin-left: calc(27px + 15px);
                font-size: 14px;
                img {
                    max-width: 15px;
                    max-height: 15px;
                    margin-right: 8px;
                }
                div {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    &:hover {
                        color: $customLightPurple;
                        cursor: pointer;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background-color: $customLightPurple; 
                        transform: scaleX(0); 
                        transition: transform 0.3s ease;
                    }
                    &:hover::after {
                        transform: scaleX(1);
                    }
                    &:first-child {
                        margin-left: 0px;
                    }
                    &:last-child {
                        margin-right: 0px;
                    }
                }
            }
		}
		&__login {
            display: flex;
            align-items: center;
            height: 100%;
            * {
                align-items: center;
                display: flex;
                font-size: 17.5px;
                height: 100%;

            }
            *:hover {
                cursor: pointer;
            }
		}

}
.dec-line {
    padding: 0px 5px;
    :hover {
        cursor: default;
    }
}

</style>