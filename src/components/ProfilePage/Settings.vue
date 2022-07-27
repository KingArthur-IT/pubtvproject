<template>
  <div class="settings">
      <h2 class="section-title settings__title">Учётная Запись</h2>
      <CustomButton class="settings__btn" :paddingY="12"><span class="settings__btn-text">Изменить пароль</span></CustomButton>
      <h2 class="section-title settings__title">Админ Панель</h2>
      <CustomButton class="settings__btn" :paddingY="12"><span class="settings__btn-text">Добавить кино</span></CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue';

export default {
    components:{
        CustomButton
    },
}
</script>

<style scoped>
.settings{
    margin: auto;
    max-width: 380px;
    padding: 87px 0;
}
.settings__title{
    margin-bottom: 33px;
    text-align: center;
}
.settings__btn{
    margin-bottom: 83px;
    width: 100%;
}
.settings__btn-text{
    font-size: 20px;
}
</style>