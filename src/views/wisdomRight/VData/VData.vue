<template>
  <div class="v-data border">
    <div class="title title-style">路段服务水平评价</div>
    <div class="content">
      <div class="item item-title">
        <span>路段名称</span>
        <span class="span2" style="margin-left:200px">服务水平</span>
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
  height: 412px;
  width: 800px;
  background-color: #0c1427;
  padding: 5px 14px 0;
  border: solid 3px #4c5c9a;
  margin-top: 20px;
  .content {
    width: 100%;
    color: #fff;
    font-size: 32px;
    .item {
      width: 100%;
      height: 60px;
      span {
        display: inline-block;
        text-align: center;
      }
      .span2 {
        margin-left: 110px;
      }
    }
    .item-title {
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 38px;
    }
  }
}
</style>
