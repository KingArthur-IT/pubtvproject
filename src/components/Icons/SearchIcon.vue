<template>
    <svg class="icon" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 16L20 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
    .icon{
        cursor: pointer;
        height: 20px;
    }
    .icon path{
        transition: stroke var(--transition-time) ease-in-out;
    }
    .icon:hover path{
        stroke: var(--primary-hover-color);
    }
</style>