<template>
  <div class="service-level">
    <div class="title">
      <span>服务水平 B级</span>
      <span class="right">拥堵路段占比：10%</span>
    </div>
    <div class="content">
      <div class="top">
        <span class="speed">平均车速</span>
        <div>
          <span class="div1"></span>
          <span class="div2"></span>
        </div>
        <span class="speed">106km/h</span>
      </div>
      <div class="top bottom">
        <span class="speed">大车混入率</span>
        <div>
          <span class="div1"></span>
          <span class="div2"></span>
        </div>
        <span class="speed">0.4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceLevel',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.service-level {
  box-sizing: border-box;
  width: 856px;
  height: 257px;
  color: #fff;
  background-color: #0c1427;
  border: solid 3px #4c5c9a;
  padding: 5px 14px 0;
  margin-top: 20px;
  .title {
    margin-bottom: 20px;
    span {
      font-family: AdobeHeitiStd-Regular;
      font-size: 35px;
      font-weight: normal;
    }
    .right {
      margin-left: 80px;
    }
  }
  .content {
    .top {
      display: flex;
      .speed {
        font-size: 28px;
      }
      .div1 {
        width: 450px;
        height: 40px;
        background: rgba(43, 98, 191, 0.1);
        display: inline-block;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
        position: relative;
      }
      .div2 {
        width: 350px;
        height: 40px;
        background: #2b62bf;
        display: inline-block;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
        position: absolute;
        left: 150px;
      }
    }
    .bottom {
      margin-top: 35px;
      .div2 {
        width: 200px;
        background: #b5954a;
      }
    }
  }
}
</style>
