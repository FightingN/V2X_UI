<template>
  <div class="v-data border">
    <div class="title title-style">V2X车辆数据</div>
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
  height: 646px;
  width: 856px;
  background-color: #0c1427;
  // padding: 5px 14px 0;
  .content {
    width: 100%;
    color: #fff;
    font-size: 30px;
    .item {
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-top: 1px solid #4c5c9a;
      span {
        display: inline-block;
        width: 49%;
        text-align: center;
        border-right: 1px solid #4c5c9a;
      }
      .span2 {
        border-right: none;
      }
    }
  }
}
</style>
