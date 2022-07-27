<template>
  <HeaderDefault />
  <div class="login">
      <div class="container login__hero">
        <h1 class="big-title login__title">Регистрация</h1>
        <form class="login__form">
            <input type="email" class="input login__input" placeholder="Email">
            <InputDropdown class="login__input" :list="maleList" />
            <input type="password" class="input login__input" placeholder="Пароль">
            <router-link to="/login">
                <div class="link login__forgot-link">
                    Есть аккаунт? <span>Войти</span>
                </div>
            </router-link>
            <div class="login__btns">
                <CustomButton class="login__btn" :paddingY="12"><span class="login__btn-text">Регистрация</span></CustomButton>
            </div>
            <p class="text login__text">ИЛИ</p>
            <p class="text login__mobile-text">Регистрация через:</p>
            <div class="login__socials">
                <a class="login__social">
                    <img src="@/assets/google-logo.png" alt="Google">
                </a>
                <a class="login__social">
                    <img src="@/assets/facebook-logo.png" alt="FB">
                </a>
            </div>
        </form>
    </div>
  </div>
  <FooterLogin />
  <FooterMobileMenu />
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue';
import FooterLogin from '@/components/FooterLogin.vue';
import FooterMobileMenu from '@/components/FooterMobileMenu.vue';
import CustomButton from '@/components/UIKit/CustomButton.vue';
import InputDropdown from '@/components/UIKit/InputDropdown.vue';

export default {
    components:{
        HeaderDefault,
        FooterLogin,
        CustomButton,
        FooterMobileMenu,
        InputDropdown
    },
    data(){
        return{
            maleList:['Мужской','Женский','Другое']
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
    min-width: 640px;
}
.login__title{
    text-align: center;
    margin-bottom: 72px;
}
.login__form{

}
.login__input{
    width: 100%;
    margin-bottom: 27px;
}
.login__input:last-child{
    margin-bottom: 11px;
}
.login__forgot-link{
    display: block;
    width: fit-content;
    margin-left: auto;
    font-size: 15px;
    margin-bottom: 17px;
}
.login__forgot-link span{
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
.login__btn-text{
    font-size: 23px;
}
.login__text{
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
@media screen and (max-width: 640px) {
    .login__hero{
        min-width: auto;
        width: 100%;
    }
}
@media screen and (max-width: 600px) {
    .login__title{
        text-align: left;
        margin-bottom: 42px;
    }
    .login__input{
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
    .login__input{
        margin-bottom: 15px;
    }
    .login__forgot-link{
        font-size: 12px;
        margin-bottom: 22px;
    }
    .login__btns{
        flex-direction: column-reverse;
    }
    .login__btn{
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
}
</style>