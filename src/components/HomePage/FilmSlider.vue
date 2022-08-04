<template>
    <section class="section filter">
        <div class="container filter-container">
            <h2 class="section-title filter__title">{{title}}</h2>
            <div class="filter__carousel-wrapper">
                <img :class="{'visible': isLeftArrowShow}" src="@/assets/blur-left.png" class="filter__blur-left">
                <div :class="{'visible': isLeftArrowShow}" class="filter__arrow arrow-left" @click="prevClick">
                    <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 28L2 15L15 2" stroke="white" stroke-opacity="0.58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <Carousel v-if="slidesData && slidesData.length" :items-to-show="4.3" :ref="refer" :wrap-around="true" :snapAlign="'start'" :breakpoints='breakpoints' :mouseDrag="false">
                    <Slide v-for="slide in slidesData" :key="slide.id">
                        <div @click="goToDetailPage(slide.id)" class="filter__item" @mouseenter="hoverSlideId = slide.id" @mouseleave="hoverSlideId = -1">
                            <div class="filter__img">
                                <img :src="getImageUrl(slide.imgName)" alt="img">
                                <FilmHoverInfo  @toggleFavourite="$emit('toggleFavourite', slide.id)" 
                                                :isVisible="hoverSlideId === slide.id" 
                                                :markList="slide.markList" 
                                                :mark="slide.mark" 
                                                :filmInfo="slide.filmInfo" 
                                                :seasons="slide.seasons" 
                                                :isFavourite="slide.isFavourite"
                                                class="filter__film-info"
                                />
                            </div>
                            <p class="text filter__film-name">{{slide.filmName}}</p>
                            <p class="text filter__film-type">{{slide.filmType}}</p>
                        </div>
                    </Slide>
                </Carousel>
                 <Carousel v-else :items-to-show="4" :ref="refer" :wrap-around="true" :snapAlign="'start'" :breakpoints='breakpoints'>
                    <Slide v-for="slide in 4" :key="slide">
                        <FilmSkeleton />
                    </Slide>
                </Carousel>
                <img v-if="slidesData && slidesData.length" src="@/assets/blur-right.png" class="filter__blur-right">
                <div v-if="slidesData && slidesData.length" class="filter__arrow arrow-right" @click="nextClick">
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
import FilmSkeleton from '@/components/UIKit/Skeletons/FilmSkeleton.vue'
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
        FilmHoverInfo,
        FilmSkeleton
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
            isLeftArrowShow: false,
            slideIndex: 1,
            breakpoints: {
                320: {
                    itemsToShow: 1.9,
                },
                375: {
                    itemsToShow: 2.2,
                },
                600: {
                    itemsToShow: 2.7,
                },
                768: {
                    itemsToShow: 2.7,
                },
                1024: {
                    itemsToShow: 3.7,
                },
                1240: {
                    itemsToShow: 4.4,
                },
            },
        }
    },
    methods:{
        getImageUrl(imgName){
            return new URL(`../../assets/img/${this.sliderDataFolder}/${imgName}.png`, import.meta.url).href
        },
        prevClick(){
            if (this.slideIndex > 1){
                this.$refs[this.refer].prev();
                this.$refs[this.refer].updateSlideWidth();
                this.slideIndex --;
            }
        },
        nextClick(){
            this.$refs[this.refer].next();
            this.$refs[this.refer].updateSlideWidth();
            this.slideIndex ++;
        },
        goToDetailPage(filmId){
            this.$router.push({name: 'detail', params: {filmId: filmId}})
        },
    },
    watch:{
        slideIndex: function(){
            if (this.slideIndex > 1)
                this.isLeftArrowShow = true;
            else this.isLeftArrowShow = false;
        }
    }
}
</script>

<style scoped>
.carousel__slide{
    justify-content: flex-start !important;
}
.filter{
    margin-top: 73px;
}
.filter__title{
    margin-bottom: 40px;
}
.filter__item{
    cursor: pointer;
    border-radius: 18px;
    width: 100%;
    margin-right: 5px;
}
.filter__film-name{
    font-weight: 700;
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
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
}
.filter__img img{
    /* width: 97%; */
    width: 100%;
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
    transition: background var(--transition-time) ease-in-out, opacity .2s ease-in-out;
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
.arrow-left{
    transform: translate(-50%, -80%);
    left: 10px;
    z-index: 2;
    opacity: 0;
}
.arrow-right svg{
    transform: translate(4px, 0);
}
.arrow-left svg{
    transform: translate(-2px, 0);
}
.filter__blur-right{
    position: absolute;
    top: 0;
    bottom: 0;
    right: -3px;
    width: 80px;
    height: 100%;
    pointer-events: none;
}
.filter__blur-left{
    position: absolute;
    top: 0;
    bottom: 0;
    left: -3px;
    width: 100px;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity .2s ease-in-out;
    pointer-events: none;
}
.visible{
    opacity: 1;
}

@media screen and (max-width: 1275px) {
    .arrow-right{
        right: 20px;
    }
}

@media screen and (max-width: 1024px) {
    .filter__arrow{
        width: 60px;
        height: 60px;
    }
    .filter__arrow svg{
        height: 24px;
    }
    .arrow-left svg{
        transform: translateX(-2px);
    }
    .arrow-right svg{
        transform: translateX(3px);
    }
}
@media screen and (max-width: 768px) {
    .filter{
        margin-top: 60px;
    }
    .filter__film-type{
        font-size: 16px;
    }
    .filter__img{
        margin-bottom: 12px;
    }
    .filter__title{
        margin-bottom: 25px;
    }
    .filter__film-info{
        display: none;
    }
}
@media screen and (max-width: 600px) {
    .filter{
        margin-top: 40px;
    }
    .filter__arrow{
        width: 40px;
        height: 40px;
    }
    .filter__arrow svg{
        height: 18px;
    }
    .arrow-right svg{
        transform: translateX(2px);
    }
    .filter__blur-left{
        display: none;
    }
    .filter-container{
        padding-right: 0;
    }
    .filter__film-type{
        font-size: 14px;
    }
    .filter__img{
        margin-bottom: 10px;
    }
    .filter__title{
        margin-bottom: 22px;
    }
}

@media screen and (max-width: 425px) {
    .filter{
        margin-top: 29px;
    }
    .filter__arrow{
        display: none;
    }
    .filter__blur-right{
        display: none;
    }
    .filter__film-name{
        font-size: 11px;
    }
    .filter__film-type{
        font-size: 9px;
    }
    .filter__img{
        margin-bottom: 8px;
        overflow: hidden;
    }
    .filter__title{
        margin-bottom: 12px;
    }
}

.filter__item .filter__img{
  transform: scale(0.97) translateX(-4px);
  transform-origin: 50% 100%;
  transition: transform 0.2s ease-in-out;
}

.filter__item:hover .filter__img{
  transform: scale(1.0) translateX(-4px);
}

</style>