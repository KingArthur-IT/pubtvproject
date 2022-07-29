<template>
    <div class="modal">
        <input type="text" class="input modal__input" placeholder="Название">
        <InputDropdown class="modal__input" :list="englishLevelList" :placeholder="'Уровень Английского'" />
        <textarea class="modal__input" cols="30" rows="15"></textarea>
        <InputDropdown class="modal__input" :list="serialslList" :placeholder="'Сериал'" />
        <InputWithButton class="modal__input" :placeholder="'Постер'" >
            <LoadIcon />
        </InputWithButton>
        <InputWithButton class="modal__input" :placeholder="'Видео'" >
            <LoadIcon />
        </InputWithButton>
        <InputWithButton class="modal__input" :placeholder="'Субтитры'" >
            <LoadIcon />
        </InputWithButton>
        <InputWithButton class="modal__input" :placeholder="'Слово'" >
            <span class="modal__btn-text">Добавить</span>
        </InputWithButton>
        <CustomButton @click="addEvent" class="modal__btn" :paddingY="12">
            <span class="modal__btn-text">Загрузить</span>
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
        CustomButton, InputDropdown, InputWithButton, LoadIcon
    },
    data(){
        return{
            englishLevelList: ['Легкий', 'Средний', 'Сложный'],
            serialslList: ['Сериал', 'Фильм', 'Мультсериал']
        }
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
    border-radius: 22px;
}
.modal__btn{
    width: 100%;
    margin-top: 28px;
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
textarea {
  resize: none;
  outline: none;
}
</style>