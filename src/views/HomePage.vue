<template>
  <HeaderDefault />
  <main>
      <MainSlider />
      <FilterSection />
      <FilmSlider :title="'Сложный Английский'"  :refer="'hard-carousel'" :slidesCount="5" :sliderDataFolder="'hard'"/>
      <AboutUsSection />
  </main>
  <FooterDefault />
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue';
import FooterDefault from '@/components/FooterDefault.vue';
import AboutUsSection from '@/components/HomePage/AboutUsSection.vue'
import MainSlider from '@/components/HomePage/MainSlider.vue'
import FilterSection from '@/components/HomePage/FilterSection.vue'
import FilmSlider from '@/components/HomePage/FilmSlider.vue'

export default {
  components:{
    HeaderDefault, FooterDefault,
    AboutUsSection, MainSlider,
    FilterSection,
    FilmSlider
  }
}
</script>

<style scoped>

</style>