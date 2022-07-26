<template>
  <header class="header">
    <div class="container header__hero">
        <div>
            <router-link to="/"><Logo /></router-link>
        </div>
        <ul v-if="!isSearchInputVisible" class="header__list">
            <li class="header__item">Главная</li>
            <li class="header__item">О Нас</li>
            <li class="header__item">Сериалы</li>
            <li class="header__item">Фильмы</li>
            <li class="header__item">Мультфильмы</li>
        </ul>
        <div class="header__controls">
            <div v-if="!isSearchInputVisible" class="header__icon" @click="isSearchInputVisible = true">
                <SearchIcon />
            </div>
            <div v-else class="header__search-wrap">
                <input type="text" class="input header__search" placeholder="Поиск">
                <div class="header__search-icon">
                    <SearchIcon :color="'black'" @clickEvent="isSearchInputVisible = false" />
                </div>
            </div>
            <router-link to="/login">
                <CustomButton class="header__enter-btn">Войти</CustomButton>
            </router-link>
        </div>
    </div>
  </header>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import Logo from '@/components/UIKit/Logo.vue';
import SearchIcon from '@/components/Icons/SearchIcon.vue';

export default {
    components: {
        CustomButton, Logo, SearchIcon
    },
    data(){
        return{
            isSearchInputVisible: false
        }
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
    transition: color var(--transition-time) ease-in-out;
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
.header__search-wrap{
    position: relative;
    margin-right: 36px;
}
.header__search{
    padding: 11px 36px;
    min-width: 500px;
}
.header__search-icon{
    position: absolute;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);
}

@media screen and (max-width: 1024px){
    .header{
        min-height: 88px;
        padding: 25px 0;
    }
    .header__list{
        display: none;
    }
    .header__search{
        min-width: 350px;
    }
}
@media screen and (max-width: 768px){
    .header__enter-btn{
        display: none;
    }
    .header__icon{
        margin-right: 0px;
        width: 43px;
        height: 43px;
        border-radius: 50%;
        background: #3E3E3E;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__search-wrap{
        margin-right: 0px;
    }
    .header__search{
        padding: 8px 36px;
    }
    .header__search-icon{
        right: 16px;
    }
}
@media screen and (max-width: 600px){
    .header__search{
        min-width: auto;
        width: 100%;
    }
}
</style>