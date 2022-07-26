<template>
  <header class="header">
    <div class="container header__hero">
        <div>
            <a href="#">
                <Logo />
            </a>
        </div>
        <ul class="header__list">
            <li class="header__item">Главная</li>
            <li class="header__item">О Нас</li>
            <li class="header__item">Сериалы</li>
            <li class="header__item">Фильмы</li>
            <li class="header__item">Мультфильмы</li>
        </ul>
        <div class="header__controls">
            <SearchIcon class="header__icon" />
            <Button :text="'Войти'" />
        </div>
    </div>
  </header>
</template>

<script>
import Button from '@/components/UIKit/Button.vue';
import Logo from '@/components/UIKit/Logo.vue';
import SearchIcon from '@/components/Icons/SearchIcon.vue';

export default {
    components:{
        Button, Logo, SearchIcon
    }
}
</script>

<style scoped>
.header{
    background-color: var(--section-bg-color);
    width: 100%;
    min-height: 181px;
    padding: 60px 0;
}
.header__hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__list{
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-basis: 70%;
}
.header__item{
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 23px;
    cursor: pointer;
    transition: color .2s ease-in-out;
}
.header__item:hover{
    color: var(--primary-hover-color) !important;
}
.header__controls{
    display: flex;
    align-items: center;
}
.header__icon{
    margin-right: 36px;
}
</style>