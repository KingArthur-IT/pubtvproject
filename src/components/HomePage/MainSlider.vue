<template>
  <div class="main-carousel">
    <div class="main-carousel__hero">
        <Carousel :items-to-show="2" :wrap-around="true" ref="mainCarousel">
            <Slide v-for="slide in 9" :key="slide">
                <div class="carousel__item">
                    <img :src="getImageUrl(slide)" alt="img" class="carousel__img">
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
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
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
    width: 100%;
    border-radius: 16px;
}
.carousel__img{
    width: 100%;
    border-radius: 16px;
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
</style>