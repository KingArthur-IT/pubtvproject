<template>
    <section class="section filter">
        <div class="container">
            <h2 class="section-title filter__title">{{title}}</h2>
            <div class="filter__carousel-wrapper">
                <Carousel :items-to-show="4.3" :ref="refer" :wrap-around="true" :snapAlign="'start'" :breakpoints='breakpoints'>
                    <Slide v-for="slide in slidesData" :key="slide.id">
                        <div class="filter__item" @mouseenter="hoverSlideId = slide.id" @mouseleave="hoverSlideId = -1">
                            <div class="filter__img">
                                <img :src="getImageUrl(slide.imgName)" alt="img">
                                <FilmHoverInfo :isVisible="hoverSlideId === slide.id" :markList="slide.markList" :mark="slide.mark" :filmInfo="slide.filmInfo" :seasons="slide.seasons" />
                            </div>
                            <p class="text filter__film-name">{{slide.filmName}}</p>
                            <p class="text filter__film-type">{{slide.filmType}}</p>
                        </div>
                    </Slide>
                </Carousel>
                <img src="@/assets/blur.png" class="filter__blur">
                <div class="filter__arrow arrow-right" @click="nextClick">
                    <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L15 15L2 28" stroke="white" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import FilmHoverInfo from '@/components/UIKit/FilmHoverInfo.vue'
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
        FilmHoverInfo
    },
    props:{
        title:{
            type: String,
            default: ''
        },
        refer: {
            type: String,
            required: true
        },
        slidesData: {
            type: Array,
            required: true
        },
        sliderDataFolder: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            hoverSlideId: -1,
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.7,
                },
                // 1024 and up
                1240: {
                    itemsToShow: 4.3,
                },
            },
        }
    },
    methods:{
        getImageUrl(imgName){
            return new URL(`../../assets/img/${this.sliderDataFolder}/${imgName}.png`, import.meta.url).href
        },
        prevClick(){
            this.$refs[this.refer].prev();
            this.$refs[this.refer].updateSlideWidth();
        },
        nextClick(){
            this.$refs[this.refer].next();
            this.$refs[this.refer].updateSlideWidth();
        }
    }
}
</script>

<style scoped>
.filter{
    margin-top: 73px;
}
.filter__title{
    margin-bottom: 19px;
}
.filter__item{
    border-radius: 18px;
}
.filter__film-name{
    text-align: left;
}
.filter__film-type{
    text-align: left;
    font-size: 22px;
    opacity: 0.5;
}
.filter__img{
    margin-bottom: 16px;
    position: relative;
    border-radius: 18px;
    overflow: hidden;
}
.filter__carousel-wrapper{
    position: relative;
}
.filter__arrow{
    cursor: pointer;
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #595959;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transition: background var(--transition-time) ease-in-out;
}
.filter__arrow:hover{
    background: #fff;
}
.filter__arrow:hover path{
    stroke: #000;
    opacity: 0.5;
}
.arrow-right{
    transform: translate(50%, -80%);
    right: 0;
}
.arrow-right svg{
    transform: translate(4px, 0);
}
.filter__blur{
    position: absolute;
    top: 0;
    bottom: 0;
    right: -3px;
    width: 80px;
    height: 100%;
}

@media screen and (max-width: 1275px) {
    .arrow-right{
        right: 20px;
    }
}
</style>