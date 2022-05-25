<template>
    <div class="text-area-field">
      <label class="text-area-field__label">{{ title }}</label>
      <textarea 
         class="text-area-field__input"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
      />
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    modelValue:String
  },
}
</script>

<style lang="scss">
.text-area-field {
  font-size: 14px;
  color: #10171e;
  height: 100%;
  
}
.text-area-field__label {
  display: block;
}
.text-area-field__input {
  display: block;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dfe3e7;
  border-radius: 6px;
  resize: none;
  padding: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
