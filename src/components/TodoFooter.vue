<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters" @click="fn">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          @click="isSel = 'all'"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          @click="isSel = 'no'"
          href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          @click="isSel = 'yes'"
          href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: 'all',
    }
  },
  props: ['list'],
  computed: {
    count() {
      return this.list.length
    },
  },
  methods: {
    fn() {
      this.$emit('changeType', this.isSel)
    },
  },
}
</script>
