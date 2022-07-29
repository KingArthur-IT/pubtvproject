<template>
    <div class="logout">
        <svg class="logout__icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6602 4.65909L15.0011 8L11.6602 11.3409" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.08984 8H14.9989" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.09091 15H1.63636C1.46759 15 1.30573 14.933 1.18639 14.8136C1.06705 14.6943 1 14.5324 1 14.3636V1.63636C1 1.46759 1.06705 1.30573 1.18639 1.18639C1.30573 1.06705 1.46759 1 1.63636 1H6.09091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="logout__text">Выйти</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logout{
    display: flex;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
}
.logout__icon{
    width: 14px;
    height: 14px;
    margin-right: 11px;
}
.logout__icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
.logout__text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 135%;
    color: #FFFFFF;
    transition: color var(--transition-time) ease-in-out;
}
.logout:hover path{
    stroke: var(--primary-hover-color);
}
.logout:hover .logout__text{
    color: var(--primary-hover-color);
}
</style>