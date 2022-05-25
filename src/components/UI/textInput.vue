<template>
  <div>
    <div class="text-field">
      <label class="text-field__label">{{ title }}</label>
      <input
        class="text-field__input"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
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
    modelValue: String,
  },
}
</script>

<style lang="scss">
.text-field {
  font-size: 14px;
  color: #10171e;
}
.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}
.text-field__input {
  display: block;
  width: 100%;
  height: 40px;
  padding: 18px 13px;
  font-family: inherit;
  background-clip: padding-box;
  background: #ffffff;
  border: 1px solid #dfe3e7;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
