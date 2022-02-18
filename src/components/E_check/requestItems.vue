<template>
  <div class="item-list">
    <div class="ul-lists" v-show="itemsPresent">
      <transition-group name="item-list">
        <ul
          v-for="(item, index) in requestedFound" :key="index"
        >
          <li @dblclick="$emit('selectItem', index)">
            <span>{{item.name}}</span>
            <span>{{item.quantity_category}}</span>
            <span>Ksh. {{item.price}}</span>
            <span class="fa fa-add"></span>
          </li>
        </ul>
      </transition-group>
    </div>
    <div class="alternative" v-show="itemsNotPresent">
      <p>no products searched yet ...</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "ListItems",
    props: {
      itemsFound: Object,
      noItem: Boolean,
    },
    computed: {
      itemsPresent() {
        return this.noItem;
      },
      itemsNotPresent() {
        return !this.noItem;
      },
      requestedFound() {
        return this.itemsFound;
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
.item-list-enter-active,
.item-list-leave-active {
  transition: all 0.5s ease;
}
.item-list-enter-from,
.item-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.item-list {
  height: 100%;
  overflow-y: auto;
}
.ul-lists {
  padding: 4px 8px;
  width: 100%;
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
          width: 50%;
        }
        &:nth-child(2), &:nth-child(3) {
          padding: 0 8px;
          width: 20%;
        }
        &:last-child {
          justify-content: center;
          margin: 2px;
          width: 10%;
          
          
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

.alternative {
  display: inline-flex;
  // justify-content: center;
  // align-items: center;
  margin: 0 8px;
  padding: 8px 4px;
  max-height: 100%;
  width: 92%;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(to bottom, #b6b6b9, #7c8791f3);

  p {
    display: flex;
    width: 100%;
    height: 20px;
    overflow: hidden;
    flex-wrap: nowrap;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    animation: scrolling 10s linear infinite;

    @keyframes scrolling {
      0% {
        transform: translateX(50%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
}

</style>