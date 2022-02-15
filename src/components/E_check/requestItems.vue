<template>
  <div class="item-list">
    <div class="ul-lists">
      <ul>
        <li>
          <span>Mumias Sugar</span>
          <span>100 g</span>
          <span>Ksh. 60</span>
          <span class="fa fa-add"></span>
        </li>
        <li>
          <span>Mumias Sugar</span>
          <span>100 g</span>
          <span>Ksh. 60</span>
          <span class="fa fa-add"></span>
        </li>
        <li>
          <span>Mumias Sugar</span>
          <span>100 g</span>
          <span>Ksh. 60</span>
          <span class="fa fa-add"></span>
        </li>
        <li>
          <span>Mumias Sugar</span>
          <span>100 g</span>
          <span>Ksh. 60</span>
          <span class="fa fa-add"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "ListItems",
    data() {
      return {
        noItem: false,
      }
    },

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item-list {
  height: 100%;
  overflow-y: auto;
}
.ul-lists {
  padding: 4px 8px;
  width: 99%;
  height: 100%;
  background: #abc;
  border-radius: 4px;
  box-shadow: 0 0 2px #000;

  ul {
    list-style: none;
    // width: 100%;
    background: linear-gradient(to right, #92afb9, #a3c9b4);

    li {
      margin: 2px 0;
      display: flex;
      align-items: center;
      // width: 100%;
      height: 45px;
      border: 1px solid #000;
      cursor: pointer;
      

      span {
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 600;
        &:nth-child(1) {
          padding: 0 8px;
          width: 250px;
        }
        &:nth-child(2), &:nth-child(3) {
          padding: 0 8px;
          width: 100px;
        }
        &:last-child {
          justify-content: center;
          margin: 2px;
          width: 40px;
          
          
        }
      }
      &:nth-child(1) {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover {
        transition: background 250ms ease,
          transform 250ms ease,
          height 250ms ease,
          filter 250ms ease;
        background: #92afb9;
        height: 48px;
        transform: scale(1.02);
        filter: brightness(10px);
      }
    }
  }
}


</style>