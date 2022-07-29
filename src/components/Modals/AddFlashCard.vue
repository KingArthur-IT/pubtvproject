<template>
    <div class="modal">
        <input type="text" class="input modal__input" placeholder="Оригинал слова">
        <input type="text" class="input modal__input" placeholder="Перевод слова">
        <CustomButton @click="addEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Добавить</span>
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
        addEvent(){
            this.$emit('addEvent')
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
</style>