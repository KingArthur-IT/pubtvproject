<template>
    <div class="modal">
        <InputDropdown  v-model="gender"
                        class="modal__input" 
                        :list="genderList" 
                        :placeholder="'Пол'" 
        />
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
            gender: '',
            genderList:['Мужской','Женский','Другое']
        }
    },
    methods:{
        saveEvent(){
            this.$emit('changeGender');
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

@media screen and (max-width: 425px) {
    .modal__input{
        margin-bottom: 16px;
    }
}

</style>