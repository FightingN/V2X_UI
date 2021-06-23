<template>
  <div class="wisdom-box">
    <wisdom-header></wisdom-header>
    <wisdom-content></wisdom-content>
  </div>
</template>

<script>
import wisdomContent from './wisdomContent'
import wisdomHeader from './wisdomHeader'
export default {
  name: 'wisdom-box',
  data () {
    return {}
  },
  created () {
    if (this.$route.query.token) {
      localStorage.setItem('token', this.$route.query.token)
    }
  },
  components: {
    wisdomContent,
    wisdomHeader
  }
}
</script>
<style lang="scss" scoped>
.wisdom-box {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>
