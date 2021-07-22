<template>
  <div class="v-data border">
    <div class="title title-style">管控措施</div>
    <div class="content">{{ measure }}</div>
  </div>
</template>

<script>
import { getServiceTodo } from 'api/wisdomRight.js'
export default {
  name: 'Control',
  data () {
    return {
      roadName: '',
      measure: ''
    }
  },
  mounted () {
    this.getServiceTodo()
  },
  methods: {
    async getServiceTodo () {
      const res = await getServiceTodo(this.roadName)
      this.measure = res.data[0].needTodo
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 20%;
  width: 100%;
  background-color: #0c1427;
  padding: 0.0625rem;
  border: solid 1px #4c5c9a;
  margin-top: 0.25rem;
  .content {
    width: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 0.5rem;
    margin-top: 0.25rem;
    word-break: break-all;
  }
}
</style>
