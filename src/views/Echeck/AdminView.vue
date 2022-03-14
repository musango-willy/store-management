<template>
  <div class="page-view">
    <div class="top-section">
      <router-link to="/admin/">
        <span class="fa fa-calendar"></span>
        <h2>dashboard</h2>
      </router-link>
      <router-link to="/admin/profits">
        <span class="fa fa-upload"></span>
        <h2>profits</h2>
      </router-link>
    </div>
    <hr>
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}
.top-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12%;
  background: #8ecae6;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5%;
    margin-right: 2px;
    text-decoration: none;
    min-width: 120px;
    height: 68%;
    transition: height 250ms ease,
      background 250ms ease;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.4rem;
      color: #fff;
      font-size: 20px;
      height: 100%;
      width: 30%;
    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.4rem;
      height: 100%;
      font-weight: 800;
      font-size: 16px;
    }
    &.router-link-exact-active {
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      background: #d8e2dc;

      h2 {
        color: #1f552b;
        text-transform: uppercase;
      }
      span {
        color: #1f552b;
      }
      &:hover {
        background: #d8e2dc;
      }
    }
    &:hover {
      background: #64b0d3;
    }
  }
}
hr {
  color: #000;
}
.bottom-section {
  width: 100%;
  height: 90%;
  background: #d8e2dc;
}

</style>

