

<template>
    <button class="btn" :disabled="disabled">
     <slot name="icon"></slot>
    <slot> </slot>
    </button>
</template>
<script>
// Дефолтный слот под текст
// именованный под картинку
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 10px;
  border: none;
  cursor:pointer;
  font-weight: bold;
  height: 40px;
  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:focus{
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  &:hover{
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  &.btn-blue{
    background: #106edc;
    color: #fff;
  }
  &.btn-white{
    background: #fff;
    color:#0C2747;
    border: 1px solid #DFE3E7
;
  }
}
</style>