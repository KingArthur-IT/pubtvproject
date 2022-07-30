<template>
    <div class="skeleton">
        <div class="skeleton__img skeleton__item"></div>
        <div class="text skeleton__film-name skeleton__item"></div>
        <div class="text skeleton__film-type skeleton__item"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.skeleton{
    width: 258px;
    position: relative;
}
.skeleton__item{
    position: relative;
    overflow: hidden;
}
.skeleton__item:after{
    content: '';
    position: absolute;
    background: #fff;
    opacity: 0.1;
    width: 100px;
    height: 100%;
    top: 0;
    bottom: 0;
    filter: blur(30px);
    left: -200px;
    animation: 2s linear 1s infinite sleketonAnimation;
}
.skeleton__film-name{
    width: 100%;
    height: 23px;
    background: #343434;
    border-radius: 5px;
    margin-bottom: 10px;
}
.skeleton__film-type{
    width: 44%;
    height: 20px;
    background: #343434;
    border-radius: 5px;
}
.skeleton__img{
    margin-bottom: 16px;
    width: 100%;
    height: 328px;
    background: #343434;
    border-radius: 22px;
}

@keyframes sleketonAnimation {
    0%{
        left: -200px
    }
    100%{
        left: 500px
    }
}
</style>