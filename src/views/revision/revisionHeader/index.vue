<template>
  <div class="revision-header">
    <div class="header-title">沪杭甬智慧高速数字孪生实时在线管理系统</div>
  </div>
</template>

<script>
export default {
  name: 'revision-header',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.revision-header {
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background: url('../../../assets/revision/header.png');
  .header-title {
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(0deg, #07dcee 0%, #e0eaff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 44px;
    font-family: 'Source Han Sans CN';
    font-weight: bold;
    color: #9abcff;
  }
}
</style>
