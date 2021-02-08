<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Logged">Your Page</router-link> |
      <router-link to="/AboutUs">About us</router-link>

    </div>

    <MainModal> </MainModal>

    <router-view></router-view>
  </div>


</template>


<script>



import MainModal from './views/Modals/MainModal'

export default {
  name: "App",
  components: {


    MainModal
  },
  data() {
    return {


    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .main-btn{
    height: 25px;
    width: 110px;
    border-radius: 5px;
    border-color: #999999;
  }


</style>
