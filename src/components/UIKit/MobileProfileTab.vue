<template>
    <div @click="isModalShown = true" class="mobile-tabs__item">
        <slot></slot>
        <div class="mobile-tabs__text">{{title}}</div>
    </div>
    <ModalWrapper 
            :title="title" 
            :lineWidth="0"
            :isShown="isModalShown" 
            @closeModal="closeModal"
            :isLongModal="true"
            :isShowInfoIconOnModal="title === 'Флэш-карты'"
            @showModalInfoPopup="isMobileInfoShow = true"
        >
        <Favourite v-if="title === 'Избранное'" />
        <FlashCard v-else />
    </ModalWrapper>
    <ModalWrapper 
            :title="'Информация'" 
            :isShown="isMobileInfoShow" 
            @closeModal="isMobileInfoShow = false"
            :isLongModal="true"
        >
        <div class="text">
            На странице Флэш-карты отображаются все те слова и фразы, которые вы добавили с просмотренного вами кино. Также имеется возможность добавлять свои личные слова. Если вы запомнили перевод слова, тогда нажмите я запомнил(а). Если вы хотите посмотреть перевод слова на компьютерной версии сайта, то наведите курсор мыши на заблюренную часть под словом на карточке, а на мобильной версии просто нажмите на заблюренную часть. Если хотите прочитать про систему изучения слов, которая используется на данном сайте, то перейдите по ссылке.
        </div>
    </ModalWrapper>
</template>

<script>
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import Favourite from '@/components/ProfilePage/Favourite.vue';
import FlashCard from '@/components/ProfilePage/FlashCard.vue';

export default {
    components:{
        ModalWrapper,
        Favourite,
        FlashCard
    },
    props:{
        title:{
            type: String,
            default: ''
        }
    },
    data(){
        return{
            isModalShown: false,
            isMobileInfoShow: false
        }
    },
    methods:{
        closeModal(){
            this.isModalShown = false;

        },
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .mobile-tabs__item{
        display: flex;
        flex-basis: 48%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 158px;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 11px;
    }
    .mobile-tabs__text{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 133%;
        color: rgba(255, 255, 255, 0.44);
    }
}
</style>