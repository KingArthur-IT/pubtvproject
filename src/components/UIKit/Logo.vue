<template>
  <div class="logo">
      <p class="logo__title">Pub TV</p>
      <p class="logo__description">Учи английский по фильмам!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: #fff;
    height: 63px;
    min-width: 170px;
    cursor: pointer;
    transition: color .2s ease-in-out;
}
.logo:hover{
    color: var(--primary-hover-color);
}
.logo__title{
    margin: 0;
    font-size: 46px;
    line-height: 100%;
}
.logo__description{
    margin: 0;   
    font-size: 11px;
}
</style>