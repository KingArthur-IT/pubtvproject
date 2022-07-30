<template>
  <main>
      <MainSlider />
      <FilterSection />
      <div class="sliders-wrapper">
        <FilmSlider :title="'Сложный Английский'"
                    :refer="'hard-carousel'" 
                    :sliderDataFolder="hardSliderList.folderName"
                    :slidesData="hardSliderList.slides" 
                    @toggleFavourite="toggleFavouriteInHardFilms"
        />
        <FilmSlider :title="'Понятный Английский'"
                    :refer="'understand-carousel'" 
                    :sliderDataFolder="understandSliderList.folderName"
                    :slidesData="understandSliderList.slides" 
                    @toggleFavourite="toggleFavouriteInUnderstandFilms"
        />
        <FilmSlider :title="'Интересный Сюжет'"
                    :refer="'interesting-carousel'" 
                    :sliderDataFolder="interestingSliderList.folderName"
                    :slidesData="interestingSliderList.slides" 
                    @toggleFavourite="toggleFavouriteInInterestingFilms"
        />
      </div>
      <AboutUsSection />
  </main>
  <FooterDefault />
</template>

<script>
import { slidersDataList } from '@/data/data.js';
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
      slidersDataList,
      hardSliderList:  {
        folderName: 'hard',
        slides: []
      },
      understandSliderList: {
        folderName: 'understand',
        slides: []
      },
      interestingSliderList: {
        folderName: 'interesting',
        slides: []
      },
    }
  }, 
  mounted(){
    setTimeout(() => {
      this.hardSliderList = this.slidersDataList?.hardSlider;
      this.understandSliderList = this.slidersDataList?.undestandSlider;
      this.interestingSliderList = this.slidersDataList?.interestingSlider;
    }, 3000);
  },
  methods:{
    toggleFavouriteInHardFilms(id){
      var arrItem = this.hardSliderList.slides.find(el => el.id === id);
      arrItem.isFavourite = !arrItem.isFavourite;
    },
    toggleFavouriteInUnderstandFilms(id){
      var arrItem = this.understandSliderList.slides.find(el => el.id === id);
      arrItem.isFavourite = !arrItem.isFavourite;
    },
    toggleFavouriteInInterestingFilms(id){
      var arrItem = this.interestingSliderList.slides.find(el => el.id === id);
      arrItem.isFavourite = !arrItem.isFavourite;
    }
  }
}
</script>

<style scoped>
.sliders-wrapper{
  margin-bottom: 50px;
}
</style>