<template>
    <div class="modal">
        <input type="email" class="input modal__input" placeholder="Введите Email или телефон">
        <CustomButton @click="restoreEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Продолжить</span>
        </CustomButton>
    </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';

export default {
    components:{
        CustomButton
    },
    methods:{
        restoreEvent(){
            this.$emit('nextRestore');
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