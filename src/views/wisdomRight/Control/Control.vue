<template>
  <div class="v-data border">
    <div class="title title-style">管控措施</div>
    <div class="content">
      <div class="item">
        <span>G92_红垦枢纽-机场互通_宁波方向K192-K196</span>
        <span class="span2"></span>
      </div>
      <div class="item">
        <span>发生拥堵,建议车辆限速降低至80Km/h</span>
        <span class="span2"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 260px;
  width: 800px;
  background-color: #0c1427;
  padding: 5px 14px 0;
  border: solid 3px #4c5c9a;
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
