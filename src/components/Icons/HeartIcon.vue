<template>
    <div class="icon">
        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3491 25.4958L28.732 14.0357C31.5285 11.206 31.936 6.57948 29.2941 3.62248C28.6315 2.8773 27.825 2.27595 26.9238 1.85519C26.0226 1.43442 25.0456 1.20306 24.0526 1.17525C23.0596 1.14745 22.0714 1.32377 21.1483 1.69345C20.2253 2.06314 19.3868 2.61842 18.6841 3.32536L16.5481 5.49006L14.7072 3.62248C11.8966 0.806958 7.30127 0.396656 4.36421 3.05654C3.62405 3.72362 3.02677 4.53562 2.60884 5.44294C2.1909 6.35026 1.96111 7.33385 1.93349 8.3336C1.90587 9.33336 2.081 10.3283 2.44819 11.2576C2.81538 12.1869 3.36692 13.0311 4.0691 13.7385L15.7471 25.4958C15.9602 25.7083 16.2481 25.8276 16.5481 25.8276C16.8481 25.8276 17.136 25.7083 17.3491 25.4958V25.4958Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    stroke: var(--primary-hover-color);
    fill: var(--primary-hover-color);
}
.icon path{
    transition: stroke var(--transition-time) ease-in-out;
}
</style>