<template>
  <div class="wrapper" @click="changeEvent(modelValue)">
    <input  type="checkbox"
            class="custom-checkbox"  
            :class="{'checked': modelValue, 'error': isError && !modelValue}"
            :value="modelValue"
            @input="(event) => $emit('update:modelValue', event.target.checked)"
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}){
    const changeEvent = (oldValue) => {
      emit('update:modelValue', !oldValue)
    }

    return {
      changeEvent
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  cursor: pointer;
  align-items: center;
}
.custom-checkbox {
  position: relative;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: var(--primary-color);
  width: 15px;
  height: 15px;
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  cursor: pointer;
}
.custom-checkbox.error {
  border: 1px solid #ff0000;
}
.custom-checkbox.checked::after{
  content: '';
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 1px;
  right: 0;
  background-color: var(--primary-color);
  background: url('@/assets/img/check.svg') no-repeat;
  transform: scale(0.8);
}
</style>

