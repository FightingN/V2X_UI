<template>
  <div class="pollutant-emission">
    <revision-title>污染物排放</revision-title>
    <div class="pollutant-emission-content">
      <div class="left">
        <div class="num">20g</div>
        <div class="title">可吸入颗粒排放量</div>
      </div>
      <div class="right">
        <div class="num">20g</div>
        <div class="title">氮氧化物排放量</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pollutant-emission',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.pollutant-emission {
  box-sizing: border-box;
  width: 100%;
  height: 19.4%;
  font-family: 'PingFang SC';
  &-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: space-around;
    .left {
      width: 156px;
      height: 80px;
      background: url('../../../../../assets/revision/wuranwu1.png') no-repeat
        center;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      .num {
        font-size: 16px;
        font-weight: 400;
        color: #1afcff;
      }
      .title {
        font-size: 8px;
        font-weight: 400;
        color: #ffffff;
        position: absolute;
        bottom: -30px;
      }
    }
    .right {
      width: 156px;
      height: 80px;
      background: url('../../../../../assets/revision/wuranwu2.png') no-repeat
        center;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      .num {
        font-size: 16px;
        font-weight: 400;
        color: #1afcff;
      }
      .title {
        font-size: 8px;
        font-weight: 400;
        color: #ffffff;
        position: absolute;
        bottom: -30px;
      }
    }
  }
}
</style>
