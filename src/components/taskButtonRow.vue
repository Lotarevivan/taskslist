<template>
  <div>
    <div class="wrapper">
      <button-custom
        class="btn-white"
        @click="prevStep"
        v-if="activeComponent !== 'mainSettingsForm'"
      >
        <template #icon>
          <arrow-left> </arrow-left>
        </template>
        Назад
      </button-custom>
      <button-custom
        v-if="activeComponent !== 'commentForm'"
        :disabled="!nextDisabled"
        @click="nextStep"
        class="btn-white"
      >
        <template #icon>
          <arrow-right> </arrow-right>
        </template>
        Далее
      </button-custom>
      <div class="divider"></div>
      <button-custom
        class="btn-white"
        :disabled="!nextDisabled"
        @click="saveForm"
      >
        <template #icon>
          <save> </save>
        </template>
        Сохранить
      </button-custom>
      <button-custom class="btn-white" @click="modalIsOpen = true">
        <template #icon>
          <cancel> </cancel>
        </template>
        Отмена
      </button-custom>
    </div>
    <modal
      :isOpen="modalIsOpen"
      @modalConfirmed="modalConfirmed"
      @modalClosed="modalClosed"
    >
      Вернуться к списку задач?
      <template v-slot:content
        >Lorem ipsum dolor sit amet consectetur.</template
      >
      <template v-slot:info>&nbsp;</template>
      <template v-slot:ok>К списку</template>
    </modal>
  </div>
</template>

<script>
import arrowLeft from '@img/arrowLeft'
import arrowRight from '@img/arrowRight'
import save from '@img/save'
import cancel from '@img/cancel'
import buttonCustom from '@parts/UI/buttonCustom'
import modal from '@parts/modal.vue'
export default {
  components: {
    buttonCustom,
    arrowLeft,
    arrowRight,
    save,
    cancel,
    modal,
  },
  props: {
    nextDisabled: {
      type: Boolean,
      default: true,
    },
    activeComponent: {
      type: String,
    },
  },
  $emits: ['saveForm', 'nextStep', 'prevStep'],
  data() {
    return {
      modalIsOpen: false,
    }
  },
  methods: {
    saveForm() {
      this.$emit('saveForm')
    },
    nextStep() {
      this.$emit('nextStep')
    },
    prevStep() {
      this.$emit('prevStep')
    },
    modalClosed() {
      this.modalIsOpen = false
    },
    modalConfirmed() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  height: 82px;
  background-color: #f6f6f6;
  display: flex;
  gap: 10px;
  align-items: center;
  border-top: 1px dashed #bbc0c5;
  border-bottom: 1px dashed #bbc0c5;
  padding: 0 30px;
}
.divider {
  margin: 0 30px;
  height: 40px;
  border-left: 1px solid #bbc0c5;
}
</style>
