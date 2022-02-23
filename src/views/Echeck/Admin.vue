<template>
  <div class="page-view">
    <div class="top-section">

    </div>
    <div class="bottom-section">
      <AdminHome />
    </div>
  </div>
</template>

<script>
import AdminHome from "@/components/Charts/AdminHome"
export default {
  name: "Admin",
    components: {
      AdminHome
    }
}
</script>

<style lang="scss" scoped>
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
  // border-radius: 4px;
  background: linear-gradient(-120deg,#9a9c9c, #9d9e9e);
}
</style>

