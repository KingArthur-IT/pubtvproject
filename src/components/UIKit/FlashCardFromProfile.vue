<template>
    <div class="card">
        <SoundIcon class="card__icon" />
        <div>
            <p class="card__word">{{phrase}}</p>
            <div class="card__translate">
                <span>{{translation}}</span>
                <div class="card__blur"></div>
            </div>
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
        phrase: {
            type: String,
            required: true
        },
        translation: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
.card{
    position: relative;
    min-height: 425px;
    background: var(--section-bg-color);
    box-shadow: 5px 18px 26px rgba(0, 0, 0, 0.01);
    border-radius: 36px;
    padding: 23px 12px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card__icon{
    align-self: flex-end;
    margin-right: 14px;
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

@media screen and (max-width: 768px) {
    .card{
        min-height: 392px;
    }
}

</style>