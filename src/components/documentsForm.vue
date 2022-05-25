<template>
  <div>
    <file-input @sendFiles="sendFiles"></file-input>
  </div>
</template>

<script>
import { addFilesToTask } from '@parts/api'
import fileInput from '@parts/UI/fileInput'
export default {
  components: {
    fileInput,
  },
  data() {
    return {
      files: [],
      currentTaskId: null,
    }
  },
  methods: {
    sendFiles(files) {
      console.log(files)
      this.files= files
    },
    async saveForm() {
      addFilesToTask(this.currentTaskId,this.files)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
  activated() {
    if (this.$route.query.task) {
      this.currentTaskId= this.$route.query.task
    }
    this.$emit('passSavemethod', this.saveForm)
  },
}
</script>

<style lang="scss">
.form__main {
  &_row {
    max-width: 920px;
    margin-bottom: 20px;
    &.group {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
    &.single {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
    }
  }
}
</style>
