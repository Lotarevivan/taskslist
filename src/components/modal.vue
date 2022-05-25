<template>
  <div>
    <div class="modal-container" :class="{ show: isOpen }" @click="modalClosed">
      <div class="modal" @click.stop>
        <p class="modal__header">
          <slot> Удалить выбранное? </slot>
        </p>

        <p class="modal__content">
          <slot name="content">
            Выбранные вами объекты удалятся без возможности восстановления.
          </slot>
        </p>
        <p class="modal__info">
          <slot name="info"> Выбрано объектов: <span>1</span> </slot>
        </p>
        <div class="modal__footer">
          <button-custom class="btn-white" @click="modalClosed"
            >Отмена</button-custom
          >
          <button-custom class="btn-blue" @click="modalConfirmed"
            >
            <slot name="ok">Удалить</slot>
            </button-custom
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonCustom from '@parts/UI/buttonCustom'
export default {
  components: {
    buttonCustom,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    modalConfirmed: null,
    modalClosed: null,
  },
  methods: {
    modalClosed() {
      this.$emit('modalClosed')
    },
    modalConfirmed() {
      this.$emit('modalConfirmed')
    },
    keyHandler(e) {
      if (e.key === 'Escape') {
        this.modalClosed()
      }
    },
  },
  mounted() {
    document.addEventListener('keyup', this.keyHandler)
  },
  beforeUnmount() {
    document.removeEventListener('keyup', this.keyHandler)
  },
}
</script>

<style lang="scss">
.modal-container {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  z-index: 1;
  &.show {
    opacity: 1;
    pointer-events: auto;
  }
}
.modal {
  padding: 40px 40px 60px 40px;
  background-color: #fff;
  width: 600px;
  max-width: 100%;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  &__header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  &__content {
    font-size: 14px;
    margin-bottom: 30px;
  }
  &__info {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
