<template>
  <div class="wisdom-map">地图</div>
</template>
<script>
export default {
  data () {
    return {
      name: 'wisdomMap'
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-map {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid black;
  padding: 30px;
  background: rgba(0, 0, 0, 1);
}
</style>
