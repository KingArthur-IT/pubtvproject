<template>
    <svg class="icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.459 12.4583H13.5007V19.75H14.5423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.2402 9.33333C14.1032 9.33333 14.8027 8.63378 14.8027 7.77083C14.8027 6.90789 14.1032 6.20833 13.2402 6.20833C12.3773 6.20833 11.6777 6.90789 11.6777 7.77083C11.6777 8.63378 12.3773 9.33333 13.2402 9.33333Z" fill="white"/>
        </g>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    width: 25px;
    height: 25px;
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.icon:hover path{
    stroke: var(--primary-hover-color);
}
</style>