<template>
<main>
    <FlashCards />
</main>
<FooterDefault />
</template>

<script>
import { filmListData } from '@/data/data.js';
import FooterDefault from '@/components/FooterDefault.vue';
import FlashCards from '@/components/FilmDetailPage/FlashCards.vue';

export default {
  components:{
    FooterDefault,
    FlashCards
  },
  data(){
    return{
      filmListData,
      filmList: [],
    }
  }, 
  mounted(){
    this.filmList = this.filmListData;
  },
  methods:{
    // toggleFavouriteFilm(id){
    //   var arrItem = this.filmList.find(el => el.id === id);
    //   arrItem.isFavourite = !arrItem.isFavourite;
    // },
  },
}
</script>

<style scoped>

</style>