<template>
<main>
    <div class="details">
        <div class="container">
            <Bradcrumbs class="details__bradcrumbs" />
            <div class="title-wrap">
                <h1 class="title">{{filmName}}</h1>
                <div class="title-wrap__icons">
                    <EditIcon @click="openEditSeasonModal" class="edit-icon" />
                    <HeartIcon :isSelected="isFavourite" @click="isFavourite = !isFavourite" />
                </div>
            </div>
            <div class="player-wrapper">
                <!-- <img id="player" src="@/assets/img/player.png" alt=""> -->
                <video id="player" playsinline controls :data-poster="getImageUrl('poster')">
                    <source src="@/assets/video/sample.mp4" type="video/mp4" />
                    <!-- <source src="/path/to/video.webm" type="video/webm" /> -->

                    <!-- Captions are optional -->
                    <!-- <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> -->
                </video>
            </div>
        </div>
        <div class="container">
            <div class="seasons">
                <div class="seasons__list">
                    <Carousel :items-to-show="6.2" :snapAlign="'start'" ref="seasonsHeadSlider" :breakpoints='seasonsHeadBreakpoints'>
                        <Slide v-for="slide in 8" :key="slide">
                            <div @click="currentSeason = slide" class="seasons__item" :class="{'active': slide === currentSeason}">{{slide}} сезон</div>
                        </Slide>
                    </Carousel>
                    <img src="@/assets/blur-right-small.png" class="blur-right">
                </div>
                <div class="seasons__controls-wrap">
                    <div class="seasons__arrows">
                        <div class="seasons__arrow arrow-left" @click="prevSeasonsHeadClick">
                            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 28L2 15L15 2" stroke="white" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="seasons__arrow arrow-right" @click="nextSeasonsHeadClick">
                            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L15 15L2 28" stroke="white" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <CustomButton @click="openNewSeasonModal" class="seasons__btn" :paddingY="9"><span class="seasons__btn-text">Добавить сезон</span></CustomButton>
                </div>
            </div>
        </div>
        <div class="container series-container">
            <div class="seasons-hero">
                <Carousel :items-to-show="3.9" :snapAlign="'start'" :breakpoints='seriesBreakpoints'>
                    <Slide v-for="(slide, i) in seriesList" :key="slide.id">
                        <div class="seasons-hero__item">
                            <div v-if="i < seriesList.length - 1" class="seasons-hero__content">
                                <div class="seasons-hero__img">
                                    <img :src="getImageUrl(slide.imgName)" alt="series">
                                    <div class="seasons-hero__label">{{slide.timeValue}} минут</div>
                                </div>
                                <p class="seasons-hero__text">{{currentSeason}} сезон {{i + 1}} серия</p>
                            </div>
                            <AddFilmArea @click="openNewSeriesModal" v-else class="seasons-hero__add-area"/>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
        <div class="container">
            <FilmTextDescription />
        </div>
    </div>
    <FlashCards />
    <ModalWrapper 
            :title="!isSeasonModal ? 'Добавить Серию' : isEditSeason ? 'Редактировать сезон' : 'Добавить сезон'" 
            :lineWidth="progressStep * 50"
            :isShown="isModalShown" 
            @closeModal="closeModal"
        >
        <AddNewSeason v-if="isSeasonModal" :isEdit="isEditSeason" @addEvent="finishAddNewSeason"/>
        <AddNewSeries v-else @addEvent="finishAddNewSeries" />
    </ModalWrapper>
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
import Bradcrumbs from '@/components/UIKit/Bradcrumbs.vue';
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import AddNewSeason from '@/components/Modals/AddNewSeason.vue';
import AddNewSeries from '@/components/Modals/AddNewSeries.vue';

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
    FilmTextDescription,
    Bradcrumbs,
    ModalWrapper,
    AddNewSeason,
    AddNewSeries
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
      player: null,
      seasonsHeadSliderIndex: 1,
      isSeasonModal: true,
      isEditSeason: false,
      progressStep: 1,
      isModalShown: false,
      seasonsHeadBreakpoints: {
                320:{
                    itemsToShow: 2.9,
                },
                375:{
                    itemsToShow: 3.6,
                },
                500:{
                    itemsToShow: 1.8,
                },
                515: {
                    itemsToShow: 2.5,
                },
                710: {
                    itemsToShow: 3.3,
                },
                870: {
                    itemsToShow: 4.3,
                },
                // 1024 and up
                1024: {
                    itemsToShow: 6.3,
                },
        },
        seriesBreakpoints: {
                320: {
                    itemsToShow: 1.7,
                },
                500: {
                    itemsToShow: 2.2,
                },
                700: {
                    itemsToShow: 2.9,
                },
                1024: {
                    itemsToShow: 3.2,
                },
                1240: {
                    itemsToShow: 3.9,
                },
        },
    }
  }, 
  mounted(){
    this.filmList = this.filmListData;
    this.player = new Plyr('#player');
    window.scrollTo(0, 0);
  },
  methods:{
    getImageUrl(imgName){
        return new URL(`../assets/img/series/${imgName}.png`, import.meta.url).href
    },
    prevSeasonsHeadClick(){
        if (this.seasonsHeadSliderIndex > 1){
            this.$refs.seasonsHeadSlider.prev();
            this.$refs.seasonsHeadSlider.updateSlideWidth();
            this.seasonsHeadSliderIndex --;
        }
    },
    nextSeasonsHeadClick(){
        this.$refs.seasonsHeadSlider.next();
        this.$refs.seasonsHeadSlider.updateSlideWidth();
        this.seasonsHeadSliderIndex ++;
    },
    openNewSeasonModal(){
        this.progressStep = 1;
        this.isModalShown = true;
        this.isSeasonModal = true;
        this.isEditSeason = false;
    },
    openEditSeasonModal(){
        this.progressStep = 1;
        this.isModalShown = true;
        this.isSeasonModal = true;
        this.isEditSeason = true;
    },
    openNewSeriesModal(){
        this.progressStep = 1;
        this.isModalShown = true;
        this.isSeasonModal = false;
    },
    closeModal(){
        this.isModalShown = false;
    },
    finishAddNewSeason(){
        this.progressStep = 2;
        setTimeout(() => {
            this.isModalShown = false;
        }, 200);
    },
    finishAddNewSeries(){
        this.progressStep = 2;
        setTimeout(() => {
            this.isModalShown = false;
        }, 200);
    }
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
.seasons__controls-wrap{
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    flex-basis: 72%;
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
.arrow-right{
    margin-right: 5px;
}
.seasons__btn{
    margin-left: 20px;
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
    width: 100%;
    height: 100%;
}
.seasons-hero__content{
    position: relative;
}
.seasons-hero__img{
    position: relative;
    width: 100%;
}
.seasons-hero__img img{
    height: 153px;
    border-radius: 8px;
    pointer-events: none;
    width: 100%;
    height: auto;
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
    width: 100%;
    margin-left: 9px;
    height: calc(100% - 35px);
}
.blur-right{
    position: absolute;
    top: -5px;
    bottom: 0;
    right: -2px;
    width: 80px;
    height: 100%;
    pointer-events: none;
    user-select: none;
}
#player{
    --plyr-color-main: #7E4EFA
}

.seasons-hero__item .seasons-hero__img{
  transform: scale(0.97);
  transform-origin: 50% 100%;
  transition: transform 0.2s ease-in-out;
}
.seasons-hero__item:hover .seasons-hero__img{
  transform: scale(1.0);
}
.seasons__arrows{
    display: flex;
    align-items: center;
}
.seasons__arrow{
    cursor: pointer;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: #595959;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background var(--transition-time) ease-in-out, opacity .2s ease-in-out;
}
.seasons__arrow:first-child{
    margin-right: 4px;
}
.seasons__arrow:hover{
    background: #fff;
}
.seasons__arrow:hover path{
    stroke: #000;
    opacity: 0.5;
}
.seasons__arrow svg{
    width: 6px;
    height: 12px;
}

@media screen and (max-width: 1240px){
    .seasons__list{
        flex-basis: 71%;
    }
    .seasons__item:after{
        width: 74px;
    }
}

@media screen and (max-width: 1100px){
    .seasons__list{
        flex-basis: 69%;
    }
}

@media screen and (max-width: 1024px){
    .seasons__list{
        flex-basis: 65%;
    }
    .series-container{
        padding-right: 0px;
    }
}

@media screen and (max-width: 920px){
    .seasons__list{
        flex-basis: 60%;
    }
}


@media screen and (max-width: 870px){
    .seasons__controls-wrap{
        min-width: 307px;
        margin-left: 5px;
    }
}
@media screen and (max-width: 810px){
    .seasons__list{
        width: 50%;
    }
    .seasons__controls-wrap{
        min-width: 307px;
        margin-left: 5px;
    }
}
@media screen and (max-width: 768px){
    .edit-icon{
        margin-right: 27px;
    }
    .seasons-hero{
        margin-bottom: 40px;
    }
    .seasons-hero__item:hover .seasons-hero__img{
        transform: scale(0.97);
    }
    .seasons__item{
        font-size: 18px;
    }
    .seasons-hero__text{
        font-size: 14px;
    }
    .seasons__item:after{
        width: 69px;
    }
}
@media screen and (max-width: 680px){
    .seasons__list{
        width: 40%;
    }
}
@media screen and (max-width: 600px){
    .details{
        padding-top: 23px;
    }
    .edit-icon{
        margin-right: 17px;
    }
    .title-wrap{
        margin-bottom: 20px;
    }
    .seasons__arrow{
        display: none;
    }
    .seasons__controls-wrap{
        min-width: 202px;
    }
    .seasons__btn{
        margin-left: 0px;
    }
}
@media screen and (max-width: 500px){
    .seasons{
        flex-direction: column;
        margin-bottom: 20px;
    }
    .seasons__list{
        width: 100%;
        margin-bottom: 15px;
    }
    .seasons__controls-wrap{
        justify-content: flex-end;
        width: 100%;
    }
}
@media screen and (max-width: 425px){
    .title-wrap{
        margin-bottom: 14px;
    }
    .details__bradcrumbs{
        display: none;
    }   
    .edit-icon{
        margin-right: 13px;
    }
    .seasons-hero{
        margin-bottom: 31px;
    }
    .seasons__item{
        font-size: 15px;
    }
    .seasons-hero__text{
        font-size: 12px;
    }
    .seasons__item:after{
        width: 56px;
    }
}
</style>