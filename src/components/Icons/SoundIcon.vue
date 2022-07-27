<template>
    <svg class="icon" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.2168 9.93867C29.0797 10.7996 29.7644 11.8223 30.2315 12.9482C30.6986 14.0741 30.9391 15.2811 30.9391 16.5C30.9391 17.719 30.6986 18.9259 30.2315 20.0518C29.7644 21.1777 29.0797 22.2004 28.2168 23.0613" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3125 21.6562H4.125C3.8515 21.6562 3.58919 21.5476 3.3958 21.3542C3.2024 21.1608 3.09375 20.8985 3.09375 20.625V12.375C3.09375 12.1015 3.2024 11.8392 3.3958 11.6458C3.58919 11.4524 3.8515 11.3438 4.125 11.3438H10.3125L19.5938 4.125V28.875L10.3125 21.6562Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3125 11.3438V21.6562" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.5703 13.5867C24.9538 13.9688 25.2581 14.4228 25.4658 14.9227C25.6734 15.4226 25.7803 15.9587 25.7803 16.5C25.7803 17.0413 25.6734 17.5773 25.4658 18.0773C25.2581 18.5772 24.9538 19.0312 24.5703 19.4133" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    width: 33px;
    height: 33px;
    cursor: pointer;
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.icon:hover path{
    stroke: var(--primary-hover-color);
}
</style>