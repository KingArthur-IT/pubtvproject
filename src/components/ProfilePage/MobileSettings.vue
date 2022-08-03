<template>
    <div class="settings">
        <div class="settings__title">Учётная Запись</div>
        <div @click="changePasswordModal" class="container settings__link-wrap change-password-section">
            <div class="settings__link-text">Изменить пароль</div>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8.5L1 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div @click="changeGenderModal" class="container settings__link-wrap">
            <div class="settings__link-text">Изменить пол</div>
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
                :title="modalTitle" 
                :lineWidth="progressStep * 50"
                :isShown="isModalShown" 
                @closeModal="closeModal"
                :isLongModal="!isChangePassword"
            >
            <RestorePasswordSetNew v-if="modalTitle === 'Изменение Пароля'" @nextRestore="changePassword"/>
            <ChangeGender v-if="modalTitle === 'Изменить Пол'" @changeGender="changeGender"/>
            <addMovie v-if="modalTitle === 'Добавить Кино'" @addEvent="addMovie" />
        </ModalWrapper>
    </div>
</template>

<script>
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import RestorePasswordSetNew from '@/components/Modals/RestorePasswordSetNew.vue';
import addMovie from '@/components/Modals/addMovie.vue';
import ChangeGender from '@/components/Modals/ChangeGender.vue';

export default {
    components:{
        ModalWrapper,
        RestorePasswordSetNew,
        addMovie,
        ChangeGender
    },
    data(){
        return{
            modalTitle: '',
            isModalShown: false,
            progressStep: 1,
        }
    },
    methods:{
        changePasswordModal(){
            this.modalTitle = 'Изменение Пароля';
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
            this.modalTitle = 'Добавить Кино';
            this.progressStep = 1;
            this.isModalShown = true;
        },
        addMovie(){
            this.progressStep = 2;
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        },
        changeGenderModal(){
            this.modalTitle = 'Изменить Пол';
            this.progressStep = 1;
            this.isModalShown = true;
        },
        changeGender(){
            this.progressStep = 2;
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        },
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
.change-password-section{
    padding-bottom: 0px;
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