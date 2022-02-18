<template>
  <div class="page-view">
      <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.page-view {
    position: fixed;
    top: 54%;
    left: 30%;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transform: translateX(-50%), translateY(-50%);
    background: #8c8f8c;
}


.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 45px;
  height: 45px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>