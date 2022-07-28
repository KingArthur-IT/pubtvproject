<template>
  <div class="flash">
      <InformationIcon class="flash__info-icon" />
      <CustomButton class="flash__btn" :paddingY="12"><span class="flash__btn-text">Добавить слово</span></CustomButton>
      <div class="flash__wrap">
          <div v-for="item in 10" :key="item" class="flash__item">
            <FlashCard />
        </div>
      </div>
  </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';
import FlashCard from '@/components/UIKit/FlashCard.vue';
import InformationIcon from '@/components/Icons/InformationIcon.vue';

export default {
    components:{
        CustomButton, FlashCard, InformationIcon
    },
}
</script>

<style scoped>
.flash{
    padding: 43px 0 85px;
    position: relative;
}
.flash__info-icon{
    position: absolute;
    right: 17px;
    top: 26px;
    cursor: pointer;
}
.flash__btn{
    margin: auto;
    margin-bottom: 76px;
    width: 380px;
}
.flash__btn-text{
    font-size: 23px;
}
.flash__wrap{
    display: flex;
    flex-wrap: wrap;
}
.flash__item{
    flex-basis: 31%;
    margin: 0 10px 28px 10px;
    /* margin-bottom: 28px; */
}
</style>