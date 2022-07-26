<template>
  <HeaderDefault />
  <div class="login">
      <div class="login__hero">
        <h1 class="big-title login__title">Вход</h1>
        <form class="login__form">
            <input type="email" class="input login__input" placeholder="Email">
            <input type="password" class="input login__input" placeholder="Пароль">
            <a href="#" class="link login__forgot-link">Забыли пароль?</a>
            <div class="login__btns">
                <CustomButton class="login__btn" :text="'Регистрация'" :paddingY="12" :isOutlined="true" />
                <CustomButton class="login__btn" :text="'Войти'" :paddingY="12" />
            </div>
            <p class="text login__text">или</p>
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
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue';
import FooterLogin from '@/components/FooterLogin.vue';
import CustomButton from '@/components/UIKit/CustomButton.vue';

export default {
    components:{
        HeaderDefault,
        FooterLogin,
        CustomButton
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
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-bottom: 11px;
}
.login__input:first-child{
    margin-bottom: 27px;
}
.login__forgot-link{
    display: block;
    width: fit-content;
    margin-left: auto;
    font-size: 15px;
    margin-bottom: 17px;
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
.login__text{
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    margin-bottom: 13px;
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
    transition: background .2s ease-in-out;
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
</style>