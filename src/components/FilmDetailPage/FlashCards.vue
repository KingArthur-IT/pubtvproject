<template>
  <div class="container flash">
      <h2 class="title flash__title">Флэш-карты</h2>
      <div class="flash__wrap">
          <div v-for="(item, i) in phrases" :key="i" class="flash__item">
            <FlashCardFromFilmDetail :phrase="item.phrase" :translation="item.translation" />
          </div>
      </div>
  </div>
</template>

<script>
import FlashCardFromFilmDetail from '@/components/UIKit/FlashCardFromFilmDetail.vue';

export default {
    components:{
        FlashCardFromFilmDetail
    },
    data(){
        return{
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