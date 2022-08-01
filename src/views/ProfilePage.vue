<template>
    <div class="container">
        <div class="user">
            <LogoutButton @click="logout" class="user__logout" />
            <p class="big-title user__name">{{userName}}</p>
            <p class="user__mail">{{userMail}}</p>
        </div>
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
    <div class="container mobile-tabs">
        <div class="mobile-tabs__item" to="/profile/favourite" :class="{'active-link': $route.path.includes('favourite')}">
            <ProfileHeartIcon class="mobile-tabs__icon" />
            <div class="mobile-tabs__text">Избранное</div>
        </div>
        <div class="mobile-tabs__item" to="/profile/flash-card" :class="{'active-link': $route.path.includes('flash-card')}">
            <FlashCardIcon class="mobile-tabs__flash-icon" />
            <div class="mobile-tabs__text">Флэш-карты</div>
        </div>
    </div>
    <MobileSettings class="mobile-settings" />
    <div class="tab-hero">
        <div class="container">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
import LogoutButton from '@/components/UIKit/LogoutButton.vue'
import FlashCardIcon from '@/components/Icons/FlashCardIcon.vue'
import ProfileHeartIcon from '@/components/Icons/ProfileHeartIcon.vue'
import MobileSettings from '@/components/ProfilePage/MobileSettings.vue'

export default {
    components:{
        LogoutButton,
        FlashCardIcon,
        ProfileHeartIcon,
        MobileSettings
    },
    data(){
        return{
            userName: 'Yan Levchenko',
            userMail: 'support@pubtv.online',
        }
    },
    methods:{
        logout(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style scoped>
.user{
    position: relative;
    padding-top: 94px;
    margin-bottom: 83px;
    text-align: center;
}
.user__logout{
    position: absolute;
    right: 0;
    top: 25px;
}
.user__mail{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.55);
    text-align: center;
}
.tabs{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}
.mobile-tabs{
    display: none;
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
    bottom: -6px;
    height: 5px;
    background: var(--primary-color);
    border-radius: 3px;
}
.mobile-settings{
    display: none;
}
.tab-hero{
    background: #272727;
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 900px) {
    .tabs__item:nth-child(2){
        margin: 0 170px;
    }
}

@media screen and (max-width: 768px) {
    .user{
        margin-bottom: 27px;
    }
    .tabs{
        display: none;
    }
    .mobile-tabs{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
    }
    .mobile-tabs__item{
        display: flex;
        flex-basis: 48%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 158px;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 11px;
    }
    .active-link.mobile-tabs__item{
        display: none;
    }
    .mobile-tabs__text{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 133%;
        color: rgba(255, 255, 255, 0.44);
    }
    .mobile-tabs__icon{
        margin-bottom: 10px;
    }
    .mobile-tabs__flash-icon{
        margin-bottom: 6px;
    }
    .tab-hero{
        display: none;
    }
    .mobile-settings{
        display: block;
    }
}
</style>