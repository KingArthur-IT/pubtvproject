<template>
    <div class="modal" :class="{'show': isDisplay, 'visible': isVisible}">
        <div class="modal__header" :class="{'long': isLongModal}">
            <div class="container modal__header-hero" :class="{'long': isLongModal}">
                <Logo class="modal__logo" :class="{'long': isLongModal}"/>
                <h2 class="modal__title">{{title}}</h2>
                <CloseIcon class="modal__close" @click="closeModal"/>
            </div>
        </div>
        <div class="modal__line-wrap">
            <div class="modal__line" :style="`width: ${lineWidth}%`"></div>
        </div>
        <div class="container modal__hero" :class="{'long': isLongModal}">
            <div class="mob-title-wrap" :class="{'long': isLongModal}">
                <h2 class="modal__title mob-title">{{title}}</h2>
                <MobileInfoIcon @click="$emit('showModalInfoPopup')" v-if="isShowInfoIconOnModal" class="mob-title-icon"/>
            </div>
            <p v-if="description !== ''" class="modal__description">{{description}}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon.vue'
import Logo from '@/components/UIKit/Logo.vue';
import MobileInfoIcon from '@/components/Icons/MobileInfoIcon.vue';

export default {
    components:{
        CloseIcon,
        Logo,
        MobileInfoIcon
    },
    props:{
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            default: ''
        },
        isShown:{
            type: Boolean,
            default: false
        },
        lineWidth: {
            type: Number,
            default: 35
        },
        isLongModal:{
            type: Boolean,
            default: false
        },
        isShowInfoIconOnModal:{
            type: Boolean,
            default: false
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
    width: 100%;
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
.modal__mob-title-wrap{
    display: flex;
    align-items: center;
}
.mob-title{
    display: none;
}
.modal__description{
    display: none;
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
.modal__logo{
    display: none;
}
.mob-title-wrap{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mob-title-icon{
    margin-left: 18px;
}

@media screen and (max-width: 1330px) {
    .modal__close{
        right: 30px;
    }
}

@media screen and (max-width: 768px) {
    .modal__header{
        background: transparent;
    }
    .modal__title{
        display: none;
    }
    .modal__line-wrap{
        display: none;
    }
    .modal__logo{
        display: block;
    }
    .modal__close{
        position: relative;
        right: 0;
        transform: scale(1.2);
        margin-top: 5px;
    }
    .modal__header-hero{
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 25px;
    }
    .mob-title{
        display: block;
        margin-bottom: 7px;
    }
    .mob-title-icon{
        margin-bottom: 7px;
    }
    .modal__description{
        display: block;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 27px;
    }
    .modal__hero{
        margin-top: 100px;
        flex-direction: column;
        align-items: flex-start;
    }
    .long.modal__hero{
        margin-top: 0px;
    }
    .long.mob-title-wrap{
        margin: auto;
        margin-bottom: 32px;
    }
    .long.modal__logo{
        display: none;
    }
    .long.modal__header{
        min-height: 26px;
        margin-bottom: 26px;
    }
    .long.modal__header-hero{
        justify-content: flex-end;
    }
}

@media screen and (max-width: 425px) {
    .modal__description{
        font-size: 14px;
        margin-bottom: 22px;
    }
    .modal__title{
        font-size: 27px;
    }
}

@media screen and (max-width: 340px) {
    .modal__title{
        text-align: left;
    }
}
</style>