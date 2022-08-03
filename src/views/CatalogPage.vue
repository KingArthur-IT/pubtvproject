<template>
  <main>
      <MainSlider />
      <MobileFilterSection />
      <div class="sliders-wrapper">
        <FilmSlider :title="'Новые Сериалы'"
                    :refer="'hard-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="hardEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
        />
        <FilmSlider :title="'Интересный Сюжет'"
                    :refer="'interesting-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="interestingEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
        />
      </div>
  </main>
  <FooterDefault />
</template>

<script>
import { filmListData } from '@/data/data.js';
import FooterDefault from '@/components/FooterDefault.vue';
import MainSlider from '@/components/HomePage/MainSlider.vue'
import MobileFilterSection from '@/components/HomePage/MobileFilterSection.vue'
import FilmSlider from '@/components/HomePage/FilmSlider.vue'

export default {
  components:{
    FooterDefault,
    MainSlider,
    MobileFilterSection,
    FilmSlider
  },
  data(){
    return{
      filmListData,
      filmList: [],
    }
  }, 
  mounted(){
    setTimeout(() => {
      this.filmList = this.filmListData;
    }, 3000);
  },
  methods:{
    toggleFavouriteFilm(id){
      var arrItem = this.filmList.find(el => el.id === id);
      arrItem.isFavourite = !arrItem.isFavourite;
    },
  },
  computed:{
    hardEnglishFilms(){
      return this.filmList.filter(film => film.category === 'hardEnglish')
    },
    interestingEnglishFilms(){
      return this.filmList.filter(film => film.category === 'interestingEnglish')
    },
    undestandableEnglishFilms(){
      return this.filmList.filter(film => film.category === 'understandableEnglish')
    },
  }
}
</script>

<style scoped>
.sliders-wrapper{
  margin-bottom: 50px;
}
</style>