<template>
  <section class="section about">
      <div class="container">
          <div class="about__hero">
            <div class="about__content">
                <h2 class="title about__title">О нас</h2>
                <p class="text">
                    <b>Pub TV</b> был создан для тех, кто хочет повысить свой уровень английского и в тот же момент не умереть со скуки, а наоборот получить от этого удовольствие. Здесь будут публиковаться фильмы, сериалы и мультфильмы на английском языке с двойными субтитрами(русскими и английскими), а также присутствует возможность добавления важных слов или фраз из просмотренного вами кино в личный кабинет с возможностью дальнейшего их запоминания.
                </p>
            </div>
            <div class="about__img">
                <img src="@/assets/img/about-us.png" alt="about-us">
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.about{
    background: #272727;
    padding-top: 65px;
    padding-bottom: 150px;
}
.about__hero{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.about__content{
    flex-basis: 50%;
    margin-right: 65px;
}
.about__title{
    margin-bottom: 21px;
}
.about__img{
    flex-basis: 45%;
    filter: drop-shadow(0px 13px 25px rgba(0, 0, 0, 0.16));
}
.about__img img{
    width: 100%;
    border-radius: 17px;
}
</style>