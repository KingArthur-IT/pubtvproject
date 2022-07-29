<template>
    <div class="input-wrapper">
        <input type="text" class="input modal__input" :placeholder="placeholder">
        <div class="modal__input-btn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .input-wrapper{
        border-radius: 22px;
        overflow: hidden;
    }
    .modal__input{
        position: relative;
        width: 100%;
        border-radius: 22px;
    }
    .modal__input-btn{
        content: '';
        position: absolute;
        width: 174px;
        top: 0;
        bottom: 0;
        right: 0;
        background: var(--primary-color);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>