<template>
    <div>
        <input ref="input" type="file" @change="addFile" class="d-none">
        <div class="input-wrapper">
            <input type="text" class="input modal__input" :placeholder="placeholder" readonly>
            <div @click="openModalDialog" class="modal__input-btn">
                <slot></slot>
            </div>
        </div>
        <p v-if="file" class="text file-name">{{file.name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type: String,
            default: ''
        }
    },
    data(){
        return{
            file: null
        }
    },
    methods:{
        openModalDialog(){
            this.$refs.input.click();
        },
        addFile(){
            this.file = event.target.files[0];
            console.log(this.file.name)
        }
    }
}
</script>

<style scoped>
    .d-none{
        display: none;
    }
    .input-wrapper{
        border-radius: 22px;
        overflow: hidden;
        position: relative;
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
        transition: background var(--transition-time) ease-in-out;
    }
    .modal__input-btn:hover{
        background: var(--primary-hover-color);;
    }
    .file-name{
        font-size: 16px;
        padding-top: 5px;
        padding-left: 10px;
    }

@media screen and (max-width: 425px) {
    .modal__input-btn{
        width: 100%;
    }
}
</style>