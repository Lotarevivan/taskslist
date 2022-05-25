<template>
  <div>
    <div class="add_task">
      <button-custom @click="addNewTask" class="btn-blue">
        <template #icon>
          <img src="@img/plus.svg" alt="plus" />
        </template>
        Новое задание
      </button-custom>
    </div>
    <task-list></task-list>
  </div>
</template>

<script>
import taskList from '@parts/taskList.vue'
import buttonCustom from '@parts/UI/buttonCustom'
export default {
  components: {
    taskList,
    buttonCustom,
  },
  methods: {
    addNewTask() {
      this.$router.push('/create')
    },
  },
}
</script>

<style>
.add_task {
  margin: 40px 0;
}
</style>
