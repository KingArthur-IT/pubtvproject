<template>
  <div class="container flash">
      <h2 class="title flash__title">Флэш-карты</h2>
      <div class="flash__wrap">
          <div v-for="card in phrases" :key="card.id" class="flash__item">
            <FlashCardFromFilmDetail    :id="card.id" 
                                        :phrase="card.phrase" 
                                        :translation="card.translation" 
                                        @addFlashCardEvent="addFlashCard"
            />
          </div>
      </div>
  </div>
</template>

<script>
import { cardPhrases } from '@/data/data.js'
import FlashCardFromFilmDetail from '@/components/UIKit/FlashCardFromFilmDetail.vue';

export default {
    components:{
        FlashCardFromFilmDetail
    },
    data(){
        return{
            cardPhrases,
            phrases:[]
        }
    },
    mounted(){
        this.phrases = this.cardPhrases;
    },
    methods:{
        addFlashCard(cardId){
            this.phrases = this.phrases.filter(card => card.id !== cardId);
        }
    }
}
</script>

<style scoped>
.flash{
    padding-top: 87px;
    padding-bottom: 66px;
    position: relative;
}
.flash__wrap{
    display: flex;
    flex-wrap: wrap;
    transform: translateX(-10px);
    width: calc(100% + 20px);
}
.flash__item{
    flex-basis: 31.63%;
    margin: 0 10px 28px 10px;
}
.flash__title{
    margin-bottom: 54px;
}

@media screen and (max-width: 1240px) {
    .flash__item{
        flex-basis: 31%;
    }
}
@media screen and (max-width: 1024px) {
    .flash__item{
        flex-basis: 47%;
    }
}
@media screen and (max-width: 768px) {
    .flash{
        margin: auto;
        padding-top: 0;
    }
    .flash__wrap{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(0px);
        width: 100%;
    }
    .flash__item{
        flex-basis: auto;
        width: 360px;
        margin-bottom: 40px;
    }
    
}
@media screen and (max-width: 425px) {
    .flash__item{
        width: 100%;
        margin: 0 0px 40px 0px;
    }
}
</style>