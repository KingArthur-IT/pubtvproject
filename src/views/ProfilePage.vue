<template>
    <HeaderAuth />
    <div class="container user">
        <p class="big-title user__name">{{userName}}</p>
        <p class="user__mail">{{userMail}}</p>
    </div>
    <div class="container tabs">
        <router-link class="tabs__item" to="/profile/favourite" :class="{'active-link': $route.path.includes('favourite')}">
            <div>Избранное</div>
        </router-link>
        <router-link class="tabs__item" to="/profile/settings" :class="{'active-link': $route.path.includes('settings')}">
            <div>Настройки</div>
        </router-link>
        <router-link class="tabs__item" to="/profile/flash-card" :class="{'active-link': $route.path.includes('flash-card')}">
            <div>Флэш-карты</div>
        </router-link>
    </div>
    <div class="tab-hero">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderAuth from '@/components/HeaderAuth.vue';

export default {
    components:{
        HeaderAuth
    },
    data(){
        return{
            userName: 'Yan Levchenko',
            userMail: 'support@pubtv.online'
        }
    },

}
</script>

<style scoped>
.user{
    margin: 94px 0 83px;
    text-align: center;
}
.user__mail{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.55);
}
.tabs{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}
.tabs__item{
    position: relative;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 135%;
    color: #FFFFFF;
    transition: color var(--transition-time) ease-in-out;
}
.tabs__item:nth-child(2){
    margin: 0 200px;
}
.tabs__item:hover{
    color: var(--primary-hover-color);
}
.active-link:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 5px;
    background: var(--primary-color);
}
.tab-hero{
    background: #272727;
    width: 100%;
}
</style>