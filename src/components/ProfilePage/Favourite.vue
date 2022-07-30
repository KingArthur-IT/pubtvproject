<template>
  <div v-if="favouritesMountedList && favouritesMountedList.length" class="favourites">
    <div v-for="item in favouritesMountedList" :key="item.id" class="favourites__item" @mouseenter="hoverId = item.id" @mouseleave="hoverId = -1">
        <div class="favourites__img">
            <img :src="getImageUrl(item.imgName)" alt="img">
            <FilmHoverInfo  @toggleFavourite="item.isFavourite = !item.isFavourite" 
                            :isVisible="hoverId === item.id" 
                            :markList="item.markList" 
                            :mark="item.mark" 
                            :filmInfo="item.filmInfo" 
                            :seasons="item.seasons" 
                            :isFavourite="item.isFavourite"
            />
        </div>
        <p class="text favourites__film-name">{{item.filmName}}</p>
        <p class="text favourites__film-type">{{item.filmType}}</p>
    </div>
  </div>
  <div v-else class="favourites">
      <FilmSkeleton v-for="item in 10" :key="item" class="favourites__item" />
  </div>
  
</template>

<script>
import { favouritesListData } from '@/data/data.js';
import FilmHoverInfo from '@/components/UIKit/FilmHoverInfo.vue'
import FilmSkeleton from '@/components/UIKit/Skeletons/FilmSkeleton.vue'

export default { 
    components:{
        FilmHoverInfo,
        FilmSkeleton
    },
    data(){
        return{
            hoverId: -1,
            favouritesListData,
            favouritesMountedList: [],
        }
    },
    mounted(){
        setTimeout(() => {
            this.favouritesMountedList = this.favouritesListData?.items;
        }, 3000);
    },
    methods:{
        getImageUrl(imgName){
            return new URL(`../../assets/img/favourites/${imgName}.png`, import.meta.url).href
        },
    }
}
</script>

<style scoped>
.favourites{
    display: flex;
    flex-wrap: wrap;
    padding: 45px 0 50px;
}
.favourites__item{
    border-radius: 18px;
    margin-bottom: 40px;
    padding: 0 10px;
    flex-basis: 25%;
}
.favourites__film-name{
    font-weight: 700;
    text-align: left;
}
.favourites__film-type{
    text-align: left;
    font-size: 22px;
    opacity: 0.5;
}
.favourites__img{
    margin-bottom: 16px;
    position: relative;
    border-radius: 18px;
    overflow: hidden;
}

.favourites__img img{
    width: 100%;
}
</style>