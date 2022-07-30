<template>
    <div class="icon">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4583 30H2.284C1.94346 30 1.61688 29.8647 1.37608 29.6239C1.13529 29.3831 1.00001 29.0565 1.00001 28.716V21.5417C0.999423 21.375 1.03173 21.2098 1.09507 21.0555C1.15841 20.9013 1.25155 20.7611 1.36915 20.6429L20.629 1.38305C20.7485 1.26173 20.8909 1.16539 21.048 1.09963C21.205 1.03387 21.3736 1 21.5439 1C21.7141 1 21.8827 1.03387 22.0398 1.09963C22.1968 1.16539 22.3392 1.26173 22.4587 1.38305L29.6169 8.5413C29.7383 8.66077 29.8346 8.80318 29.9004 8.96024C29.9661 9.1173 30 9.28587 30 9.45614C30 9.62641 29.9661 9.79498 29.9004 9.95204C29.8346 10.1091 29.7383 10.2515 29.6169 10.371L10.3571 29.6308C10.2389 29.7484 10.0987 29.8416 9.94446 29.9049C9.79023 29.9683 9.62502 30.0006 9.4583 30V30Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 7L24 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    background: #3E3E3E;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.icon:hover path{
    stroke: var(--primary-hover-color)
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
</style>