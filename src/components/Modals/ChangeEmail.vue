<template>
    <div class="modal">
        <input  v-model="email" type="email" class="input modal__input" placeholder="Email" :class="{'input-error': !isEmailValid}" @input="isEmailValid = true">
        <div v-if="!isEmailValid" class="text error-text">Введите правильный email</div>
        <CustomButton @click="saveEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Сохранить</span>
        </CustomButton>
    </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import InputDropdown from '@/components/UIKit/InputDropdown.vue';

export default {
    components:{
        CustomButton,
        InputDropdown
    },
    data(){
        return{
            email: '',
            isEmailValid: true
        }
    },
    methods:{
        validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        saveEvent(){
            if (this.email && this.validateEmail(this.email))
                this.$emit('changeEmail');
            else{
                this.isEmailValid = false;
            }
        }
    }
}
</script>

<style scoped>
.modal{
    width: 100%;
}
.modal__input{
    width: 100%;
    margin-bottom: 27px;
}
.modal__btn{
    width: 100%;
}
.modal__btn-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 135%;
    color: #FFFFFF;
}
.error-text{
    color: red;
    margin-bottom: 14px;
    display: block;
    position: relative;
    width: 100%;
    font-size: 14px;
    width: 590px;
}
.modal__input.input-error{
    margin-bottom: 5px;
}
@media screen and (max-width: 425px) {
    .modal__input{
        margin-bottom: 16px;
    }
}

</style>