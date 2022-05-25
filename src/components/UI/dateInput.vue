<template>
  <div>
    <div class="date-field">
      <label class="date-field__label">{{ title }}</label>
      <input
        ref="datePiker"
        class="date-field__input"
        type="date"
        placeholder=""
        :value="modelValue"
        @change="FormatDate"
      />
     <img class="date-field-img" src="@img/calendar.svg" alt="" >
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
Russian.months.shorthand= [
  // Переопределим согласно макету
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]
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
  data() {
    return {
      pikerInstance: null,
    }
  },
  methods: {
    FormatDate(e) {
      this.$emit('update:modelValue', e.target.value)
      console.log(this.pikerInstance.parseDate(e.target.value,'d/M/Y'))
    },
  },
  mounted() {
    this.pikerInstance= flatpickr(this.$refs.datePiker, {
      locale: Russian,
      dateFormat: 'd M Y',
    })
    
  },
}
</script>

<style lang="scss">
.date-field {
  font-size: 14px;
  color: #10171e;
  position:relative;
}
.date-field__label {
  display: block;
  margin-bottom: 0.25rem;
}
.date-field__input {
  position: relative;
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
.date-field-img{
  position: absolute;
  left: calc(100% - 20px - 12px) ;
  bottom:10px;
  z-index: -1;
}
.flatpickr-input[readonly] {
    cursor: pointer;
    background: transparent;
}
</style>
