<template>
  <footer class="footer">
      <div class="container">
            Авторизуясь, ты соглашаешься с условиями <br>
            <a href="#" class="link footer__link">Пользовательского соглашения</a> и <a href="#" class="link footer__link">Политики конфиденциальности</a>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    background: var(--main-bg-color);
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 15px;
}
.footer__link{
    text-decoration: underline;
}
</style>