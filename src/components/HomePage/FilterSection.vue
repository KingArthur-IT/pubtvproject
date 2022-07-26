<template>
    <div class="filter">
        <h2 class="container title filter__title">Фильтры</h2>
        <div class="filter__wrapper">
            <div class="container filter__hero">
                <CustomDropdown :list="genres" :notselectedValue="'Все жанры'" />
                <CustomDropdown :list="years" :notselectedValue="'Все годы'" />
                <CustomDropdown :list="countries" :notselectedValue="'Все страны'" />
                <CustomDropdown :list="engLevel" :notselectedValue="'Уровень Английского'" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomDropdown from '@/components/UIKit/CustomDropdown.vue';
export default {
    components:{
        CustomDropdown
    },
    data(){
        return{
            genres: ['Фантастика', 'Комедия', 'Ужасы'],
            years: ['2022', '2021', '2020', '2019'],
            countries: ['США', 'Англия'],
            engLevel: ['Высокий', 'Средний', 'Низкий']
        }
    }
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
</style>