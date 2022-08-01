<template> 
  <component :is="layout">
  </component>
  <FooterMobileMenu />
</template>

<script>
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/authorized.vue'
import FooterMobileMenu from '@/components/FooterMobileMenu.vue';

export default {
 components:{
    DefaultLayout, 
    AuthLayout,
    FooterMobileMenu
 },
  computed: {
    layout () {
      return this.$route.meta.auth ? 'AuthLayout' : 'DefaultLayout'
    }
  },
} 

</script>

<style>

</style>
