<template>
    <div class="filter">
        <h2 class="container title filter__title">Все фильтры</h2>
        <div class="filter__wrapper">
            <div class="container filter__hero">
                <Carousel :items-to-show="4" :wrap-around="true" :snapAlign="'start'" :breakpoints='breakpoints'>
                    <Slide v-for="filter in filtersData" :key="filter.id">
                        <CustomDropdown     :id="filter.id"
                                            class="filter__item" 
                                            :list="filter.data" 
                                            :notselectedValue="filter.notselectedValue" 
                                            :openedDropdownId="openedDropdownId"
                                            @openDropdown="(e) => {openedDropdownId = e}"
                        />
                    </Slide>
                </Carousel>
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
            ],
            breakpoints: {
                320: {
                    itemsToShow: 4,
                },
                // 600: {
                //     itemsToShow: 4,
                // },
            },
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
    z-index: 10;
    position: relative;
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
    min-width: 220px;
}

@media screen and (max-width: 550px) {
    .filter__item:last-child{
        min-width: 200px;
    }
}

@media screen and (max-width: 425px) {
    .filter__item:last-child{
        min-width: 178px;
    }
}

/* @media screen and (max-width: 375px) {
    .filter__item{
        width: 40vw;
    }
} */

@media screen and (max-width: 425px) {
    .filter__wrapper{
        padding: 15px 0 14px;
    }
}

</style>