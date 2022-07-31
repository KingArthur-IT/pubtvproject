<template>
  <div class="logo">
      <p class="logo__title">
          <span class="logo__title-pub">Pub</span>
          <span class="logo__title-tv">TV</span>
        </p>
      <p class="logo__description">Учи английский по фильмам!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #fff;
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
    margin-left: -3px;
}
.logo__description{
    margin: 0;   
    font-size: 10px;
    font-weight: 500;
}
.logo__title-pub{
    letter-spacing: 1px;
}
.logo__title-tv{
    letter-spacing: 0px;
}

@media screen and (max-width: 768px) {
    .logo__title{
        font-size: 42px;
    }
    .logo__description{
        font-size: 9px;
    }
}
@media screen and (max-width: 600px) {
    .logo__title{
        font-size: 36px;
    }
    .logo__description{
        font-size: 8px;
    }
}
@media screen and (max-width: 425px) {
    .logo__title{
        font-size: 32px;
    }
    .logo__description{
        font-size: 7px;
    }
}
</style>