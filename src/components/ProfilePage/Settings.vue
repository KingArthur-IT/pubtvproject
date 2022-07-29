<template>
    <div class="settings">
        <h2 class="section-title settings__title">Учётная Запись</h2>
        <CustomButton @click="changePasswordModal" class="settings__btn" :paddingY="12"><span class="settings__btn-text">Изменить пароль</span></CustomButton>
        <h2 class="section-title settings__title">Админ Панель</h2>
        <CustomButton @click="addMovieModal" class="settings__btn" :paddingY="12"><span class="settings__btn-text">Добавить кино</span></CustomButton>
    <ModalWrapper 
            :title="isChangePassword ? 'Изменение Пароля' : 'Добавить Кино'" 
            :lineWidth="progressStep * 50"
            :isShown="isModalShown" 
            @closeModal="closeModal"
        >
        <RestorePasswordSetNew v-if="isChangePassword" @nextRestore="changePassword"/>
        <addMovie v-else @addEvent="addMovie" />
    </ModalWrapper>
    </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import RestorePasswordSetNew from '@/components/Modals/RestorePasswordSetNew.vue';
import addMovie from '@/components/Modals/addMovie.vue';

export default {
    components:{
        CustomButton, ModalWrapper, RestorePasswordSetNew, addMovie
    },
    data(){
        return{
            isModalShown: false,
            progressStep: 1,
            isChangePassword: true
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
    margin: auto;
    max-width: 380px;
    padding: 87px 0;
}
.settings__title{
    margin-bottom: 33px;
    text-align: center;
}
.settings__btn{
    margin-bottom: 83px;
    width: 100%;
}
.settings__btn-text{
    font-size: 20px;
}
</style>