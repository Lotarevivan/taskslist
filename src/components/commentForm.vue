<template>
  <div class="comment">
    <div class="comment__container">
      <div class="comment__viewer">
        <div
          class="comment__item"
          v-for="comment in commentArray"
          :key="comment.date"
        >
          {{ comment.comment }}
        </div>
      </div>
      <div class="comment__input">
        <text-area
          v-model="newComment"
          title="Коментарий к заданию:"
        ></text-area>
        <div class="comment__button">
          <button-custom @click="SetComment" class="btn-blue"
            >Добавить комментарий
          </button-custom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonCustom from '@parts/UI/buttonCustom'
import textArea from '@parts/UI/textArea'
export default {
  components: {
    textArea,
    buttonCustom,
  },
  emits: ['passSavemethod'],
  data() {
    return {
      commentArray: [],
      newComment: '',
      currentTaskId: null,
    }
  },
  methods: {
    SetComment() {
      if (this.newComment.length === 0) return
      const commentObj = {
        comment: this.newComment,
        date: new Date(),
      }
      this.commentArray.push(commentObj)
      this.newComment = ''
    },

    saveForm() {
      if (this.$route.name === 'Modify') {
        // updateMethod
      } else {
        //createMethod
      }
      // отправка на сервер
      // console.log(this.commentArray)
    },
  },
  activated() {
    if (this.$route.query.task) {
      this.currentTaskId = this.$route.query.task
    }
    this.$emit('passSavemethod', this.saveForm)
  },
}
</script>

<style lang="scss">
.comment {
  &__container {
    display: flex;
    gap: 20px;
  }
  & .comment__viewer {
    border-radius: 6px;
    background: #f2f6f9;
    min-width: 780px;
    min-height: 438px;
    padding: 60px 30px 30px 30px;
  }
  & .comment__input {
    width: 100%;
    height: 350px;
  }
  & .comment__button {
    margin-top: 40px;
    float: right;
  }
}

.comment__item {
  width: fit-content;
  background-color: #fff;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #dfe3e7;
  margin-top: 20px;
}
</style>
