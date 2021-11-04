<template>
  <div class="revision-center-bottom">
    <div class="radar">
      <div class="ripple"></div>
      <div class="ripple"></div>
      <div class="ripple"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'revision-center',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.revision-center-bottom {
  box-sizing: border-box;
  width: 100%;
  height: 26%;
  background: url('../../../../assets/revision/bac-bottom.png') no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.radar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  .ripple {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid red;
    animation: ripple 2s linear infinite;
  }
}
@keyframes ripple {
  to {
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}
.ripple:nth-child(1) {
  animation-delay: 0.666s;
}
.ripple:nth-child(2) {
  animation-delay: 1.322s;
}
</style>
