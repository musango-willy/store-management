<template>
  <div class="page-view">
      <div class="links-section">
          <router-link to="/products"><span class="fa fa-list"></span> dashboard</router-link>
          <router-link to="/products/addProducts"><span class="fa fa-add"></span>products</router-link>
      </div>
      <div class="content-section">
        <router-view />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-view {
    display: flex;
    flex-direction: column;
    // width: 100%;
    height: 100%;
    overflow-y: auto;
}
.links-section {
    display: flex;
    width: 100%;
    height: 10%;
    border-bottom: 1.2px solid #888;
    justify-content: center;
    align-items: center;
    background: #8ecae6;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 68%;
        margin-top: 3%;
        margin-bottom: 1.2%;
        min-width: 7rem;
        margin-right: 4px;
        text-decoration: none;
        font-size: 20px;
        padding: 0 6px;
        // background: #abc;

        span {
            margin: 0 4px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &.router-link-exact-active {
            background: #d8e2dc;
            color: #1d3557;
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0.8rem;
        }
    }
}
.content-section {
    background: #d8e2dc;
}
</style>