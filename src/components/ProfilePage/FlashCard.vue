<template>
  <div class="flash">
      <InformationIcon @click="isInfoModalShown = true" class="flash__info-icon" />
      <CustomButton @click="openAddFlashCardModal" class="flash__btn" :paddingY="12"><span class="flash__btn-text">Добавить слово</span></CustomButton>
      <div class="flash__wrap">
          <div v-for="(item, i) in phrases" :key="i" class="flash__item">
            <FlashCardFromProfile :phrase="item.phrase" :translation="item.translation" :audioUrl="item.audioUrl"/>
        </div>
      </div>
      <ModalWrapper 
            :title="'Добавить Флэш-карту'" 
            :lineWidth="progressStep * 50"
            :isShown="isModalShown" 
            @closeModal="closeModal"
            :isLongModal="true"
            :marginHeroMobileTop="50"
    >
        <AddFlashCard @addEvent="addFlashCard" />
    </ModalWrapper>
    <InfoPopup  :isShown="isInfoModalShown" 
                @closeModal="isInfoModalShown = false"
                :title="'Как использовать Флэш - Карты'" 
                :text="' На странице Флэш-карты отображаются все те слова и фразы, которые вы добавили с просмотренного вами кино. Также имеется возможность добавлять свои личные слова. Если вы запомнили перевод слова, тогда нажмите я запомнил(а). Если вы хотите посмотреть перевод слова на компьютерной версии сайта, то наведите курсор мыши на заблюренную часть под словом на карточке, а на мобильной версии просто нажмите на заблюренную часть. Если хотите прочитать про систему изучения слов, которая используется на данном сайте, то перейдите по ссылке.'" 
    />
  </div>
</template>

<script>
import { cardPhrases } from '@/data/data.js'
import CustomButton from '@/components/UIKit/CustomButton.vue';
import FlashCardFromProfile from '@/components/UIKit/FlashCardFromProfile.vue';
import InformationIcon from '@/components/Icons/InformationIcon.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import AddFlashCard from '@/components/Modals/AddFlashCard.vue';
import InfoPopup from '@/components/Modals/InfoPopup.vue'

export default {
    components:{
        CustomButton, 
        FlashCardFromProfile, 
        InformationIcon, 
        ModalWrapper, 
        AddFlashCard,
        InfoPopup
    },
    mounted(){
        this.phrases = this.cardPhrases;
    },
    data(){
        return{
            isModalShown: false,
            isInfoModalShown: false,
            progressStep: 1,
            cardPhrases,
            phrases:[]
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
}

@media screen and (max-width: 1240px) {
    .flash__btn{
        width: 31%;
    }
    .flash__item{
        flex-basis: 31%;
    }
}
@media screen and (max-width: 1024px) {
    .flash__btn{
        width: 47%;
    }
    .flash__item{
        flex-basis: 47%;
    }
}
@media screen and (max-width: 768px) {
    .flash{
        margin: auto;
        padding-top: 0;
    }
    .flash__btn{
        width: 360px;
        margin-bottom: 64px;
    }
    .flash__wrap{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .flash__item{
        flex-basis: auto;
        width: 360px;
        margin-bottom: 40px;
    }
    .flash__info-icon{
        display: none;
    }
    
}
@media screen and (max-width: 425px) {
    .flash__btn{
        width: 100%;
    }
    .flash__item{
        width: 100%;
        margin: 0 0px 40px 0px;
    }
}
</style>