<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderDefault />
  <RouterView />
  <Footer />
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeaderDefault, Footer
  },
}
</script>

<style>

</style>
