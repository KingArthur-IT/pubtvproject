<template>
  <div class="login">
      <div class="container login__hero">
        <h1 class="big-title login__title">Вход</h1>
        <form class="login__form">
            <input type="email" class="input login__input" placeholder="Email">
            <input type="password" class="input login__input" placeholder="Пароль">
            <div class="login__link-wrapper">
                <div @click="forgotPassword" class="link login__forgot-link">Забыли пароль?</div>
                <div class="login__remember">
                    <CustomCheckbox v-model="isRememberMe">
                        <div class="login__remember-text">Запомнить меня</div>
                    </CustomCheckbox>
                </div>
            </div>
            <div class="login__btns">
                <CustomButton @click="$router.push({path: '/register'})" class="login__btn" :isOutlined="true" :paddingY="12"><span class="login__btn-text">Регистрация</span></CustomButton>
                <CustomButton @click="loginEvent" class="login__btn" :paddingY="12"><span class="login__btn-text">Войти</span></CustomButton>
            </div>
            <p class="text login__text">или</p>
            <p class="text login__mobile-text">Войти через:</p>
            <div class="login__socials">
                <a class="login__social">
                    <img src="@/assets/google-logo.png" alt="Google">
                </a>
                <a class="login__social login__social-fb">
                    <img src="@/assets/facebook-logo.png" alt="FB">
                </a>
            </div>
        </form>
    </div>
  </div>
  <FooterLogin />
  <FooterMobileMenu />

  <ModalWrapper 
        :title="'Восстановление Пароля'" 
        :lineWidth="(restoreStep - 1) * 33.33"
        :isShown="isModalShown" 
        @closeModal="isModalShown = false"
    >
    <RestorePassword v-if="restoreStep == 1" @nextRestore="restoreStep = 2" />
    <RestorePasswordCode v-if="restoreStep == 2" @nextRestore="restoreStep = 3" />
    <RestorePasswordSetNew v-if="restoreStep == 3" @nextRestore="closeModal"/>
  </ModalWrapper>
</template>

<script>
import FooterLogin from '@/components/FooterLogin.vue';
import FooterMobileMenu from '@/components/FooterMobileMenu.vue';
import CustomButton from '@/components/UIKit/CustomButton.vue';
import CustomCheckbox from '@/components/UIKit/CustomCheckbox.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import RestorePassword from '@/components/Modals/RestorePassword.vue';
import RestorePasswordCode from '@/components/Modals/RestorePasswordCode.vue';
import RestorePasswordSetNew from '@/components/Modals/RestorePasswordSetNew.vue';

export default {
    components:{
        FooterLogin,
        CustomButton,
        FooterMobileMenu,
        ModalWrapper,
        RestorePassword,
        RestorePasswordCode,
        RestorePasswordSetNew, 
        CustomCheckbox
    },
    data(){
        return{
            isModalShown: false,
            restoreStep: 1,
            isRememberMe: false
        }
    },
    methods:{
        loginEvent(){
            this.$router.push({path: '/profile'});
        },
        forgotPassword(){
            this.isModalShown = true;
            this.restoreStep = 1;
        },
        closeModal(){
            this.restoreStep = 4;
            setTimeout(() => {
                this.isModalShown = false
            }, 200);
        }
    }
}
</script>

<style scoped>
.login-header{
    position: absolute;
}
.login{
    background: var(--main-bg-color);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
}
.login__hero{

}
.login__title{
    text-align: center;
    margin-bottom: 72px;
}
.login__form{

}
.login__input{
    width: 100%;
    margin-bottom: 14px;
}
.login__input:first-child{
    margin-bottom: 27px;
}
.login__link-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
}
.login__remember{
    display: flex;
    align-items: center;
}
.login__remember-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    color: #FFFFFF;
    margin-left: 8px;
}
.login__forgot-link{
    cursor: pointer;
    display: block;
    width: fit-content;
    font-size: 15px;
    text-decoration: underline;
}
.login__btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login__btn{
    width: 100%;
    margin-bottom: 29px;
}
.login__btn:first-child{
    margin-right: 20px;
}
.login__btn-text{
    font-size: 23px;
}
.login__text{
    font-weight: bold;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    margin-bottom: 13px;
}
.login__mobile-text{
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    margin-bottom: 13px;
    display: none;
}
.login__socials{
    display: flex;
    justify-content: center;
    align-items: center;
}
.login__social{
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--transition-time) ease-in-out;
}
.login__social:hover{
    background: #CACACA;
}
.login__social:first-child{
    margin-right: 68px;
}
.login__social img{
    width: 26px;
    height: 26px;
}
.login__social-fb img{
    width: 20px;
    height: 20px;
}

@media screen and (max-width: 768px) {
    .login__title{
        margin-bottom: 62px;
    }
    .login__text{
        display: none;
    }
    .login__mobile-text{
        display: block;
    }
}
@media screen and (max-width: 600px) {
    .login__title{
        text-align: left;
        margin-bottom: 42px;
    }
    .login__input:first-child{
        margin-bottom: 18px;
    }
    .login__btn-text{
        font-size: 20px;
    }
}

@media screen and (max-width: 425px) {
    .login__title{
        margin-bottom: 24px;
    }
    .login__input:first-child{
        margin-bottom: 15px;
    }
    .login__forgot-link{
        font-size: 12px;
        margin-bottom: 22px;
    }
    .login__btns{
        flex-direction: column-reverse;
    }
    .login__btn:first-child{
        margin-right: 0px;
    }
    .login__btn:last-child{
        margin-right: 0px;
        margin-bottom: 18px;
    }
    .login__social{
        width: 100%;
        border-radius: 8px;
        height: 46px;
    }
    .login__social:first-child{
        margin-right: 20px;
    }
    .login__social img{
        width: 34px;
        height: 34px;
    }
    .login__social-fb img{
        width: 26px;
        height: 26px;
    }
}
</style>