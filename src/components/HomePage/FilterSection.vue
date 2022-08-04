<template>
    <div class="filter">
        <h2 class="container title filter__title">{{title}}</h2>
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
import CustomDropdown from '@/components/UIKit/CustomDropdown.vue';
export default {
    components:{
        CustomDropdown
    },
    props:{
        title:{
            type: String,
            default: 'Фильтры'
        }
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
}
.filter__hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all var(--transition-time) ease-in-out;
}
.filter__item{
    flex-basis: 25%;
}

@media screen and (max-width: 1240px) {
    .filter__item{
        flex-basis: auto;
    }
}

@media screen and (max-width: 950px) {
    .filter__item{
        font-size: 22px;
    }
}
@media screen and (max-width: 860px) {
    .filter__item{
        font-size: 20px;
    }
}
</style>