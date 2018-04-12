<template>
  <div>
    <header-component>
      <div>this is template body</div>
    </header-component>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .toast-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toast {
    width: 180px;
    height: 60px;
    line-height: 60;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.61);
    color: #fff;
  }
</style>
