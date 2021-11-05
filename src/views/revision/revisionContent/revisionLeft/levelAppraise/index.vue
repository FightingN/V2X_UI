<template>
  <div class="level-appraise">
    <revision-title>路段服务水平评价</revision-title>
    <div class="level-appraise-content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in levelList" :key="index">
          <div class="item">
            <div class="item-title">{{ item.name }}</div>
            <div class="item-level">服务水平</div>
            <div class="item-grade">{{ item.grade }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'level-appraise',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 2500
        }
      },
      levelList: [
        { name: '红垦枢纽-机场互通-宁波方向', grade: 'A' },
        { name: '红垦枢纽-机场互通-杭州方向', grade: 'A' },
        { name: '红垦枢纽-机场互通-宁波方向', grade: 'A' },
        { name: '路网', grade: 'B' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.level-appraise {
  box-sizing: border-box;
  width: 100%;
  height: 24.8%;
  font-family: 'PingFang SC';
  &-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 50px);
    .swiper-container {
      box-sizing: border-box;
      width: 100% !important;
      height: 100% !important;
      .swiper-slide {
        box-sizing: border-box;
        width: 100% !important;
        height: calc(100% / 3 - 10px) !important;
        padding: 0 35px 0 50px;
        .item {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: space-between;
          &-title {
            width: 70%;
            font-size: 18px;
            font-weight: 300;
            color: #fff;
            border-right: 1px solid rgba(255, 255, 255, 0.4);
          }
          &-level {
            font-size: 14px;
            font-weight: 200;
            color: #fff;
          }
          &-grade {
            font-size: 30px;
            font-weight: 400;
            color: #00f0ff;
          }
        }
      }
    }
  }
}
</style>
