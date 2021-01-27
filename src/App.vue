<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Notte">Note</router-link> |
      <router-link to="/Modal">Modal</router-link>
    </div>

    <div class="wrapper">
      <div class="wrapper_content">
        <section>
          <div class="container">
            <button @click="modalFirst = !modalFirst" class="btn">Show first modal</button>
            <modal title="first modal"
                    v-if="modalFirst"
                    @close='modalFirst = !modalFirst'
                    
                    
                    >
                   
             </modal>
          </div>
        </section>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>


<script>
import modal from "./views/Modals/Modal.vue";

export default {
  name: "App",
  components: {
    modal,
  },
  data() {
    return {
      modalFirst: false,
    };
  },
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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
