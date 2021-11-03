<template>
  <div class="wisdom-header">
    <!-- <div>V2X SERVER管理系统交通仿真模块</div> -->
    <div>沪杭甬智慧高速数字孪生实时在线管理系统</div>
    <div class="navgation" @click="navgationTo">后台</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'wisdomHeader'
    }
  },
  mounted () {},
  methods: {
    navgationTo () {
      window.open(
        // `http://172.17.204.221?token=${localStorage.getItem('token')}`,
        `http://172.17.204.221/big?token=${localStorage.getItem('token')}`,
        '_blank'
      )
    }
  }
}
</script>
<style scoped lang="scss">
.wisdom-header {
  box-sizing: border-box;
  width: 100%;
  height: 0.875rem;
  line-height: 0.875rem;
  background: #070e28;
  color: #fff;
  text-align: center;
  font-size: 0.5rem;
  position: relative;
  div {
    display: inline-block;
  }
  .navgation {
    position: absolute;
    right: 3%;
    top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.3rem;
    height: 0.55rem;
    font-size: 0.2rem;
    font-weight: bold;
    background: url('../../assets/nav.png') no-repeat center;
    background-size: 100% 100%;
    color: #12d0ff;
  }
}
</style>
