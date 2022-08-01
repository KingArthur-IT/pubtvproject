<template>
    <div class="settings">
        <div class="settings__title">Учётная Запись</div>
        <div @click="changePasswordModal" class="container settings__link-wrap">
            <div class="settings__link-text">Изменить пароль</div>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8.5L1 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="settings__title">Админ Панель</div>
        <div @click="addMovieModal" class="container settings__link-wrap">
            <div class="settings__link-text">Добавить кино</div>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8.5L1 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <ModalWrapper 
                :title="isChangePassword ? 'Изменение Пароля' : 'Добавить Кино'" 
                :lineWidth="progressStep * 50"
                :isShown="isModalShown" 
                @closeModal="closeModal"
                :isLongModal="!isChangePassword"
            >
            <RestorePasswordSetNew v-if="isChangePassword" @nextRestore="changePassword"/>
            <addMovie v-else @addEvent="addMovie" />
        </ModalWrapper>
    </div>
</template>

<script>
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import RestorePasswordSetNew from '@/components/Modals/RestorePasswordSetNew.vue';
import addMovie from '@/components/Modals/addMovie.vue';

export default {
    components:{
        ModalWrapper,
        RestorePasswordSetNew,
        addMovie
    },
    data(){
        return{
            isChangePassword: true,
            isModalShown: false,
            progressStep: 1,
        }
    },
    methods:{
        changePasswordModal(){
            this.isChangePassword = true;
            this.progressStep = 1;
            this.isModalShown = true;
        },
        closeModal(){
            this.isModalShown = false;
        },
        changePassword(){
            this.progressStep = 2;
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        },
        addMovieModal(){
            this.isChangePassword = false;
            this.progressStep = 1;
            this.isModalShown = true;
        },
        addMovie(){
            this.progressStep = 2;
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        }
    }
}
</script>

<style scoped>
.settings{
    margin-bottom: 65px;
}
.settings__title{
    background: #272727;
    padding: 18px 0;
    width: 100%;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 119%;
    color: #FFFFFF;
}
.settings__link-wrap{
    cursor: pointer;
    padding-top: 32px;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.settings__link-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 135%;
    color: #FFFFFF;
}
</style>