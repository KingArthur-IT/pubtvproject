<template>
    <div class="filter">
        <h2 class="container title filter__title">Фильтры</h2>
        <div class="filter__wrapper">
            <div class="container filter__hero">
                <div class="text filter__item">
                    <span>Все жанры</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 6L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="text filter__item">
                    <span>Все годы</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 6L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="text filter__item">
                    <span>Все страны</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 6L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="text filter__item">
                    <span>Уровень Английского</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 6L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter__title{
    margin-bottom: 32px;
}
.filter__wrapper{
    background: #272727;
    padding: 35px 0;
}
.filter__hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.filter__item{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.filter__item span{
    margin-right: 15px;
}
</style>