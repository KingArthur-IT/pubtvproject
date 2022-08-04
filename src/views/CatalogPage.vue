<template>
  <main class="main">
      <div class="container catalog__panel">
        <ul class="catalog__list">
          <li v-for="(item, i) in panelItems" :key="i" 
              class="catalog__item"
              :class="{'active-link': selectedPanelItem === i}"
              @click="selectedPanelItem = i"
          >{{item}}
          </li>
        </ul>
      </div>
      <MainSlider :isOnCatalogPage="true" />
      <FilterSection :title="'Все фильтры'" class="only-desctop" />
      <MobileFilterSection class="only-mobile" />
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
import MainSlider from '@/components/HomePage/MainSlider.vue';
import FilterSection from '@/components/HomePage/FilterSection.vue';
import MobileFilterSection from '@/components/HomePage/MobileFilterSection.vue'
import FilmSlider from '@/components/HomePage/FilmSlider.vue'

export default {
  components:{
    FooterDefault,
    MainSlider,
    FilterSection,
    MobileFilterSection,
    FilmSlider
  },
  data(){
    return{
      filmListData,
      filmList: [],
      panelItems: ['Сериалы', 'Фильмы', 'Мультфильмы'],
      selectedPanelItem: 0
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
.catalog__panel{
  width: 100%;
  display: none;
  background: #262626;
  margin-bottom: 15px;
}
.catalog__list{
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 11px;
  padding-bottom: 8px;
}
.catalog__item{
  position: relative;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 135%;
  color: #FFFFFF;
  cursor: pointer;
}
.catalog__item:hover{
    color: var(--primary-hover-color);
}
.active-link:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    height: 5px;
    background: var(--primary-color);
    border-radius: 3px;
}


.sliders-wrapper{
  margin-bottom: 50px;
}
.main{
  overflow-x: hidden;
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
  .catalog__panel{
    display: block;
  }
  .catalog__item{
    font-size: 20px;
  }
}

@media screen and (max-width: 425px){
  .catalog__item{
    font-size: 16px;
  }
}
</style>