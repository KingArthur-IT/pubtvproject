<template>
    <div class="settings">
        <h2 class="section-title settings__title">Учётная Запись</h2>
        <CustomButton @click="changePasswordModal" class="settings__btn" :paddingY="12"><span class="settings__btn-text">Изменить пароль</span></CustomButton>
        <CustomButton @click="changeEmailModal" class="settings__btn" :paddingY="12"><span class="settings__btn-text">Изменить email</span></CustomButton>
        <CustomButton @click="changeGenderModal" class="gender__btn" :paddingY="12"><span class="settings__btn-text">Изменить пол</span></CustomButton>
        <h2 class="section-title settings__title">Админ Панель</h2>
        <CustomButton @click="addMovieModal" class="settings__btn" :paddingY="12"><span class="settings__btn-text">Добавить кино</span></CustomButton>
        
        <ModalWrapper 
                :title="modalTitle" 
                :lineWidth="progressStep * 50"
                :isShown="isModalShown" 
                @closeModal="closeModal"
            >
            <RestorePasswordSetNew v-if="modalTitle === 'Изменение Пароля'" @nextRestore="changePassword"/>
            <ChangeGender v-if="modalTitle === 'Изменить Пол'" @changeGender="changeGender"/>
            <ChangeEmail v-if="modalTitle === 'Изменить Email'" @changeEmail="changeEmail"/>
            <addMovie v-if="modalTitle === 'Добавить Кино'" @addEvent="addMovie" />
        </ModalWrapper>
    </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import RestorePasswordSetNew from '@/components/Modals/RestorePasswordSetNew.vue';
import ChangeGender from '@/components/Modals/ChangeGender.vue';
import ChangeEmail from '@/components/Modals/ChangeEmail.vue';
import addMovie from '@/components/Modals/addMovie.vue';

export default {
    components:{
        CustomButton, ModalWrapper, RestorePasswordSetNew, addMovie, ChangeGender, ChangeEmail
    },
    data(){
        return{
            isModalShown: false,
            progressStep: 1,
            modalTitle: '',
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
        changeEmailModal(){
            this.modalTitle = 'Изменить Email';
            this.progressStep = 1;
            this.isModalShown = true;
        },
        changeEmail(){
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
    margin: auto;
    max-width: 380px;
    padding: 87px 0;
}
.settings__title{
    margin-bottom: 33px;
    text-align: center;
}
.settings__btn{
    margin-bottom: 15px;
    width: 100%;
}
.gender__btn{
    margin-bottom: 83px;
    width: 100%;
}
.settings__btn-text{
    font-size: 20px;
}
</style>