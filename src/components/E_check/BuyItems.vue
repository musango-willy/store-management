<template>
  <div class="page">
      <div class="icons">
          <span class="fa fa-print"></span>
      </div>
      <div class="btn">
          <button>Buy Items</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "BuyOut",

}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 4px;
    height: 100%;
    width: 100%;
}
.btn {
    padding: 0 8px;
    button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 1000;
        color: #fff;
        letter-spacing: 1px;
        background: rgba(0, 52, 94, 0.7);
        cursor: pointer;
        transition: background 250ms ease-in-out,
            transform 250ms ease-in-out;

        &:hover {
            background: rgba(0, 52, 94);
            transform: scale3d(1.1, 1.2, .9);
        }
    }
}

</style>