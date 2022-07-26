<template>
    <button class="button" 
            :class="{'outlined': isOutlined}"
            :style="`padding-top: ${paddingY}px; padding-bottom: ${paddingY}px;`"
    >
        {{text}}
    </button>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true
        },
        paddingY: {
            type: Number,
            default: 8
        },
        isOutlined: {
            type: Boolean,
            default: false
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
    padding-left: 38px;
    padding-right: 38px;
    border-radius: 17px;
    transition: background .2s ease-in-out;
}
.button.outlined{
    border: 1px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    transition: color .2s ease-in-out, border .2s ease-in-out;
}
.button:hover{
    background: var(--primary-hover-color);
}
.button.outlined:hover{
    border: 1px solid var(--primary-hover-color);
    color: var(--primary-hover-color);
    background: transparent;
}
.button:active{
    background: var(--primary-color);
}
</style>