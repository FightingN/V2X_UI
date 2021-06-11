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
  height: 26%;
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
      height: 33%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        display: inline-block;
        text-align: center;
      }
      .span2 {
        color: #dd8933;
      }
    }
    .item-title {
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 16px;
    }
  }
}
</style>
