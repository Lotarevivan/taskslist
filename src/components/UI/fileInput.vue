<template>
  <div class="input__file_container">
    <div class="input__file">
      <div class="input__file_drop"  @drop.prevent="dropFile" @dragover.prevent>
        <p class="drop-title">Загрузить файл</p>
        <p class="drop-text">
          Выберите или перетащите один или несколько файлов
        </p>
      </div>
      <div class="input__file_row">
        <input
          @change="getFiles"
          ref="inputFile"
          type="file"
          name="docs"
          accept=".png, .jpg, .jpeg"
          id="upload-doc"
          multiple
        />
        <text-input
          class="text-input"
          placeholder="Выберите файл..."
          title=""
          v-model="filesArrayString"
        ></text-input>
        <button-custom @click="startUploadFile" class="btn-blue">
          Выбрать
        </button-custom>
      </div>
    </div>
    <div class="files__list">
      <div class="files__list_header" v-if="filesArray.length > 0">
        Название
      </div>
      <div v-for="item in filesArray" :key="item.name" class="files__list_row">
        <div class="file-name">{{ item.name }}</div>
        <span @click="openModalDialog(item)">
          <delete-pic class="file-action"></delete-pic>
        </span>
      </div>
    </div>
    <modal
      :isOpen="modalIsOpen"
      @modalConfirmed="modalConfirmed"
      @modalClosed="modalClosed"
    >
    </modal>
  </div>
</template>

<script>
import modal from '@parts/modal.vue'
import deletePic from '@img/deletePic'
import buttonCustom from '@parts/UI/buttonCustom'
import textInput from '@parts/UI/textInput.vue'
export default {
  components: {
    buttonCustom,
    textInput,
    deletePic,
    modal,
  },
  data() {
    return {
      filesArray: [],
      modalIsOpen: false,
      removeCandidate: null,
    }
  },
  methods: {
    dropFile(e) {
      const droppedFiles= e.dataTransfer.files
      if (!droppedFiles) return
      this.filesArray.push(...droppedFiles)
    },
    openModalDialog(item) {
      this.modalIsOpen= true
      this.removeCandidate= item
    },
    startUploadFile() {
      this.$refs.inputFile.click()
    },
    getFiles(e) {
      // Получим файлы из инпута
      const files= e.target.files
      if (files) {
        this.filesArray.push(...files)
      }
    },
    modalConfirmed() {
      this.filesArray= this.filesArray.filter(
        (el) => el !== this.removeCandidate
      )
      this.modalIsOpen= false
    },
    modalClosed() {
      this.modalIsOpen= false
    },
  },
  computed: {
    filesArrayString() {
      //строка имен файлов для отображения
      return this.filesArray.map((el) => el.name).join(';')
    },
  },
  watch:{
    filesArray: {
      handler(newValue) {
        this.$emit('sendFiles',newValue)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.input__file {
  width: 610px;
  &_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &_drop {
    width: inherit;
    height: 200px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    border: 1px dashed #dfe3e7;
    background-color: #f6f6f6;
    color: #82898f;
    & > .drop-title {
      font-size: 14px;
      font-weight: bold;
    }
    > .drop-text {
      font-size: 10px;
    }
  }
  &_row {
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    & input[type='file'] {
      display: none;
    }
    & .text-input {
      flex-basis: 84%;
    }
  }
}
.files__list {
  width: 513px;
  &_row {
    align-self: flex-start;
    font-size: 14px;
    padding: 0px 33px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    background-color: #f6f6f6;
    border-radius: 6px;
  }
  & .file-action {
    cursor: pointer;
  }
}
</style>
