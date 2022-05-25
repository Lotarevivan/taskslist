<template>
  <div>
    <div class="task__container">
      <div class="task__row head">
        <div>Название</div>
        <div>Дата</div>
        <div>Статус</div>
      </div>
      <div class="task__row" v-for="task in tasks" :key="task.id">
        <div>{{ task.name }}</div>
        <div>{{ task.dateEnd }}</div>
        <div>{{ task.status }}</div>
        <div>
          <span @click="modifyTaskById(task.id)">
            <edit-pic class="task__row_actions"></edit-pic>
          </span>
          <span @click="openModalDialog(task.id)">
           <delete-pic class="task__row_actions"></delete-pic>
          </span>
        </div>
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
import editPic from '@img/editPic'
import deletePic from '@img/deletePic' 
import { deleteTask } from '@parts/api'
import modal from '@parts/modal.vue'
export default {
  components: {
    modal,
    deletePic,
    editPic
  },
  data() {
    return {
      modalIsOpen: false,
      tasks: [],
      removeCandidate: null,
    }
  },
  methods: {
    modifyTaskById(id) {
      this.$router.push(`/modify/${id}`)
    },
    openModalDialog(id) {
      this.removeCandidate= id
      this.modalIsOpen= true
    },
    async deleteTaskById() {
      deleteTask(this.removeCandidate)
        .then((res) => {
          this.tasks= this.tasks.filter((el) => el.id !== res)
        })
        .catch((e) => {
          console.log(`ошибка удаления ${e}`)
          // неудачно
        })
    },
    modalClosed() {
      this.modalIsOpen= false
      this.removeCandidate= null
    },
    modalConfirmed() {
      this.modalIsOpen= false
      this.deleteTaskById()
    },
  },
  watch:{
    tasks(newValue){
      localStorage.setItem('taskList',JSON.stringify(newValue))
    }
  },
  mounted(){
    this.tasks=JSON.parse(localStorage.getItem('taskList'))
  }
}
</script>

<style lang="scss">
.task {
  &__container {
    max-width: 1170px;
    display: grid;
    row-gap: 6px;
  }

  &__row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
    border-radius: 6px;
    background-color: #f6f6f6;
    padding: 25px 33px 25px 33px;
    transition: 0.2s;
    &:hover {
      box-shadow: 1px 1px 1px #cac4c4;
    }
    &.head {
      background-color: transparent;
      max-width: 1156px;
      font-weight: bold;
      pointer-events: none;
    }
    &_actions {
      cursor: pointer;
      margin-left: 30px;
    }
  }
}
</style>
