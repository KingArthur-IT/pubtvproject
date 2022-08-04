<template>
  <header ref="header" class="header">
    <div class="container header__hero">
        <div v-if="isLogoShow">
            <router-link to="/"><Logo /></router-link>
        </div>
        <ul v-if="!isSearchInputShow" class="header__list">
            <router-link to="/">
                <li class="header__item">Главная</li>
            </router-link>
            <a href="#aboutUsSection" @click="toAboutUs" class="header__item">О Нас</a>
            <router-link to="/catalog">
                <li class="header__item">Сериалы</li>
            </router-link>
            <router-link to="/catalog">
                <li class="header__item">Фильмы</li>
            </router-link>
            <router-link to="/catalog">
                <li class="header__item">Мультфильмы</li>
            </router-link>
        </ul>
        <div class="header__controls">
            <div v-if="!isSearchInputShow" class="header__icon" @click.stop="openSearch">
                <SearchIcon />
            </div>
            <div v-else class="header__search-wrap" @click.stop>
                <input ref="searchInput" type="text" class="input header__search" :class="{'opened': isSearchInputVisible}" placeholder="Поиск">
                <div class="header__search-icon">
                    <SearchIcon :color="'black'" @clickEvent="closeSearch" />
                </div>
            </div>
            <router-link v-if="$route.meta.auth === false" to="/login">
                <CustomButton :paddingY="8" :minWidth="144" class="header__enter-btn">Войти</CustomButton>
            </router-link>
            <router-link v-else to="/profile" class="header__profile-btn">
                <UserIcon />
            </router-link>
        </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/UIKit/Logo.vue';
import SearchIcon from '@/components/Icons/SearchIcon.vue';
import CustomButton from '@/components/UIKit/CustomButton.vue';
import UserIcon from '@/components/Icons/UserIcon.vue';

export default {
    components: {
        Logo, SearchIcon, CustomButton, UserIcon
    },
    data(){
        return{
            isSearchInputShow: false,
            isSearchInputVisible: false,
            isLogoShow: true
        }
    },
    mounted(){
        document.addEventListener('click', () => {
            this.closeSearch();
        });
    },
    methods:{
        openSearch(){
            this.isSearchInputShow = true;
            setTimeout(() => {
                this.isSearchInputVisible = true;
            }, 200);
        },
        closeSearch(){
            this.isSearchInputVisible = false;
            setTimeout(() => {
                this.isSearchInputShow = false;
            }, 200);
        },
        toAboutUs(){
            if (this.$route.path === '/catalog'){
                localStorage.setItem('isToAboutSection', 'true');
                this.$router.push({path: '/'});
            };
        }
    },
    watch:{
        isSearchInputShow: function() {
            if (this.isSearchInputShow){
                if (this.$refs.header.clientWidth < 1025)
                    this.isLogoShow = false;
                setTimeout(() => {
                    this.$refs.searchInput.focus();
                }, 300);
            }
            else 
                if (this.$refs.header.clientWidth < 1025)
                    setTimeout(() => {
                        this.isLogoShow = true;
                    }, 200);
        }
    }
}
</script>

<style scoped>
.header{
    background-color: var(--section-bg-color);
    width: 100%;
    min-height: 135px;
    padding: 36px 0;
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
    justify-content: space-evenly;
    flex-basis: 65%;
    margin: 0;
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
    margin: 2px 36px 2px 0;
}
.header__search{
    padding: 11px 50px 11px 36px;
    width: 0px;
    transition: width .3s ease-in-out;
}
.header__search.opened{
    width: calc(1240px - 60px - 180px - 170px - 30px)
}
.header__search-icon{
    position: absolute;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);
}
@media screen and (max-width: 1240px){
    .header__search.opened{
        width: calc(100vw - 60px - 180px - 170px - 30px)
    }
}
@media screen and (max-width: 1024px){
    .header{
        min-height: 88px;
        padding: 25px 0;
    }
    .header__list{
        display: none;
    }
    .header__controls{
        margin-left: auto;
    }
    .header__search.opened{
        width: calc(100vw - 60px - 180px)
    }
}
@media screen and (max-width: 768px){
    .header__profile-btn,
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
    .header__logo-wrap.opened{
        display: none;
    }
    .header__search.opened{
        width: calc(100vw - 60px)
    }
}
@media screen and (max-width: 425px){
    .header__search.opened{
        width: calc(100vw - 30px)
    }
}
</style>