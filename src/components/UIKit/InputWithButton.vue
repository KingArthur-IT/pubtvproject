<template>
    <div>
        <div>
            <input ref="input" type="file" @change="addFile" class="d-none" :multiple="isMultiple">
            <div class="input-wrapper">
                <input type="text" class="input modal__input" :placeholder="placeholder" readonly>
                <div @click="openModalDialog" class="modal__input-btn">
                    <slot></slot>
                </div>
            </div>
            <div v-if="files && files.length">
                <p v-for="(file, i) in files" :key="i" class="text file-name">
                    {{file.name}} <span @click="deleteFile" class="delete">X</span> 
                </p>
            </div>
            <div v-if="wordsList && wordsList.length" class="words-wrapper">
                <div v-for="(word,i) in wordsList" :key="i" class="word">
                    <p class="text file-name">{{word}} <span @click="deleteWord(i)" class="delete">X</span>  </p>
                </div>
            </div>
        </div>

        <ModalWrapper 
                :title="'Добавить Слово'" 
                :lineWidth="progressStep * 50"
                :isShown="isModalShown" 
                @closeModal="closeModal"
                :isLongModal="false"
        >
            <AddFlashCard @addEvent="addFlashCard" />
        </ModalWrapper>
    </div>
</template>

<script>
import ModalWrapper from '@/components/Modals/ModalWrapper.vue';
import AddFlashCard from '@/components/Modals/AddFlashCard.vue';

export default {
    props:{
        placeholder:{
            type: String,
            default: ''
        },
        isWordAdding:{
            type: Boolean,
            default: false
        },
        isMultiple:{
            type: Boolean,
            default: false
        }
    },
    components:{
        ModalWrapper,
        AddFlashCard
    },
    data(){
        return{
            files: [],
            isModalShown: false,
            progressStep: 1,
            wordsList: []
        }
    },
    methods:{
        openModalDialog(){
            this.progressStep = 1;
            if (!this.isWordAdding)
                this.$refs.input.click();
            else this.isModalShown = true;
        },
        addFile(){
            this.files = event.target.files;
            console.log(this.file.name)
        },
        closeModal(){
            this.isModalShown = false;
        },
        addFlashCard(word){
            this.progressStep = 2;
            this.wordsList.push(word.original)
            setTimeout(() => {
                this.isModalShown = false;
            }, 200);
        },
        deleteWord(index){
            this.wordsList.splice(index, 1);
        },
        deleteFile(){
            this.file = null;
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
    .words-wrapper{
        display: flex;
        flex-direction: column;
    }
    .word{
        display: flex;
    }
    .delete{
        margin-left: 5px;
        cursor: pointer;
    }
    .delete:hover{
        color: var(--primary-hover-color);
    }

@media screen and (max-width: 425px) {
    .modal__input-btn{
        width: 100%;
    }
}
</style>