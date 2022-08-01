<template>
    <div class="modal">
        <input type="text" class="input modal__input" placeholder="Введите код">
        <CustomButton @click="restoreEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Продолжить</span>
        </CustomButton>
        <div class="link modal__code-link">Отправить код ещё раз</div>
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
    margin-bottom: 27px;
}
.modal__btn-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 135%;
    color: #FFFFFF;
}
.modal__code-link{
    cursor: pointer;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #FFFFFF;
    text-align: center;
}

@media screen and (max-width: 425px) {
    .modal__input{
        margin-bottom: 16px;
    }
    .modal__btn{
        margin-bottom: 16px;
    }
}
</style>