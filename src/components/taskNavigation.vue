<template>
  <div>
    <nav class="task__tabs">
      <div
        class="task__tabs_item"
        :class="{ active: item.nameComponent === activeTab }"
        v-for="item in menu"
        :key="item.id"
        @click="SelectTab(item.nameComponent)"
      >
        <span>{{ item.id }}.{{ item.title }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    nextDisabled: {
      type: Boolean,
      default: true,
    },
    activeTab: {
      type: String,
    },
  },
  emits: ['choseStep'],
  data() {
    return {
      menu: [
        {
          id: 1,
          title: 'Основные настройки',
          nameComponent: 'mainSettingsForm',
        },
        {
          id: 2,
          title: 'Документы',
          nameComponent: 'documentsForm',
        },
        {
          id: 3,
          title: 'Комментарии',
          nameComponent: 'commentForm',
        },
      ],
    }
  },
  methods: {
    SelectTab(nameComponent) {
      if (!this.nextDisabled) {
        return
      }
      this.$emit('choseStep', nameComponent)
    },
  },
}
</script>

<style lang="scss">
.task__tabs {
  display: flex;
  gap: 10px;
  font-size: 18px;
  flex-wrap: wrap;
  &_item {
    width: 356px;
    height: 60px;
    line-height: 60px;
    padding: 0px 24px;
    background: #f2f6f9;
    border-radius: 10px 0px 0px 0px;
    color: #10151b;
    font-weight: bold;
    cursor: pointer;
    &.active {
      background: #0c2747;
      color: #fff;
    }
  }
}
</style>
