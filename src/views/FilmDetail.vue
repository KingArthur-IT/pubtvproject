<template>
<main>
    <div class="details">
        <div class="container">
            <div class="bradcrumbs">
                <div class="bradcrumb__item">
                    <router-link to="/" class="bradcrumbs__link">Главная</router-link>
                </div>
                <div class="bradcrumb__item">
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="bradcrumb__item">
                    Сериалы
                </div>
                <div class="bradcrumb__item">
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="bradcrumb__item">
                    Драма
                </div>
            </div>
            <div class="title-wrap">
                <h1 class="title">{{filmName}}</h1>
                <div class="title-wrap__icons">
                    <EditIcon class="edit-icon" />
                    <HeartIcon />
                </div>
            </div>
            <div class="player-wrapper">
                <img src="@/assets/img/player.png" alt="">
            </div>
            <div class="seasons">
                <div class="seasons__list">
                    <Carousel :items-to-show="6.1" :snapAlign="'start'">
                        <Slide v-for="slide in 8" :key="slide">
                            <div @click="currentSeason = slide" class="seasons__item" :class="{'active': slide === currentSeason}">{{slide}} сезон</div>
                        </Slide>
                    </Carousel>
                </div>
                <CustomButton class="seasons__btn" :paddingY="9"><span class="seasons__btn-text">Добавить сезон</span></CustomButton>
            </div>
        </div>
    </div>
    <FlashCards />
</main>
<FooterDefault />
</template>

<script>
import { filmListData } from '@/data/data.js';
import FooterDefault from '@/components/FooterDefault.vue';
import FlashCards from '@/components/FilmDetailPage/FlashCards.vue';
import EditIcon from '@/components/Icons/EditIcon.vue';
import HeartIcon from '@/components/Icons/HeartIcon.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import CustomButton from '@/components/UIKit/CustomButton.vue';

export default {
  components:{
    FooterDefault,
    FlashCards,
    EditIcon,
    HeartIcon,
    Carousel,
    Slide,
    CustomButton
  },
  data(){
    return{
      filmListData,
      filmList: [],
      currentSeason: 1
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
  computed:{
      filmName(){
          return this.filmList.find(film => film.id == this.$route.params.filmId)?.filmName;
      }
  }
}
</script>

<style scoped>
.carousel__slide{
    justify-content: flex-start !important;
}
.details{
    background: #272727;
    padding-top: 52px;
    padding-bottom: 22px;
}
.bradcrumbs{
    display: flex;
    align-items: center;
    margin-bottom: 21px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 135%;
    color: #FFFFFF;
}
.bradcrumb__item{
    margin-right: 14px;
}
.bradcrumbs__link{
    color: #fff;
    transition: color var(--transition-time) ease-in-out;
}
.bradcrumbs__link:hover{
    color: var(--primary-hover-color);
}
.title-wrap{
    margin-bottom: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title-wrap__icons{
    display: flex;
}
.edit-icon{
    margin-right: 35px;
}
.player-wrapper{
    width: 100%;
    margin-bottom: 37px;
}
.seasons{
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.seasons__list{
    flex-basis: 80%;
}
.seasons__item{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 135%;
    color: #FFFFFF;
    padding-bottom: 12px;
    cursor: pointer;
}
.seasons__item:after{
    content: '';
    position: absolute;
    left: 0%;
    right: 50%;
    bottom: 0px;
    height: 5px;
    background: transparent;
    border-radius: 3px;
    transition: background .1s ease-in-out;
}
.active:after{
    background: var(--primary-color);
}
.seasons__btn-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 137%;
    color: #FFFFFF;
}
</style>