<template>
    <div class="card">
        <SoundIcon class="card__icon" />
        <div>
            <p class="card__word">{{phrase}}</p>
            <div class="card__translate">{{translation}}</div>
        </div>
        <div class="card__btns">
            <AddButton @click="addCard" :isAdding="isAdding" />
        </div>
    </div>
</template>

<script>
import SoundIcon from '@/components/Icons/SoundIcon.vue'
import AddButton from '@/components/UIKit/AddButton.vue';

export default {
    components:{
        SoundIcon,
        AddButton
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
    },
    data(){
        return{
            isAdding: true
        }
    },
    methods:{
        addCard(){
            this.isAdding = false;
            setTimeout(() => {
                this.isAdding = true;
            }, 1000);
        }
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
    padding: 23px 12px 26px;
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
.card__btns{
    align-self: flex-end;
    margin-right: 12px;
}
</style>