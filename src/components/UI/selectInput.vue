<template>
  <div>
    <div>
      <label class="text-field__label">{{ title }}</label>
      <div class="select">
        <select
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          name="format"
          id="format"
        >
          <option value="Создание">Создание</option>
          <option value="Остальное">Остальное</option>
        </select>
      </div>
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
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-image: none;
  padding: 0 20px;
  background: #ffffff;
  border: 1px solid #dfe3e7;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  z-index: 0;
}

.select {
  position: relative;
}
.select::after {
  content: ' ';
  background-image: url('../../assets/img/selectArrow.svg');
  background-repeat: no-repeat;
  position: inherit;
  top: 0px;
  right: 30px;
  padding: 0 1em;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
</style>
