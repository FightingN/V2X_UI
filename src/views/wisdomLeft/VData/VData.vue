<template>
  <div class="v-data border">
    <div class="title title-style" style="margin-bottom:10px">V2X车辆数据</div>
    <div class="content">
      <div class="item">
        <span>平均车速</span>
        <span class="span2">110km/h</span>
      </div>
      <div class="item">
        <span>V2X车辆数据</span>
        <span class="span2">30</span>
      </div>
      <div class="item">
        <span>V2X车辆行驶里程</span>
        <span class="span2">50km</span>
      </div>
      <div class="item">
        <span>车辆ID</span>
        <span class="span2">浙A***58</span>
      </div>
      <div class="item">
        <span>车辆类型</span>
        <span class="span2">小汽车</span>
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
  height: 30%;
  width: 100%;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem;
  .content {
    width: 100%;
    color: #fff;
    font-size: 0.2rem;
    height: 80%;
    .item {
      width: 100%;
      height: 22%;
      // border-top: 1px solid #4c5c9a;
      span {
        display: inline-block;
        width: 49%;
        text-align: center;
        // border-right: 1px solid #4c5c9a;
      }
      .span2 {
        // border-right: none;
      }
    }
  }
}
</style>
