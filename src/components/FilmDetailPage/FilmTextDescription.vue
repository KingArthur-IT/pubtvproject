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
        <div v-if="!isContentVisible" @click="open" class="description__more-btn"><b>Больше о сериале</b></div>
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
        open() {
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
</style>