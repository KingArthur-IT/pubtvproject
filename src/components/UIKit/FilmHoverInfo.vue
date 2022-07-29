<template>
  <div class="film-info" :class="{'visible': isVisible}">
      <FavoriteIcon :isSelected="isFavourite" @click="$emit('toggleFavourite')" class="film-info__fav-icon" />
      <div class="film-info__hero">
            <span class="film-info-text">{{mark}}</span>
            <div class="film-info__hero-list">
                <div v-for="(markItem, i) in markList" :key="i" class="film-info__rating-item-wrap">
                    <div class="film-info__rating-item" :style="`width: ${getWidth(markItem)}%`"></div>
                </div>
            </div>
      </div>
      <p class="film-info-text film-info__progress-label">Оценка фильма</p>
      <div class="film-info__rating-wrap">
          <div class="film-info__rating" :style="`width: ${getWidth(mark)}%`"></div>
      </div>
      <p class="film-info-text film-info__about">{{filmInfo}}</p>
      <p class="film-info-text film-info__seasons">{{seasons}}</p>
  </div>
</template>

<script>
import FavoriteIcon from '@/components/Icons/FavoriteIcon.vue'
export default {
    components:{
        FavoriteIcon
    },
    props:{
        markList:{
            type: Array,
        },
        mark:{
            type: Number,
            default: 0
        },
        filmInfo: {
            type: String,
            default: ''
        },
        seasons: {
            type: String,
            default: ''
        },
        isVisible:{
            type: Boolean,
            default: false
        },
        isFavourite:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        getWidth(mark){
            return Math.round(mark * 10);
        }
    }
}
</script>

<style scoped>
.film-info{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background: rgba(0, 0, 0, 0.7);
    padding: 28px 20px;
    opacity: 0;
    transition: opacity var(--transition-time) ease-in-out;
    border-radius: 18px;
}
.visible{
    opacity: 1;
}
.film-info__fav-icon{
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: 8px;
    margin-bottom: 14px;
}
.film-info__hero{
    margin-bottom: 23px;
    display: flex;
    align-items: center;
}
.film-info__hero span{
    margin-right: 15px;
}
.film-info-text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-align: left;
}
.film-info__hero span{
    display: block;
    font-size: 55px;
    line-height: 100%;
}
.film-info__progress-label{
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 5px;
}
.film-info__about{
    font-size: 15px;
    line-height: 133%;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 54px;
}
.film-info__seasons{
    font-size: 24px;
    line-height: 137%;
}
.film-info__rating-wrap{
    position: relative;
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 7px;
    margin-bottom: 22px;
}
.film-info__rating{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 6px;
    background: #7E4EFA;
    border-radius: 7px;
}
.film-info__rating-item-wrap{
    position: relative;
    width: 72px;
    height: 4px;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 2px;
    margin-bottom: 6px;
}
.film-info__rating-item{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 4px;
    background: #7E4EFA;
    border-radius: 2px;
}
</style>