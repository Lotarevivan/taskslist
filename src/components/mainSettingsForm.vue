<template>
  <div>
    <div class="form__main">
      <div class="form__main_row group">
        <text-input
          :title="taskName.title"
          :placeholder="taskName.placeholder"
          v-model="taskName.value"
        ></text-input>
        <date-input
          :title="taskDate.title"
          :placeholder="taskDate.placeholder"
          v-model="taskDate.value"
        ></date-input>
      </div>
      <div class="form__main_row">
        <text-area
          :title="taskDescription.title"
          :placeholder="taskDescription.placeholder"
          v-model="taskDescription.value"
        ></text-area>
      </div>
      <div class="form__main_row">
        <hr />
      </div>

      <div class="form__main_row single">
        <select-input
          :title="taskStatus.title"
          v-model="taskStatus.value"
        ></select-input>
      </div>
    </div>
  </div>
</template>

<script>
import textInput from '@parts/UI/textInput'
import dateInput from '@parts/UI/dateInput'
import textArea from '@parts/UI/textArea'
import selectInput from '@parts/UI/selectInput'
import { createTask } from '@parts/api'
export default {
  components: {
    textInput,
    dateInput,
    textArea,
    selectInput,
  },
  emits: ['passProp', 'passSavemethod'],
  data() {
    return {
      taskName: {
        title: 'Название задания:',
        placeholder: 'Задание такое то',
        value: '',
      },
      taskDate: {
        title: 'Дата завершения:',
        placeholder: 'Задание такое то',
        value: '',
        rawData: '',
      },
      taskDescription: {
        title: 'Описание задания:',
        placeholder: 'Задание такое то',
        value: '',
        rawData: '',
      },
      taskStatus: {
        title: 'Статус задания:',
        value: 'Создание',
      },
    }
  },
  computed: {
    FormValid() {
      return !!this.taskName.value && !!this.taskDate.value.length
    },
  },
  watch: {
    FormValid(newValue) {
      this.$emit('passProp', newValue) //Передаем состояние кнопки далее->
    },
  },
  methods: {
    async saveForm() {
      // формируем обьект для отправки
      const newTask = {
        name: this.taskName.value,
        dateEnd: this.taskDate.value,
        description: this.taskDescription.value,
        status: this.taskStatus.value,
      }
      createTask(newTask)
        .then((res) => {
          const localTasks = localStorage.getItem('taskList')
          this.$router.push({ query: { task: res.id } })
          if (localTasks === 'null') {
            localStorage.setItem('taskList', JSON.stringify([res]))
          } else {
            const updatedTask = JSON.parse(localTasks)
            updatedTask.push(res)
            localStorage.setItem('taskList', JSON.stringify(updatedTask))
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async loadSettingsById(id) {
      if (localStorage.getItem('taskList')) {
        const settings = JSON.parse(localStorage.getItem('taskList')).filter(
          (el) => el.id === parseInt(id)
        )[0]
        this.taskName.value = settings.name
        this.taskDate.value = settings.dateEnd
        this.taskDescription.value = settings.description
        this.taskStatus.value = settings.status
      }
    },
  },
  mounted() {
    this.$router.replace({ query: null })
    if (this.$route.name === 'Modify') {
      this.loadSettingsById(this.$route.params.id)
    }
  },
  activated() {
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
