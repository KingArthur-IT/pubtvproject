<template>
    <div @click.stop="closeModal" class="modal" :class="{'show': isDisplay, 'visible': isVisible}">
        <div @click.stop class="container modal__hero">
            <h2 class="modal__title">{{title}}</h2>
            <p class="modal__text">{{text}}</p>
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
        text:{
            type: String,
            required: true
        },
        isShown:{
            type: Boolean,
            default: false
        },
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
                document.querySelector('body').classList.add('overflow-hidden');
                this.isDisplay = this.isShown;
                setTimeout(() => {
                    this.isVisible = this.isShown;
                }, 100);
            }
            else {
                document.querySelector('body').classList.remove('overflow-hidden');
                this.isVisible = this.isShown;
                setTimeout(() => {
                    this.isDisplay = this.isShown;
                }, 100);
            }
        }
    },
    methods:{
        closeModal(){
            document.querySelector('body').classList.remove('overflow-hidden');
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
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000e8;
    transition: opacity .2s ease-in-out;
    display: none;
    opacity: 0;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
}
.visible{
    opacity: 1;
}
.show{
    display: flex;
}
.modal__hero{
    max-width: 980px;
    padding: 56px 46px 43px;
    background: #212121;
}
.modal__title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 39px;
    line-height: 118%;
    color: #FFFFFF;
    margin-bottom: 17px;
}
.modal__text{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 138%;
    color: #FFFFFF;
}
</style>