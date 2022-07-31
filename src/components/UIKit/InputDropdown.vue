<template>
    <div class="input-wrap" @click.stop="toggleDropdown">
        <input v-model="value" type="text" class="input input-wrap__input" :placeholder="placeholder" readonly>
        <div class="input-wrap__icon">
            <svg class="input-arrow" :class="{'opened': isDisplay}" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L6 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <ul class="dropdown-list" :class="{'show': isDisplay, 'visible': isVisible}">
            <li v-for="(item, i) in list" :key="i" class="dropdown-item" @click="selectClick(item)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type: Array,
            required: true
        },
        placeholder:{
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        },
    },
    data(){
        return{
            isDisplay: false,
            isVisible: false,
            value: ''
        }
    },
    mounted(){
        this.value = this.modelValue;
        document.addEventListener('click', () => {
            this.closeDropdown();
        });
    },
    methods:{
        openDropdown(){
            this.isDisplay = true;
            setTimeout(() => {
                this.isVisible = true;
            }, 200);
        },
        closeDropdown(){
            this.isVisible = false;
            setTimeout(() => {
                this.isDisplay = false;
            }, 200);
        },
        toggleDropdown(){
            if (this.isDisplay)
                this.closeDropdown();
            else
                this.openDropdown();
        },
        selectClick(newVal){
            this.value = newVal;
            this.$emit('update:modelValue', newVal)
        }
    }
}
</script>

<style scoped>
.input-wrap{
    position: relative;
}
.input-wrap__input{
    width: 100%;
}
.input-wrap__icon{
    position: absolute;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.dropdown__item{
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.dropdown__item span{
    margin-right: 15px;
}
.dropdown-list{
    background: #fff;
    border-radius: 15px;
    position: absolute;
    list-style: none;
    margin: 0;
    left: 0;
    top: 70px;
    z-index: 5;
    min-width: 250px;
    max-height: 270px;
    display: none;
    opacity: 0;
    transition: opacity var(--transition-time) ease-in-out;
    width: 100%;
    cursor: pointer;
    overflow-y: scroll;
}
.dropdown-item{
    width: 100%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 137%;
    color: #000000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    padding: 20px 37px;
    transition: color .1s ease-in-out, background .1s ease-in-out;
}
.dropdown-item:last-child{
    border-bottom: none;
}
.dropdown-item:hover{
    /* color: var(--primary-hover-color); */
    background: var(--primary-hover-color);
    border-bottom: 1px solid var(--primary-hover-color);
    color: #fff;
}
.show{
    display: block !important;
}
.visible{
    opacity: 1 !important;
}
.input-arrow{
    transform: rotate(0);
    transition: transform .3s ease-in-out;
}
.input-arrow.opened{
    transform: rotate(180deg);
}

@media screen and (max-width: 425px) {
    .dropdown-list{
        border-radius: 10px;
    }
}
</style>