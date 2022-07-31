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
                    <HeartIcon :isSelected="isFavourite" @click="isFavourite = !isFavourite" />
                </div>
            </div>
            <div class="player-wrapper">
                <!-- <img id="player" src="@/assets/img/player.png" alt=""> -->
                <video id="player" playsinline controls data-poster="/path/to/poster.jpg">
                    <source src="@/assets/video/sample.mp4" type="video/mp4" />
                    <!-- <source src="/path/to/video.webm" type="video/webm" /> -->

                    <!-- Captions are optional -->
                    <!-- <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> -->
                </video>
            </div>
            <div class="seasons">
                <div class="seasons__list">
                    <Carousel :items-to-show="6.2" :snapAlign="'start'">
                        <Slide v-for="slide in 8" :key="slide">
                            <div @click="currentSeason = slide" class="seasons__item" :class="{'active': slide === currentSeason}">{{slide}} сезон</div>
                        </Slide>
                    </Carousel>
                    <img src="@/assets/blur-right-small.png" class="blur-right">
                </div>
                <CustomButton class="seasons__btn" :paddingY="9"><span class="seasons__btn-text">Добавить сезон</span></CustomButton>
            </div>
            <div class="seasons-hero">
                <Carousel :items-to-show="3.9" :snapAlign="'start'">
                    <Slide v-for="(slide, i) in seriesList" :key="slide.id">
                        <div class="seasons-hero__item">
                            <div v-if="i < seriesList.length - 1" class="seasons-hero__content">
                                <div class="seasons-hero__img">
                                    <img :src="getImageUrl(slide.imgName)" alt="series">
                                    <div class="seasons-hero__label">{{slide.timeValue}} минут</div>
                                </div>
                                <p class="seasons-hero__text">{{currentSeason}} сезон {{i + 1}} серия</p>
                            </div>
                            <AddFilmArea v-else class="seasons-hero__add-area"/>
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <FilmTextDescription />
        </div>
    </div>
    <FlashCards />
</main>
<FooterDefault />
</template>

<script>
import Plyr from 'plyr';
import { filmListData } from '@/data/data.js';
import FooterDefault from '@/components/FooterDefault.vue';
import FlashCards from '@/components/FilmDetailPage/FlashCards.vue';
import EditIcon from '@/components/Icons/EditIcon.vue';
import HeartIcon from '@/components/Icons/HeartIcon.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import CustomButton from '@/components/UIKit/CustomButton.vue';
import AddFilmArea from '@/components/Icons/AddFilmArea.vue';
import FilmTextDescription from '@/components/FilmDetailPage/FilmTextDescription.vue';

export default {
  components:{
    FooterDefault,
    FlashCards,
    EditIcon,
    HeartIcon,
    Carousel,
    Slide,
    CustomButton,
    AddFilmArea,
    FilmTextDescription
  },
  data(){
    return{
      filmListData,
      filmList: [],
      currentSeason: 1,
      isFavourite: false,
      seriesList: [
          {id: 0, imgName: 1, timeValue: 60},
          {id: 1, imgName: 2, timeValue: 63},
          {}
        ],
      player: null
    }
  }, 
  mounted(){
    this.filmList = this.filmListData;
    this.player = new Plyr('#player');
  },
  methods:{
    getImageUrl(imgName){
        return new URL(`../../src/assets/img/series/${imgName}.png`, import.meta.url).href
    },
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
    margin-bottom: 28px;
}
.seasons__list{
    position: relative;
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
.seasons-hero{
    width: 100%;
    margin-bottom: 65px;
}
.seasons-hero__item{
    position: relative;
}
.seasons-hero__content{
    position: relative;
}
.seasons-hero__img{
    position: relative;
}
.seasons-hero__img img{
    height: 153px;
    border-radius: 8px;
    pointer-events: none;
}
.seasons-hero__label{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 11px;
    color: #FFFFFF;
    padding: 5px 20px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    border-radius: 7px;
    position: absolute;
    bottom: 16px;
    right: 21px;
}
.seasons-hero__text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 135%;
    color: #FFFFFF;
    margin-top: 12px;
    text-align: left;
}
.seasons-hero__add-area{
    margin-bottom: 35px;
}
.blur-right{
    position: absolute;
    top: -5px;
    bottom: 0;
    right: 0px;
    width: 80px;
    height: 100%;
    pointer-events: none;
}
</style>