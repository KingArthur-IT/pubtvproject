<template>
    <div class="filter">
        <h2 class="container title filter__title">Все фильтры</h2>
        <div class="filter__wrapper">
            <div class="container filter__hero">
                <CustomDropdown     v-for="filter in filtersData" :key="filter.id"
                                    :id="filter.id"
                                    class="filter__item" 
                                    :list="filter.data" 
                                    :notselectedValue="filter.notselectedValue" 
                                    :openedDropdownId="openedDropdownId"
                                    @openDropdown="(e) => {openedDropdownId = e}"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import CustomDropdown from '@/components/UIKit/CustomDropdown.vue';

export default {
    components:{
        Carousel,
        Slide,
        CustomDropdown
    },
    data(){
        return{
            openedDropdownId: '',
            filtersData: [
                {
                    id: 'genres-dropdown',
                    data: ['Фантастика', 'Комедия', 'Ужасы'],
                    notselectedValue: 'Все жанры',
                },
                {
                    id: 'years-dropdowm',
                    data: ['2022', '2021', '2020', '2019'],
                    notselectedValue: 'Все годы',
                },
                {
                    id: 'countries-dropdown',
                    data: ['США', 'Англия'],
                    notselectedValue: 'Все страны',
                },
                {
                    id: 'level-dropdown',
                    data: ['Высокий', 'Средний', 'Низкий'],
                    notselectedValue: 'Уровень Английского',
                },
            ]
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
    overflow-x: scroll;
}
.filter__hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all var(--transition-time) ease-in-out;
    width: fit-content;
}
.filter__item{
    width: 25vw;
}
.filter__item:last-child{
    min-width: 250px;
}

@media screen and (max-width: 550px) {
    .filter__item{
        width: 28vw;
    }
}

@media screen and (max-width: 475px) {
    .filter__item{
        width: 30vw;
    }
}

@media screen and (max-width: 375px) {
    .filter__item{
        width: 40vw;
    }
}

@media screen and (max-width: 425px) {
    .filter__wrapper{
        padding: 15px 0 14px;
    }
}

</style>