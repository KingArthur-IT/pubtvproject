<template>
  <HeaderDefault />
  <main>
      <MainSlider />
      <AboutUsSection />
  </main>
  <FooterDefault />
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue';
import FooterDefault from '@/components/FooterDefault.vue';
import AboutUsSection from '@/components/HomePage/AboutUsSection.vue'
import MainSlider from '@/components/HomePage/MainSlider.vue'

export default {
  components:{
    HeaderDefault, FooterDefault,
    AboutUsSection, MainSlider
  }
}
</script>

<style>

</style>