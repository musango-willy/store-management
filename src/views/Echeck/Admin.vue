<template>
  <div class="page-view">
    <div class="top-section">

    </div>
    <div class="bottom-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
}
</script>

<style lang="scss" scoped>

::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(0,0,0,.5);
}
::-webkit-scrollbar-thumb {
  background: #269748;
  border-radius: 8px;
}
::-webkit-scrollbar-button {
  background: #000;
  height: 6px;
}

.page-view {
  display: block;
  overflow: hidden;
}
.top-section {
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #a4b2b4, #9d9e9e);
}
.bottom-section {
  margin-top: 7px;
  width: 100%;
  height: 80vh;
  overflow: auto;
  background: linear-gradient(-120deg,#9a9c9c, #9d9e9e);
}
</style>

