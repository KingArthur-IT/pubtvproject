<template>
  <section class="section about">
      <div class="container">
          <h2 class="title about__title">О нас</h2>
          <div class="about__hero">
            <div class="about__content">
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
    align-items: center;
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
    border-radius: 17px;
    overflow: hidden;
}
.about__img img{
    width: 100%;
    transform: scale(1);
    transition: transform .3s ease-in-out;
}
.about__img:hover img{
    transform: scale(1.1);
}

@media screen and (max-width: 1024px) {
    .about__hero{
        flex-direction: column;
    }
    .about__content{
        margin-right: 0px;
        margin-bottom: 30px;
    }
    .about__img{
        width: 80%;
        flex-basis: 100%;
    }
}

@media screen and (max-width: 769px) {
    .about{
        padding-top: 60px;
        padding-bottom: 80px;
    }
    .about__img{
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
    .about{
        padding-top: 40px;
        padding-bottom: 60px;
    }
}

@media screen and (max-width: 425px) {
    .about{
        padding-top: 24px;
        padding-bottom: 36px;
    }
    .about__content{
        margin-bottom: 14px;
    }
    .about__title{
        margin-bottom: 15px;
    }
}
</style>