<template>
    <div class="card">
        <SoundIcon class="card__icon" />
        <p class="card__word">Alright</p>
        <div class="card__translate">
            <span>bchjsdvhd</span>
            <div class="card__blur"></div>
        </div>
        <div class="card__btns">
            <CustomButton :isOutlined="true" class="card__btn" :paddingY="13"><span class="card__btn-text">Забыл</span></CustomButton>
            <CustomButton class="card__btn" :paddingY="13"><span class="card__btn-text">Запомнил</span></CustomButton>
        </div>
    </div>
</template>

<script>
import SoundIcon from '@/components/Icons/SoundIcon.vue'
import CustomButton from '@/components/UIKit/CustomButton.vue';

export default {
    components:{
        SoundIcon,
        CustomButton
    },
    props:{

    }
}
</script>

<style scoped>
.card{
    position: relative;
    background: var(--section-bg-color);
    box-shadow: 5px 18px 26px rgba(0, 0, 0, 0.01);
    border-radius: 36px;
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
}
.card__icon{
    align-self: flex-end;
    margin-bottom: 100px;
}
.card__word{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 135%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 9px;
}
.card__translate{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: rgba(255, 255, 255, 0.46);
    margin-bottom: 130px;
    position: relative;
}
.card__blur{
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: 0;
    right: 0;
    backdrop-filter: blur(5px);
    background: rgba(42, 42, 42, 0.12);
    transition: backdrop-filter var(--transition-time) ease-in-out;
}
.card__blur:hover{
    backdrop-filter: blur(0px);
}
.card__btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card__btn-text{
    font-size: 15px;
    line-height: 100%;
}
.card__btn{
    flex-basis: 47%;
}
</style>