<template>
  <div class="main-carousel" :class="{'onCatalogPage': isOnCatalogPage}">
    <div class="main-carousel__hero">
        <Carousel :items-to-show="2" :wrap-around="true" ref="mainCarousel" :breakpoints='breakpoints'>
            <Slide v-for="slide in mainSliderList" :key="slide.id">
                <div @click="goToDetailPage" class="carousel__item main-carousel__item">
                    <img :src="getImageUrl(slide.imgName)" alt="img" class="carousel__img">
                    <div class="main-carousel__tag-list">
                        <div v-for="(tag, i) in slide.tags" :key="i" class="main-carousel__tag">{{tag}}</div>
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="main-carousel__arrow arrow-left" @click="prevClick">
            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 28L2 15L15 2" stroke="black" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="main-carousel__arrow arrow-right" @click="nextClick">
            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L15 15L2 28" stroke="black" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
  </div>
</template>

<script>
import { mainSliderData } from '@/data/data.js';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
    },
    props:{
        isOnCatalogPage:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            mainSliderData,
            mainSliderList: [],
            breakpoints: {
                320:{
                    itemsToShow: 1.15,
                },
                425: {
                    itemsToShow: 1.2,
                },
                600: {
                    itemsToShow: 1.5,
                },
                860: {
                    itemsToShow: 1.8,
                },
                // 1024 and up
                1240: {
                    itemsToShow: 2,
                },
            },
        }
    }, 
    mounted(){
        this.mainSliderList = this.mainSliderData;
    },
    methods:{
        getImageUrl(imgName){
            return new URL(`../../assets/img/main-slider/${imgName}.png`, import.meta.url).href
        },
        prevClick(){
            this.$refs.mainCarousel.prev();
            this.$refs.mainCarousel.updateSlideWidth();
        },
        nextClick(){
            this.$refs.mainCarousel.next();
            this.$refs.mainCarousel.updateSlideWidth();
        },
        goToDetailPage(){
            this.$router.push({name: 'detail', params: {filmId: 0}})
        }
    }
}
</script>

<style scoped>
.main-carousel{
    margin-top: 50px;
    margin-bottom: 58px;
    background: transparent;
    overflow-x: hidden;
}
.main-carousel__hero{
    position: relative;
}
.main-carousel__item{
    cursor: pointer;
    position: relative;
}
.main-carousel__tag-list{
    display: flex;
    position: absolute;
    bottom: 37px;
    left: 47px;
}
.main-carousel__tag{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.64);
    margin-right: 63px;
}
.carousel__img{
    width: 100%;
    border-radius: 16px;
    pointer-events: none;
}
.main-carousel__arrow{
    cursor: pointer;
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transition: opacity var(--transition-time) ease-in-out;
}
.main-carousel__arrow:hover{
    opacity: 1;
}
.arrow-left{
    transform: translate(-50%, -50%);
    left: 25%;
}
.arrow-right{
    transform: translate(50%, -50%);
    right: 25%;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.0);
}

@media screen and (max-width: 1240px) {
    .arrow-left{
        left: 22.5%;
    }
    .arrow-right{
        right: 22.5%;
    }
    .arrow-left svg{
        transform: translateX(-2px);
    }
    .arrow-right svg{
        transform: translateX(3px);
    }
    .main-carousel__tag-list{
        bottom: 30px;
        left: 40px;
    }
    .main-carousel__tag{
        margin-right: 40px;
    }
}
@media screen and (max-width: 1024px) {
    .main-carousel__arrow{
        width: 60px;
        height: 60px;
    }
    .main-carousel__arrow svg{
        height: 24px;
    }
    .arrow-left svg{
        transform: translateX(-2px);
    }
    .arrow-right svg{
        transform: translateX(3px);
    }
    .main-carousel__tag{
        font-size: 18px;
    }
}
@media screen and (max-width: 860px) {
    .arrow-left{
        left: 17%;
    }
    .arrow-right{
        right: 17%;
    }
}
@media screen and (max-width: 768px) {
    .main-carousel{
        margin-top: 40px;
        margin-bottom: 48px;
    }
    .main-carousel__tag-list{
        bottom: 20px;
        left: 30px;
    }
    .main-carousel__tag{
        margin-right: 25px;
        font-size: 14px;
        color: #fff;
    }
    .onCatalogPage{
        margin-top: 0px;
    }
}
@media screen and (max-width: 600px) {
    .arrow-left{
        left: 8.5%;
    }
    .arrow-right{
        right: 8.5%;
    }
    .main-carousel__arrow{
        width: 40px;
        height: 40px;
    }
    .main-carousel__arrow svg{
        height: 18px;
    }
    .arrow-right svg{
        transform: translateX(2px);
    }
    .main-carousel{
        margin-top: 30px;
        margin-bottom: 40px;
    }
    .main-carousel__tag-list{
        bottom: 15px;
        left: 20px;
    }
    .main-carousel__tag{
        font-size: 12px;
    }
    .onCatalogPage{
        margin-top: 0px;
    }
}

@media screen and (max-width: 425px) {
    .main-carousel{
        margin-top: 24px;
        margin-bottom: 29px;
    }
    .main-carousel__arrow{
        display: none;
    }
    .main-carousel__tag-list{
        bottom: 10px;
        left: 19px;
    }
    .main-carousel__tag{
        font-size: 8px;
    }
    .onCatalogPage{
        margin-top: 0px;
    }
}
</style>