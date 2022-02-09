<template>
  <Layout />
</template>

<script>
import Layout from "@/components/Layout"
export default {
  components: {
    Layout,
  },
  
}
</script>

<style lang="scss">
* {
  margin: 0%;
  padding: 0;
  font-size: 15px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: bold;
  color: #fff;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
