<template>
    <div class="area">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.area{
    width: 280px;
    height: 152px;
    background: url('@/assets/add-film.png') no-repeat;
    background-size: 100% 100%;
    transition: background .2s ease-in-out;
    cursor: pointer;
}
.area:hover{
    background: url('@/assets/add-film-hover.png') no-repeat;
    background-size: 100% 100%;
}
</style>