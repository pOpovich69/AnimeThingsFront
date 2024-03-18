<template>
    <div class="logo" @click="routing.toAnime()">
        <my-blue-word :fontSize="22.5">A</my-blue-word>
        <div class="logo__help">T</div>
        HINGS
    </div>
</template>

<script setup lang="ts">
import { routingService } from '@/services';

const routing = routingService()
</script>   

<style scoped lang="scss">
.logo {
    display: flex;
    align-items: first baseline;
    font-size: 15px;
    &__help {
        font-size: 22.5px;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>