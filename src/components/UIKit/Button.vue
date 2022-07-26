<template>
    <button class="button">
        {{text}}
    </button>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.button{
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
    display: block;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    background: var(--primary-color);
    color: #fff;
    padding: 8px 38px;
    border-radius: 17px;
    transition: background .2s ease-in-out;
}
.button:hover{
    background: var(--primary-hover-color);
}
.button:active{
    background: var(--primary-color);
}
</style>