<template>
  <div class="shade" :class='position'>
    <transition name='fade'>
      <div v-show='visible'  class='toast'>
        <div class=" img-box box horizontal-center vertical-center ">
          <img v-if="success" src="../assets/images/cg@2x.png">
          <img v-else src="../assets/images/zanwu@1.5x.png">
        </div>
        <div>{{message}}</div>
      </div>
    </transition>
  </div>
</template>

<script type="es6">
export default {
  data() {
    return {
      visible: false,
      message: "",
      position: "",
      success: false
    };
  }
};
</script>


 <style lang="less" scoped>
.shade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .toast {
    /* position: absolute;
                left: 50%;
                transform: translate(-50%, -200%) scale(1);
                -webkit-transform: translate(-50%, -200%) scale(1); */
    word-wrap: break-word;
    text-align: center;
    z-index: 9999;
    font-size: 1rem;
    width: 8.75rem;
    min-height: 8.125rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    font-family: PingFangSC-Regular;
    color: #ffffff;
    letter-spacing: 0;
    padding-bottom: 1rem;
    margin: 0 auto;
  }
}

.middle {
  padding-top: 40%;
}
.top {
  padding-top: 10%;
}
.bottom {
  padding-top: 90%;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
.img-box {
  height: 5.625rem;
  width: 100%;
}
.img-box img {
  width: 3.125rem;
}
</style>
