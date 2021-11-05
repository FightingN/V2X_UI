<template>
  <div class="service-level">
    <revision-title>G92服务水平 A级</revision-title>
    <div class="service-level-content">
      <div
        class="statistics-item"
        v-for="(item, index) in statisticsList"
        :key="index"
        :style="{
          background: `url(${item.bg}) no-repeat`,
          backgroundSize: '100% 100%'
        }"
      >
        <div class="num">{{ item.value }}</div>
        <div class="tip">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { numAnimation } from 'utils/common'
export default {
  name: 'service-level',
  data () {
    return {
      statisticsList: [
        {
          bg: require('assets/revision/speed.png'),
          label: '平均车速',
          value: 0
        },
        {
          bg: require('assets/revision/bigCar.png'),
          label: '大车混入率',
          value: 0
        }
      ]
    }
  },
  created () {
    numAnimation(
      this.statisticsList[0].value,
      5690,
      this.statisticsList[0],
      'value'
    )
    numAnimation(
      this.statisticsList[1].value,
      2301,
      this.statisticsList[1],
      'value'
    )
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.service-level {
  box-sizing: border-box;
  width: 100%;
  height: 28%;
  font-family: 'PingFang SC';
  &-content {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    .statistics-item {
      width: 334px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding-left: 150px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 50px;
        top: 20px;
        left: 130px;
        background: linear-gradient(to bottom, #0c2b68, #3970a5, #0c2b68);
      }
      .num {
        font-size: 26px;
        font-family: 'PingFang Regular';
        font-weight: bold;
        color: #fff;
      }
      .tip {
        font-size: 14px;
        // line-height: 28px;
        font-family: 'PingFang Regular';
        font-weight: 400;
        color: rgba(255, 255, 255, 0.76);
      }
      & + .statistics-item {
        margin-top: 3%;
      }
    }
  }
}
</style>
