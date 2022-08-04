<template>
  <footer class="footer">
    <div class="container">
        <div class="footer__desc">
            <div class="footer__item footer__top-item">
                <div class="footer__socials d-flex justify-space-between align-center">
                    <a href="https://www.instagram.com/pubtv_official/" target="_blank"><InstagramIcon  class="footer__insta" /></a>
                    <a href="https://t.me/pubtv_official" target="_blank"><TelegramIcon /></a>
                </div>
                <router-link to="/"><Logo /></router-link>
                <a href="mailto:support@pubtv.online" class="footer__link footer__email">support@pubtv.online</a>
            </div>
            <div class="footer__line"></div>
            <div class="footer__item">
                <a href="#" class="footer__link footer__private-policy">Политика конфиденциальности</a>
                <p class="footer__text">© 2022 PubTV. Все права защищены.</p>
                <a href="#" class="footer__link footer__developer">Пользовательское соглашение</a>
            </div>
        </div>
        <div class="footer__mobile">
            <div class="footer__mobile-hero">
                <div class="footer__mob-left">
                    <a href="mailto:support@pubtv.online" class="footer__link footer__email">support@pubtv.online</a>
                    <a href="#" class="footer__link footer__private-policy">Политика конфиденциальности</a>
                    <a href="#" class="footer__link footer__developer">Пользовательское соглашение</a>
                </div>
                <div class="footer__mob-right">
                    <a href="https://t.me/pubtv_official" target="_blank">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0009 12.0083C24.7682 11.9809 24.5152 12.0212 24.2611 12.1329C23.946 12.2705 19.009 14.5777 14.4068 16.7299L12.8861 17.4409C12.2973 17.7061 12 18.1375 12 18.7185C12 19.1253 12.155 19.6771 12.8943 20.0022L15.4612 21.1447C15.6831 21.8844 16.1986 23.6019 16.3282 24.0585C16.4052 24.3292 16.5997 25.0111 17.0912 25.1705C17.192 25.2086 17.2973 25.2283 17.4044 25.2283C17.7146 25.2283 17.9379 25.0679 18.0471 24.9745L19.6785 23.4417L21.6601 25.4774C21.7364 25.5637 22.1403 26 22.683 26C23.36 26 23.8736 25.3739 23.9807 24.7679C24.0388 24.4358 25.9499 13.7781 25.9499 13.7797C26.1215 12.9248 25.813 12.4814 25.6149 12.2924C25.4451 12.131 25.2336 12.0357 25.0009 12.0083ZM24.5373 13.6885C24.2733 15.1586 22.8344 23.1829 22.6159 24.3395L19.7196 21.3634L17.7545 23.2123L18.2987 20.8469C18.2987 20.8469 22.0534 16.6248 22.2795 16.379C22.4616 16.1822 22.4997 16.1132 22.4997 16.0448C22.4997 15.9538 22.4575 15.8883 22.3602 15.8883C22.2727 15.8883 22.1538 15.9815 22.0908 16.025C21.2903 16.5795 17.8815 18.7369 16.2037 19.7972L13.7696 18.717L14.9511 18.1656C17.9611 16.7577 23.3218 14.2501 24.5373 13.6885Z" fill="white"/>
                            <circle cx="19" cy="19" r="18.5" stroke="white"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/pubtv_official/" target="_blank">
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1667 12C13.8692 12 12 13.7446 12 15.8889V22.1111C12 24.2554 13.8692 26 16.1667 26H22.8333C25.1308 26 27 24.2554 27 22.1111V15.8889C27 13.7446 25.1308 12 22.8333 12H16.1667ZM16.1667 13.5556H22.8333C24.2117 13.5556 25.3333 14.6024 25.3333 15.8889V22.1111C25.3333 23.3976 24.2117 24.4444 22.8333 24.4444H16.1667C14.7883 24.4444 13.6667 23.3976 13.6667 22.1111V15.8889C13.6667 14.6024 14.7883 13.5556 16.1667 13.5556ZM23.6667 14.3333C23.4457 14.3333 23.2337 14.4153 23.0774 14.5611C22.9211 14.707 22.8333 14.9048 22.8333 15.1111C22.8333 15.3174 22.9211 15.5152 23.0774 15.6611C23.2337 15.8069 23.4457 15.8889 23.6667 15.8889C23.8877 15.8889 24.0996 15.8069 24.2559 15.6611C24.4122 15.5152 24.5 15.3174 24.5 15.1111C24.5 14.9048 24.4122 14.707 24.2559 14.5611C24.0996 14.4153 23.8877 14.3333 23.6667 14.3333ZM19.5 15.1111C17.2025 15.1111 15.3333 16.8557 15.3333 19C15.3333 21.1443 17.2025 22.8889 19.5 22.8889C21.7975 22.8889 23.6667 21.1443 23.6667 19C23.6667 16.8557 21.7975 15.1111 19.5 15.1111ZM19.5 16.6667C20.8783 16.6667 22 17.7136 22 19C22 20.2864 20.8783 21.3333 19.5 21.3333C18.1217 21.3333 17 20.2864 17 19C17 17.7136 18.1217 16.6667 19.5 16.6667Z" fill="white"/>
                            <path d="M38.5 19C38.5 29.2051 30.0057 37.5 19.5 37.5C8.99427 37.5 0.5 29.2051 0.5 19C0.5 8.7949 8.99427 0.5 19.5 0.5C30.0057 0.5 38.5 8.7949 38.5 19Z" stroke="white"/>
                        </svg>
                    </a>
                </div>
            </div>
            <p class="footer__text">© 2022 PubTV. Все права защищены.</p>
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
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .footer__item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer__socials{
        flex-basis: 25%;
    }
    .footer__email{
        flex-basis: 25%;
        text-align: right;
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
    .footer__mobile{
        display: none;
    }

    @media screen and (max-width: 768px){
        .footer{
            margin-bottom: 40px;
            padding-top: 45px;
            padding-bottom: 45px;
        }
        .footer__desc{
            display: none;
        }
        .footer__mobile{
            display: block;
        }
        .footer__mobile-hero{
            display: flex;
            justify-content: space-between;
            margin-bottom: 45px;
        }
        .footer__mob-left{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .footer__mob-right{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .footer__text{
            text-align: center;
            font-size: 12px;
            line-height: 16px;
            color: rgba(255, 255, 255, 0.54);
        }
        .footer__link{
            font-size: 15px;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 24px;
        }
        .footer__developer{
            margin-bottom: 0;
        }
    }
</style>