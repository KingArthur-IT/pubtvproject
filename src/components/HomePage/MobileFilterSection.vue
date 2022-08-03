<template>
    <div class="filter">
        <h2 class="container title filter__title">Все фильтры</h2>
        <div class="filter__wrapper">
            <Carousel :items-to-show="3.5" :snapAlign="'start'" :wrap-around="true">
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
.carousel__viewport {
    overflow: inherit !important;
}

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
    transition: all var(--transition-time) ease-in-out;
}
.filter__item{
    flex-basis: auto;
    min-width: 225px;
    margin-left: 72px;
}

@media screen and (max-width: 425px) {
    .filter__wrapper{
        padding: 15px 0 14px;
    }
}

</style>