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
</style>