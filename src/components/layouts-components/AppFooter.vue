<template>
    <footer class="footer">
        <div class="footer__list">
            <my-logo/>
            <ul class="footer__text-list">
                <li>Контакты</li>
                <li>Правила</li>
                <li>JDH@gmail.com</li>
            </ul>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>   

<style scoped lang="scss">

.footer {
    @include limiter;
    background-color: $customGrey;
    padding-left: 60px;
    * {
        font-size: $inter-font;
    }
    &__text-list {
        display: flex;
        li {
            padding: 0px 20px;
            font-size: 13.5px;
        }
        li:last-child {
            padding-right: 0px;
        }   
    }    
    &__list {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
    }
}
</style>