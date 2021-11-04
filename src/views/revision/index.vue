<template>
  <div class="revision-index">
    <revision-header></revision-header>
    <revision-content></revision-content>
  </div>
</template>

<script>
import revisionHeader from './revisionHeader'
import revisionContent from './revisionContent'
export default {
  name: 'revision-index',
  data () {
    return {}
  },
  created () {
    if (this.$route.query.token) {
      localStorage.setItem('token', this.$route.query.token)
    }
  },
  components: {
    revisionContent,
    revisionHeader
  }
}
</script>
<style lang="scss" scoped>
.revision-index {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
