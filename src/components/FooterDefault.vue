<template>
  <footer class="footer">
    <div class="container">
        <div class="footer__item footer__top-item">
            <div class="footer__socials d-flex justify-space-between align-center">
                <a href="#"><InstagramIcon  class="footer__insta" /></a>
                <a href="#"><TelegramIcon /></a>
            </div>
            <router-link to="/"><Logo /></router-link>
            <a href="mailto:support@pubtv.online" class="footer__link">support@pubtv.online</a>
        </div>
        <div class="footer__line"></div>
        <div class="footer__item">
            <a href="#" class="footer__link footer__private-policy">Политика конфиденциальности</a>
            <p class="footer__text">© 2022 PubTV. Все права защищены.</p>
            <a href="#" class="footer__link footer__developer">Пользовательское соглашение</a>
        </div>
    </div>
  </footer>
</template>

<script>
import InstagramIcon from '@/components/Icons/InstagramIcon.vue';
import TelegramIcon from '@/components/Icons/TelegramIcon.vue';
import Logo from '@/components/UIKit/Logo.vue';

export default {
    components:{
        InstagramIcon, TelegramIcon, Logo
    }
}
</script>

<style scoped>
    .footer{
        background-color: var(--section-bg-color);
        width: 100%;
        padding: 50px 0;
    }
    .footer__item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer__top-item{
        margin-bottom: 40px;
    }
    .footer__insta{
        margin-right: 55px;
    }
    .footer__link{
        cursor: pointer;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        transition: color var(--transition-time) ease-in-out;
    }
    .footer__link:hover{
        color: var(--primary-hover-color) !important;
    }
    .footer__line{
        background: #fff;
        width: 95%;
        margin: auto;
        height: .5px;
        margin-bottom: 75px;
    }
    .footer__text{
        margin: 0;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
    }
    .footer__private-policy{
        text-decoration: underline;
        flex-basis: 25%;
    }
    .footer__developer{
        text-align: right;
        flex-basis: 25%;
        text-decoration: underline;
    }
</style>