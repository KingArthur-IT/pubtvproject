<template>
    <section class="section filter">
        <div class="container">
            <h2 class="title filter__title">{{title}}</h2>
            <div class="filter__carousel-wrapper">
                <Carousel :items-to-show="4.3" :ref="refer">
                    <Slide v-for="slide in slidesCount" :key="slide">
                        <div class="filter__item">
                            <img :src="getImageUrl(slide)" alt="img" class="carousel__img">
                        </div>
                    </Slide>
                </Carousel>
                <div class="filter__arrow arrow-right">
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
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
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
        slidesCount: {
            type: Number,
            required: true
        },
        sliderDataFolder: {
            type: String,
            required: true
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
    transform: translate(50%, -50%);
    right: 0;
}
.arrow-right svg{
    transform: translate(4px, 0);
}
</style>