<template>
    <svg class="icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 28C21.9558 28 28 21.9558 28 14.5C28 7.04416 21.9558 1 14.5 1C7.04416 1 1 7.04416 1 14.5C1 21.9558 7.04416 28 14.5 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.5 19C17.6066 19 20.125 16.4816 20.125 13.375C20.125 10.2684 17.6066 7.75 14.5 7.75C11.3934 7.75 8.875 10.2684 8.875 13.375C8.875 16.4816 11.3934 19 14.5 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.47266 24.5406C6.31909 22.8733 7.61066 21.4731 9.2042 20.495C10.7977 19.5168 12.631 18.9991 14.5008 18.9991C16.3706 18.9991 18.2038 19.5168 19.7974 20.495C21.3909 21.4731 22.6825 22.8733 23.5289 24.5406" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    width: 27px;
    height: 27px;
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.icon:hover path{
    stroke: var(--primary-hover-color);
}
</style>