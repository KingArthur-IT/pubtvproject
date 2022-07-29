<template>
  <div class="flash">
      <InformationIcon class="flash__info-icon" />
      <CustomButton @click="openAddFlashCardModal" class="flash__btn" :paddingY="12"><span class="flash__btn-text">Добавить слово</span></CustomButton>
      <div class="flash__wrap">
          <div v-for="(item, i) in phrases" :key="i" class="flash__item">
            <FlashCard :phrase="item.phrase" :translation="item.translation" />
        </div>
      </div>
      <ModalWrapper 
            :title="'Добавить Флэш-карту'" 
            :lineWidth="progressStep * 50"
            :isShown="isModalShown" 
            @closeModal="closeModal"
    >
        <AddFlashCard @addEvent="addFlashCard" />
    </ModalWrapper>
  </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import FlashCard from '@/components/UIKit/FlashCard.vue';
import InformationIcon from '@/components/Icons/InformationIcon.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import AddFlashCard from '@/components/Modals/AddFlashCard.vue';

export default {
    components:{
        CustomButton, FlashCard, InformationIcon, ModalWrapper, AddFlashCard
    },
    data(){
        return{
            isModalShown: false,
            progressStep: 1,
            phrases:[
                {phrase: 'Alright', translation: 'Привет'},
                {phrase: 'Cheers mate!', translation: 'Спасибо'},
                {phrase: 'I\'m off then. Ta-ra', translation: 'Я ухожу, прощай.'},
                {phrase: 'Fancy a cuppa? I\'m brewing one just now', translation: 'Не хотите ли чашку чая? Я только что поставил чайник'},
                {phrase: 'Give me a bell on Friday.', translation: 'Позвони мне в пятницу'},
                {phrase: 'That\'s load of bollocks', translation: 'Это неправда'},
                {phrase: 'That\'s load of bollocks', translation: 'Это неправда'},
            ]
        }
    },
    methods:{
        closeModal(){
            this.isModalShown = false;
        },
        openAddFlashCardModal(){
            this.progressStep = 1;
            this.isModalShown = true;
        },
        addFlashCard(){
            this.progressStep = 2;
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        }
    }
}
</script>

<style scoped>
.flash{
    padding: 43px 0 85px;
    position: relative;
}
.flash__info-icon{
    position: absolute;
    right: 17px;
    top: 26px;
    cursor: pointer;
}
.flash__btn{
    margin: auto;
    margin-bottom: 76px;
    /* width: 380px; */
    width: 31.6%;
}
.flash__btn-text{
    font-size: 23px;
}
.flash__wrap{
    display: flex;
    flex-wrap: wrap;
}
.flash__item{
    flex-basis: 31.63%;
    margin: 0 10px 28px 10px;
    /* margin-bottom: 28px; */
}
</style>