<template>
  <div class="v-data border">
    <div class="title title-style">态势预警</div>
    <div class="content">
      <div class="item">
        <span>G92_红垦枢纽-机场互通_杭州方向0211KM+800M 流量</span>
        <span class="span2">500辆/10分钟</span>
      </div>
      <div class="item">
        <span>G92_瓜沥枢纽-柯桥互通_宁波方向0211KM+700M 流量</span>
        <span class="span2">460辆/10分钟</span>
      </div>
      <div class="item">
        <span>G92_红垦枢纽-机场互通_宁波方向0211KM+200M 流量</span>
        <span class="span2">430辆/10分钟</span>
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
  height: 320px;
  width: 800px;
  background-color: #0c1427;
  padding: 5px 14px 0;
  border: solid 3px #4c5c9a;
  margin-top: 20px;
  .content {
    width: 100%;
    color: #fff;
    font-size: 24px;
    .item {
      width: 100%;
      height: 60px;
      span {
        display: inline-block;
        text-align: center;
      }
      .span2 {
        // margin-left: 110px;
        color: #dd8933;
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
