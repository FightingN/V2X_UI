<template>
  <div class="screenTable">
    <div
      class="header"
      :style="{ '--ava': ava, '--headerHeightAva': headerHeightAva }"
      v-for="(item, indexs) in headerData"
      :key="'index' + indexs"
    >
      <div
        v-for="(value, key, index) in item"
        :key="key"
        :style="headerStyle[index]"
        :class="[legendText == value ? 'color4' : '']"
      >
        {{ value }}
      </div>
    </div>
    <div class="table-body">
      <div
        class="scroll-view"
        id="scroll-view"
        :style="{ top: top, transition: transition }"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <div
          class="tableContent"
          v-for="(item, index) in tableContent"
          :key="index"
          :style="{
            '--ava': ava,
            '--tableContentAva': tableContentAva,
            border: index + 1 == tableContent.length ? 'none' : ''
          }"
        >
          <div
            v-for="(value, key, index) in item"
            :key="index"
            :style="tableContentStyle[index]"
            :class="[
              value == 1 ? 'color1' : '',
              value == 2 ? 'color2' : '',
              value == 3 ? 'color3' : ''
            ]"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'screen-table',
  data () {
    return {
      interval: null,
      top: 0,
      scrollTime: 0,
      transition: 'top 1s linear'
    }
  },
  props: {
    headerData: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            text1: '排名',
            text2: '姓名',
            text3: '所属支部',
            text4: '所属社区',
            text5: '群成员数',
            text6: '话题数',
            text7: '参与人次',
            text8: '议题数'
          }
        ]
      }
    },
    tableContent: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            sort: 1,
            name: '张三',
            name1: '云台社区',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 2,
            name: '李四',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 3,
            name: '王五',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 4,
            name: '杨芸',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 5,
            name: '魏守强',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 6,
            name: '李萍',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 7,
            name: '张宇',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 8,
            name: '张宇',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          },
          {
            sort: 9,
            name: '张宇',
            name1: '云台社区党委',
            name2: '良丰村社区',
            name3: '100',
            name4: '99',
            name5: '100',
            name6: '1200'
          }
        ]
      }
    },
    // 表格平均分的份数
    ava: {
      type: Number,
      default: 8
    },
    // 表头高度--默认占比10%
    headerHeightAva: {
      type: String,
      default: '10%'
    },
    // 表格主体平均分成的份数
    tableContentAva: {
      type: Number,
      default: 5
    },
    // 单独给头部设置样式
    headerStyle: {
      type: Array,
      default: () => {
        return [
          // {
          //   width:'200px',
          //   border:'1px solid red'
          // },
          // {
          //   width:'200px'
          // }
        ]
      }
    },
    // 单独给内容设置样式
    tableContentStyle: {
      type: Array,
      default: () => {
        return [
          // {
          //   width:'200px',
          //   border:'1px solid red'
          // },
          // {
          //   width:'200px'
          // }
        ]
      }
    },
    // 没有下边框
    onborder: {
      type: Number,
      default: 4
    },
    legendText: {
      type: String,
      default: ''
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.scrollView()
    }, 5000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    scrollView () {
      //   this.tableContent.push(this.tableContent[0]); //把第一条数据插入数组最有一条
      //   this.tableContent.shift(); //删除数组中第一条数据
      if (this.scrollTime < Math.floor(this.tableContent.length / 5)) {
        this.transition = 'top 1s linear'
        this.scrollTime += 1
        this.top = `-${100 * this.scrollTime}%`
      } else {
        this.transition = 'top 1s ease-in-out'
        this.top = '0px'
        this.scrollTime = 0
      }
    },
    mouseEnter () {
      clearInterval(this.interval)
    },
    mouseLeave () {
      this.interval = setInterval(() => {
        this.scrollView()
      }, 5000)
    }
  }
}
</script>
<style scoped lang="scss">
.screenTable {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .header {
    height: var(--headerHeightAva);
    display: flex;
    font-size: 18px;
    color: #2a70e1;
    text-align: center;
    div {
      width: calc(100% / var(--ava));
    }
  }
  .table-body {
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;
    .scroll-view {
      width: 100%;
      height: 100%;
      position: relative;
      left: 0px;
      top: 0px;
    }
  }
  .tableContent {
    box-sizing: border-box;
    height: calc(100% / var(--tableContentAva));
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.26);
    div {
      width: calc(100% / var(--ava));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .color1 {
      color: #f42323;
    }
    .color2 {
      color: #ff7f47;
    }
    .color3 {
      color: #ffaf47;
    }
  }
  .color4 {
    color: #01d8e0;
  }
}
</style>
