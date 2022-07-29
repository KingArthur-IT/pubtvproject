<template>
    <div class="modal" :class="{'show': isDisplay, 'visible': isVisible}">
        <div class="modal__header">
            <div class="container">
                <div class="modal__header-hero">
                    <h2 class="modal__title">{{title}}</h2>
                    <CloseIcon class="modal__close" @click="closeModal"/>
                </div>
            </div>
        </div>
        <div class="modal__line-wrap">
            <div class="modal__line" :style="`width: ${lineWidth}%`"></div>
        </div>
        <div class="container modal__hero">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon.vue'

export default {
    components:{
        CloseIcon
    },
    props:{
        title:{
            type: String,
            required: true
        },
        isShown:{
            type: Boolean,
            default: false
        },
        lineWidth: {
            type: Number,
            default: 35
        }
    },
    data(){
        return{
            isVisible: false,
            isDisplay: false
        }
    },
    mounted(){
        this.isDisplay = this.isShown;
    },
    watch:{
        isShown: function(){
            if (this.isShown){
                this.isDisplay = this.isShown;
                setTimeout(() => {
                    this.isVisible = this.isShown;
                }, 100);
            }
            else {
                this.isVisible = this.isShown;
                setTimeout(() => {
                    this.isDisplay = this.isShown;
                }, 100);
            }
        }
    },
    methods:{
        closeModal(){
            this.isVisible = false;
            setTimeout(() => {
                this.$emit('closeModal');
            }, 200);
        }
    }
}
</script>

<style scoped>
.modal{
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000e8;
    transition: opacity .2s ease-in-out;
    display: none;
    opacity: 0;
    overflow-y: auto;
}
.visible{
    opacity: 1;
}
.show{
    display: block;
}
.modal__header{
    width: 100%;
    min-height: 115px;
    background: var(--main-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal__header-hero{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1180px;
}
.modal__title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 116%;
    color: #FFFFFF;
    text-align: center;
}
.modal__close{
    position: absolute;
    top: 7px;
    right: 0;
}
.modal__line-wrap{
    position: relative;
    height: 6px;
    width: 100%;
    background: rgba(255, 255, 255, 0.21);
}
.modal__line{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #7E4EFA;
    border-radius: 0px 5px 5px 0px;
    transition: width .2s linear;
}
.modal__hero{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    max-width: 640px;
}
</style>