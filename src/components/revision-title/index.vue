<template>
  <div class="screen-title">
    <div class="title-icon">
      <img src="../../assets/revision/title-icon.png" alt="图标" />
    </div>
    <div class="title">
      <slot></slot>
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
.screen-title {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
  &.absolute-div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .title-icon {
    width: 46px;
    height: 34px;
    margin-left: 18px;
  }
  .title {
    font-size: 22px;
    font-family: 'PingFang Regular';
    font-weight: 800;
    color: #ffffff;
    margin-left: 12px;
    width: calc(100% - 18px - 46px - 12px);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
  }
}
</style>
