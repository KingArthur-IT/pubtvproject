<template>
  <div class="login">
      <div class="container login__hero">
        <h1 class="big-title login__title">Регистрация</h1>
        <form class="login__form">
            <input  v-model="email"
                    type="email" 
                    class="input login__input" 
                    placeholder="Email"
                    :class="{'input-error': !isEmailValid}"
                    @input="isEmailValid = true"
            >
            <div v-if="!isEmailValid" class="text error-text">Введите правильный email</div>
            <InputDropdown  v-model="gender"
                            class="login__input" 
                            :list="genderList" 
                            :placeholder="'Пол'" 
            />
            <input type="password" class="input login__input last-input" placeholder="Пароль">
            <router-link to="/login" class="login__forgot-link-desc">
                <div class="link login__forgot-link">
                    Есть аккаунт? <span>Войти</span>
                </div>
            </router-link>
            <div class="login__btns">
                <CustomButton @click.prevent="register" class="login__btn" :paddingY="12"><span class="login__btn-text">Регистрация</span></CustomButton>
            </div>
            <router-link to="/login" class="login__forgot-link-mobile">
                <div class="link login__forgot-link">
                    Есть аккаунт? <span>Войти</span>
                </div>
            </router-link>
            <p class="text login__text">или</p>
            <p class="text login__mobile-text">Регистрация через:</p>
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
</template>

<script>
import FooterLogin from '@/components/FooterLogin.vue';
import CustomButton from '@/components/UIKit/CustomButton.vue';
import InputDropdown from '@/components/UIKit/InputDropdown.vue';

export default {
    components:{
        FooterLogin,
        CustomButton,
        InputDropdown
    },
    data(){
        return{
            email: '',
            gender: '',
            password: '',
            isEmailValid: true,
            genderList:['Мужской','Женский','Другое']
        }
    },
    methods:{
        register(){
            if (this.email && this.validateEmail(this.email)){
                console.log('register success')
            }
            else{
                this.isEmailValid = false;
            }
        },
        validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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
.login__input.input-error{
    margin-bottom: 5px;
}
.last-input{
    margin-bottom: 11px;
}
.login__forgot-link-mobile{
    display: none;
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
.error-text{
    color: red;
    margin-bottom: 14px;
    display: block;
    position: relative;
    width: 100%;
    font-size: 14px;
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
    .last-input{
        margin-bottom: 37px;
    }
    .login__forgot-link-desc{
        display: none;
    }
    .login__forgot-link-mobile{
        display: block;
    }
    .login__forgot-link{
        font-size: 12px;
        margin-bottom: 30px;
    }
    .login__btn{
        margin-right: 0px;
        margin-bottom: 15px;
    }
    .login__mobile-text{
        margin-bottom: 9px;
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