<template>
  <div class="page" id="page-print">
      <div class="icons">
          <span class="fa fa-print"></span>
      </div>
      <div class="btn">
          <button @click="$emit('submitReceipt')">Buy Items</button>
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
    justify-content: space-evenly;
    align-items: center;
    padding: 4px;
    height: 100%;
    width: 100%;
}
.icons {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a0a7acec;
    height: 50%;
    width: 30px;
    border-radius: 20%;
    cursor: pointer;
    transition: background 250ms ease-in-out,
        transform 250ms ease-in-out;
    &:hover {
        background: #508074ec;
        transform: scale3d(1.3, 1.1, 1.1);
    }
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