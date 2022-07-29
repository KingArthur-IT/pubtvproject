<template>
    <svg class="icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L2 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    width: 19px;
    height: 19px;
    cursor: pointer;
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.icon:hover path{
    stroke: var(--primary-hover-color);
}
</style>