<template>
  <footer class="footer">
    <div class="d-flex justify-space-between align-center mb-10">
        <div class="footer__socials d-flex justify-space-between align-center">
            <InstagramIcon  class="mr-14" />
            <TelegramIcon />
        </div>
        <Logo />
        <a href="mailto:support@pubtv.online" class="footer__link">support@pubtv.online</a>
    </div>
    <div class="footer__line mb-9"></div>
    <div class="d-flex justify-space-between align-center mt-10">
        <a href="#" class="footer__link col-3 text-decoration-underline">Privacy Policy</a>
        <p class="footer__text">© 2022 PubTV. Все права защищены.</p>
        <p class="footer__text col-3 text-right">Designed by Mark Levchenko</p>
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
    .footer__link{
        cursor: pointer;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        transition: color .2s ease-in-out;
    }
    .footer__link:hover{
        color: var(--primary-hover-color) !important;
    }
    .footer__line{
        background: #fff;
        width: 95%;
        margin: auto;
        height: .5px;
    }
    .footer__text{
        margin: 0;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
    }
</style>