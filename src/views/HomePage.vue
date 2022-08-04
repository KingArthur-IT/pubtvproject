<template>
  <main>
      <MainSlider />
      <FilterSection class="only-desctop" />
      <div class="sliders-wrapper">
        <FilmSlider :title="'Новые Сериалы'"
                    :refer="'hard-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="hardEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
                    class="only-mobile"
        />
        <FilmSlider :title="'Сложный Английский'"
                    :refer="'hard-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="hardEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
                    class="only-desctop"
        />
        <FilmSlider :title="'Понятный Английский'"
                    :refer="'understand-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="undestandableEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
                    class="only-desctop"
        />
        <FilmSlider :title="'Интересный Сюжет'"
                    :refer="'interesting-carousel'" 
                    :sliderDataFolder="'films'"
                    :slidesData="interestingEnglishFilms" 
                    @toggleFavourite="toggleFavouriteFilm"
        />
      </div>
      <AboutUsSection />
  </main>
  <FooterDefault />
</template>

<script>
import { filmListData } from '@/data/data.js';
import FooterDefault from '@/components/FooterDefault.vue';
import AboutUsSection from '@/components/HomePage/AboutUsSection.vue'
import MainSlider from '@/components/HomePage/MainSlider.vue'
import FilterSection from '@/components/HomePage/FilterSection.vue'
import FilmSlider from '@/components/HomePage/FilmSlider.vue'

export default {
  components:{
    FooterDefault,
    AboutUsSection, MainSlider,
    FilterSection,
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
    scrollMeTo(refName) {
        var element = this.$refs[refName];
        console.log(element)
        var top = element.offsetTop;

        window.scrollTo(0, top);
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
.only-mobile{
  display: none;
}

@media screen and (max-width: 768px){
  .only-mobile{
    display: block;
  }
  .only-desctop{
    display: none;
  }

}
</style>