<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="task"
      @keydown.enter="downFn"
    />
  </header>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      task: '',
    }
  },
  methods: {
    downFn() {
      if (this.task.trim().length === 0) {
        alert('任务名不能为空')
        return
      }
      this.$emit('create', this.task)
      this.task = ''
    },
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((obj) => (obj.isDone = val))
      },
      get() {
        return (
          this.list.length !== 0 &&
          this.list.every((obj) => obj.isDone === true)
        )
      },
    },
  },
}
</script>
