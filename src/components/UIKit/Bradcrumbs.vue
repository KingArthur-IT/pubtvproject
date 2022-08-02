<template>
    <div class="bradcrumbs">
        <div class="bradcrumb__item">
            <router-link to="/" class="bradcrumbs__link">Главная</router-link>
        </div>
        <div class="bradcrumb__item">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="bradcrumb__item">
            Сериалы
        </div>
        <div class="bradcrumb__item">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="bradcrumb__item">
            Драма
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bradcrumbs{
    display: flex;
    align-items: center;
    margin-bottom: 21px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 135%;
    color: #FFFFFF;
}
.bradcrumb__item{
    margin-right: 14px;
}
.bradcrumbs__link{
    color: #fff;
    transition: color var(--transition-time) ease-in-out;
}
.bradcrumbs__link:hover{
    color: var(--primary-hover-color);
}

@media screen and (max-width: 600px){
    .bradcrumbs{
        margin-bottom: 14px;
    }
}
</style>