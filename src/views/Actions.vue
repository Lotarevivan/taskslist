<template>
  <div>
    <h1>{{title}}</h1>
    <br>
    <task-navigation
      :activeTab="activeComponent"
      :nextDisabled="currentProperties"
      @choseStep="choseStep"
    ></task-navigation>
    <br />
    <task-button-row
      :activeComponent="activeComponent"
      :nextDisabled="currentProperties"
      @saveForm="saveForm"
      @nextStep="nextStep"
      @prevStep="prevStep"
    ></task-button-row>
    <br />
    <keep-alive>
      <component
        @passProp="Setprop"
        @passSavemethod="saveMethod"
        :is="activeComponent"
      >
      </component>
    </keep-alive>
  </div>
</template>

<script>
import taskNavigation from '@parts/taskNavigation'
import taskButtonRow from '@parts/taskButtonRow'
import mainSettingsForm from '@parts/mainSettingsForm'
import documentsForm from '@parts/documentsForm'
import commentForm from '@parts/commentForm'
export default {
  components: {
    taskNavigation,
    taskButtonRow,
    mainSettingsForm,
    commentForm,
    documentsForm,
    currentSavemethod: null,
  },
  data() {
    return {
      activeComponent: 'mainSettingsForm',
      mainSettingsFormProps: false,
      dynamicComponents: ['mainSettingsForm', 'documentsForm', 'commentForm'],
    }
  },
  computed: {
    currentProperties: function () {
      if (this.activeComponent === 'mainSettingsForm') {
        return this.mainSettingsFormProps
      }
      return true
    },
    indexActiveComponent() {
      return this.dynamicComponents.lastIndexOf(this.activeComponent)
    },
    title(){
      return this.$route.name ==='Modify' ?  'Редактирование':'Создание новго задания'
    }
  },
  methods: {
    choseStep(step) {
      this.activeComponent = step
    },
    Setprop(prop) {
      //Передаем состояние кнопки далее->
      this.mainSettingsFormProps = prop
    },
    saveForm() {
      if (this.currentSavemethod) {
        this.currentSavemethod()
      }
    },
    saveMethod(method) {
      this.currentSavemethod = method
    },
    nextStep() {
      //индекс текущей вкладки
      this.activeComponent =
        this.dynamicComponents[this.indexActiveComponent + 1]
    },
    prevStep() {
      //индекс текущей вкладки
      this.activeComponent =
        this.dynamicComponents[this.indexActiveComponent - 1]
    },
  },
}
</script>

