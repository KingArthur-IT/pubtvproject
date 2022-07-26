<template>
  <div class="main-carousel">
    <div class="main-carousel__hero">
        <div v-for="i in 3" :key="i" class="main-carousel__item">
            <img :src="getImageUrl(i)" alt="img">
        </div>
    </div>
  </div>
</template>

<script>

export default {
    methods:{
        getImageUrl(imgName){
            return new URL(`../../assets/img/main-slider/${imgName}.png`, import.meta.url).href
        }
    }
}
</script>

<style scoped>
.main-carousel{
    width: 100%;
    background: transparent;
    overflow-x: hidden;
}
.main-carousel__hero{
    width: fit-content;
    display: flex;
    transform: translateX(-25%);
}
.main-carousel__item{
    margin-right: 50px;
}
.main-carousel__item img{
    height: 550px;
    width: 1000px;
}
</style>