<template>
  <div class="page-view">
    <div class="products_table">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Category Groups</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody v-for="(cat, index) in category" :key="index">
          <tr>
            <td>{{index + 1}} .</td>
            <td>{{cat.name}}</td>
            <td>
              <div class="catitems"
                v-for="(catgroup_items, count) in cat.category_group" :key="count"
              >
                <ul>
                  <li>{{catgroup_items.name}}</li>
                </ul>
                <!-- <p><span>.</span>{{catgroup_items.name}}</p> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      category: [],
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const res = await axios.get('group_relations')
        this.category = res.data;
      } catch(e) {
        console.error(e);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-view {
  padding: 8px;
  display: flex;
  // justify-content: center;
  align-items: center;
  min-height: 82.5vh;
}
.products_table {
  width: 100%;
  margin: 2rem 0;

  table {
    display: flex;
    flex-direction: column;
    width: 80%;

    thead, tbody {
      width: 100%;
      display: flex;
      tr {
        display: flex;
        width: 100%;
        th, td {
          &:nth-child(1) {
            display: flex;
            justify-content: center;
            width: 8%;
          }
          &:nth-child(2) {
            width: 30%;
          }
          &:nth-child(3) {
            width: 62%;
          }
        }
      }
    }
    thead {
      height: 4rem;
      background: #4ea8de;
      color: #fff;
      border-top-left-radius: 8px;
      tr {
        display: flex;
        align-items: center;
        height: 100%;
        th {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 20px;
          font-weight: 800;
        }
      }
    }
    tbody {
      // min-height: 5rem;
      tr {
        min-height: 5rem;
        border: 1px solid #000;
        border-top: none;
        td {
          &:nth-child(1) {
            padding-top: 1rem;
            font-size: 18px;
            font-weight: 700;
            background: #e8f0ec;
          }
          height: 100%;
          &:nth-child(2) {
            display: flex;
            align-items: center;
            padding-left: 1.4rem;
            font-size: 20px;
            font-weight: 700;
          }
          &:nth-child(3) {
            display: flex;
            align-items: center;
            flex-direction: column;
            background: #e2f3e9;
          }
        }
      }
    }
  }
}
.catitems {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 2rem;

  ul {
    margin-top: 1rem;
    // height: 100%;
    li {
      height: 3rem;
      font-size: 18px;
      font-weight: 540;
      font-style: oblique;
    }
  }


  // p {
  //   margin: 1rem 8px;
  //   font-size: 18px;
  //   font-weight: 550;
  //   font-style: oblique;
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   align-items: flex-start;
  //   // justify-content: flex-start;
  //   span {
  //     // height: 100%;
  //     margin-right: 0.5rem;
  //     margin-bottom: 0.4rem;
  //     display: flex;
  //     font-size: 22px;
  //   }
  // }
}
</style>