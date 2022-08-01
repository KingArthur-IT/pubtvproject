<template>
    <div class="filter">
        <h2 class="container title filter__title">Фильтры</h2>
        <div class="filter__wrapper">
            <div class="container filter__hero">
                <CustomDropdown     :id="'genres-dropdown'"
                                    class="filter__item" 
                                    :list="genres" 
                                    :notselectedValue="'Все жанры'" 
                                    :openedDropdownId="openedDropdownId"
                                    @openDropdown="(e) => {openedDropdownId = e}"
                />
                <CustomDropdown     :id="'years-dropdowm'"
                                    class="filter__item" 
                                    :list="years" 
                                    :notselectedValue="'Все годы'" 
                                    :openedDropdownId="openedDropdownId"
                                    @openDropdown="(e) => {openedDropdownId = e}"
                />
                <CustomDropdown     :id="'countries-dropdown'"
                                    class="filter__item" 
                                    :list="countries" 
                                    :notselectedValue="'Все страны'" 
                                    :openedDropdownId="openedDropdownId"
                                    @openDropdown="(e) => {openedDropdownId = e}"
                />
                <CustomDropdown     :id="'level-dropdown'"
                                    class="filter__item" 
                                    :list="engLevel" 
                                    :notselectedValue="'Уровень Английского'" 
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
    data(){
        return{
            openedDropdownId: '',
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
    transition: all var(--transition-time) ease-in-out;
}
.filter__item{
    flex-basis: 25%;
}
</style>