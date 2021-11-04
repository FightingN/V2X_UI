<template>
  <div class="revision-content">
    <revision-left></revision-left>
    <div class="revision-center">
      <revision-map></revision-map>
      <revision-center-bottom></revision-center-bottom>
    </div>
    <revision-right></revision-right>
  </div>
</template>

<script>
import revisionLeft from './revisionLeft'
import revisionRight from './revisionRight'
import revisionMap from './revisionMap'
import revisionCenterBottom from './revisionCenterBottom'
export default {
  name: 'revision-content',
  components: {
    revisionLeft,
    revisionRight,
    revisionMap,
    revisionCenterBottom
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.revision-content {
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  padding: 0 18px 10px 18px;
  position: relative;
  .revision-center {
    box-sizing: border-box;
    width: calc(47.6% - 16px);
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 7px 0 9px;
  }
}
</style>
