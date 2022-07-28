<template>
    <div class="text dropdown__item" @click.stop="toggleDropdown">
        <span><b>{{selectedValue === '' ? notselectedValue : selectedValue}}</b></span>
        <svg class="dropdown__arrow" :class="{'rotated': isDisplay}" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L6 6L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <ul class="dropdown-list" :class="{'show': isDisplay, 'visible': isVisible}">
            <li class="dropdown-item" @click.stop="selectedValue = notselectedValue">{{notselectedValue}}</li>
            <li v-for="(item, i) in list" :key="i" class="dropdown-item" @click.stop="selectedValue = item">{{item}}</li>
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
        notselectedValue:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            selectedValue: '',
            isDisplay: false,
            isVisible: false
        }
    },
    mounted(){
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
        }
    }
}
</script>

<style scoped>
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
    border-radius: 13px;
    padding: 11px 37px;
    position: absolute;
    list-style: none;
    margin: 0;
    left: 0;
    top: 40px;
    z-index: 5;
    min-width: 280px;
    max-height: 279px;
    display: none;
    opacity: 0;
    transition: opacity var(--transition-time) ease-in-out;
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
    padding: 20px 0;
    transition: color var(--transition-time) ease-in-out;
}
.dropdown-item:last-child{
    border-bottom: none;
}
.dropdown-item:hover{
    color: var(--primary-hover-color);
}
.show{
    display: block !important;
}
.visible{
    opacity: 1 !important;
}
.dropdown__arrow{
    transform: rotate(0);
    transition: transform .3s ease-in-out;
}
.rotated{
    transform: rotate(180deg);
}
</style>