<template>
  <div class="v-data border">
    <div class="title title-style">路段服务水平评价</div>
    <div class="content">
      <div class="item item-title">
        <span>路段名称</span>
        <span class="span2">服务水平</span>
      </div>
      <div class="item">
        <span>G92_红垦枢纽-机场互通_杭州方向</span>
        <span class="span2">B级</span>
      </div>
      <div class="item">
        <span>G92_瓜沥枢纽-柯桥互通_杭州方向</span>
        <span class="span2">C级</span>
      </div>
      <div class="item">
        <span>G92_红垦枢纽-机场互通_宁波方向</span>
        <span class="span2">D级</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {}
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
    height: 85%;
    color: #fff;
    font-size: 0.15rem;
    .item {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      span {
        flex: 1;
        display: inline-block;
        text-align: center;
      }
    }
    .item-title {
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 0.2rem;
    }
  }
}
</style>
