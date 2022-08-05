<template>
    <div class="modal">
        <input type="text" class="input modal__input" placeholder="Введите название сезона">
        <textarea class="input modal__input textarea" cols="30" rows="10" placeholder="Описание"></textarea>
        <InputDropdown class="modal__input" :list="englishLevelList" :placeholder="'Уровень Английского'" />
        <InputWithButton class="modal__input" :placeholder="'Постер'" >
            <div class="modal__input-btn-wrap">
                <span class="modal__btn-text">Постер</span>
                <LoadIcon />
            </div>
        </InputWithButton>
        <CustomButton @click="restoreEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Сохранить</span>
        </CustomButton>
    </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import InputDropdown from '@/components/UIKit/InputDropdown.vue';
import InputWithButton from '@/components/UIKit/InputWithButton.vue';
import LoadIcon from '@/components/Icons/LoadIcon.vue';

export default {
    components:{
        CustomButton,
        InputDropdown,
        InputWithButton,
        LoadIcon
    },
    data(){
        return{
            englishLevelList: ['Высокий', 'Средний', 'Низкий'],
        }
    },
    methods:{
        restoreEvent(){
            this.$emit('addEvent');
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
    margin-bottom: 135px;
}
.modal__btn-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 135%;
    color: #FFFFFF;
}
.modal__input-btn-wrap{
    display: flex;
    align-items: center;
}
.modal__input-btn-wrap span{
    display: none;
    margin-right: 19px;
}
textarea {
  resize: none;
  outline: none;
  padding: 16px 36px;
  border-radius: 15px;
}

@media screen and (max-width: 425px) {
    .modal__input{
        margin-bottom: 16px;
    }
    .modal__btn{
        margin-bottom: 100px;
    }
    .modal__input-btn-wrap span{
        display: block;
    }
    .btn-desc-text{
        display: none;
    }
    textarea {
        border-radius: 6px;
    }
}
</style>