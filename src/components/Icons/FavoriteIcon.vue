<template>
    <svg class="icon" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 27L12 21.5652L2 27V3.08696C2 2.79868 2.1317 2.52221 2.36612 2.31836C2.60054 2.11452 2.91848 2 3.25 2H20.75C21.0815 2 21.3995 2.11452 21.6339 2.31836C21.8683 2.52221 22 2.79868 22 3.08696V27Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    width: 20px;
    height: 25px;
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.icon:hover path{
    stroke: var(--primary-hover-color);
}
</style>