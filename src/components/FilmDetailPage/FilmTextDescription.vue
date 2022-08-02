<template>
    <div class="description">
        <div>
            <b>О первой серии.</b> Гангстерская телевизионная сага «Острые козырьки» переносит зрителя в начало двадцатого века. В центре сюжетного повествования «Острых козырьков» — молодежная цыганская банда из Бирмингема. Ею руководят братья Шелби, едва вернувшиеся с первой мировой войны, ожесточившей многих.
        </div>
        <div class="description__full-text" ref="fullcontent" :style="`height: ${contentHeight}px`">
            <br>
            <b>О первой серии.</b> Гангстерская телевизионная сага «Острые козырьки» переносит зрителя в начало двадцатого века. В центре сюжетного повествования «Острых козырьков» — молодежная цыганская банда из Бирмингема. Ею руководят братья Шелби, едва вернувшиеся с первой мировой войны, ожесточившей многих.
            <br><br>
            <b>О первой серии.</b> Гангстерская телевизионная сага «Острые козырьки» переносит зрителя в начало двадцатого века. В центре сюжетного повествования «Острых козырьков» — молодежная цыганская банда из Бирмингема. Ею руководят братья Шелби, едва вернувшиеся с первой мировой войны, ожесточившей многих.
            <br><br>
            <b>О первой серии.</b> Гангстерская телевизионная сага «Острые козырьки» переносит зрителя в начало двадцатого века. В центре сюжетного повествования «Острых козырьков» — молодежная цыганская банда из Бирмингема. Ею руководят братья Шелби, едва вернувшиеся с первой мировой войны, ожесточившей многих.
        </div>
        <div @click="toggleDescription" class="description__more-btn"><b>{{isContentVisible ? 'Свернуть описание' : 'Больше о сериале'}}</b></div>
        <div @click="toggleDescription" class="description__mobile-more-btn" :class="{'rotate': isContentVisible}">
            <b>{{isContentVisible ? 'Свернуть' : 'Читать'}}</b>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L4 4L1 1" stroke="white" stroke-opacity="0.55" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isContentVisible: false,
            contentHeight: 0
        }
    },
    methods: {
        toggleDescription() {
            this.isContentVisible = !this.isContentVisible;
            if (this.isContentVisible)
                this.contentHeight = this.$refs.fullcontent.scrollHeight;
            else 
                this.contentHeight = 0;
        },
    },
}
</script>

<style scoped>
.description{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 138%;
    color: #FFFFFF;
}
.description__more-btn{
    font-size: 23px;
    color: rgba(255, 255, 255, 0.55);
    margin-top: 12px;
    cursor: pointer;
}
.description__full-text{
    overflow: hidden;
    transition: all 0.2s ease-out;
}
.description__mobile-more-btn{
    display: none;
}

@media screen and (max-width: 768px) {
    .description__more-btn,
    .description{
        font-size: 18px;
    }
}

@media screen and (max-width: 600px) {
    .description__more-btn,
    .description{
        font-size: 16px;
    }
}

@media screen and (max-width: 425px) {
    .description{
        font-size: 13px;
    }
    .description__more-btn{
        display: none;
    }
    .description__mobile-more-btn{
        font-size: 13px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.55);
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .description__mobile-more-btn svg{
        margin-left: 7px;
        transition: transform .2s ease-in-out;
        transform: rotate(0deg);
    }
    .rotate.description__mobile-more-btn svg{
        transform: rotate(180deg);
    }
}
</style>