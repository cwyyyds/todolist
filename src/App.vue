<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @create="createFn"></TodoHeader>
    <TodoMain :list="list" @del="deleteFn"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true },
      ],
    }
  },
  methods: {
    createFn(val) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id: id,
        name: val,
        isDone: false,
      })
    },
    // 删除按钮
    deleteFn(id) {
      let index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
}
</script>
