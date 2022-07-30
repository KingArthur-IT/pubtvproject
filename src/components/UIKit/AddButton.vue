<template>
    <button class="add-btn">
        <svg v-if="isAdding" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 13H24" stroke="#7E4EFA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 2V24" stroke="#7E4EFA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 2L8.32614 14L2 8" stroke="#7E4EFA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>

<script>
export default {
    props:{
        isAdding: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.add-btn{
    border: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    background: #fff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background var(--transition-time) ease-in-out;
}
.add-btn:hover{
    background: #CACACA;
}
</style>