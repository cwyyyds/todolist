<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @create="createFn"></TodoHeader>
    <TodoMain :list="showArr" @del="deleteFn"></TodoMain>
    <TodoFooter :list="showArr" @changeType="typeFn"></TodoFooter>
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
      getSel: 'all',
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
    // 全部 未完成 已完成
    typeFn(val) {
      this.getSel = val
    },
  },
  //监听
  computed: {
    showArr() {
      if (this.getSel === 'yes') {
        // 显示已完成
        return this.list.filter((obj) => obj.isDone === true)
      } else if (this.getSel === 'no') {
        // 显示未完成
        return this.list.filter((obj) => obj.isDone === false)
      } else {
        return this.list // 全部显示
      }
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
}
</script>
