<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Logged">Your Page</router-link> |
      <router-link to="/Modal">About us</router-link>
    </div>

    <div class="wrapper">
      <div class="wrapper_content">
        <section>
          <div class="container">
            <button @click="modalValidate = !modalValidate" class="btn">
              Click to Log in
            </button>
            <ModalValidate v-show="modalValidate" @close="modalValidate=false">

            </ModalValidate>
          </div>
        </section>
      </div>
    </div>
    <!-- <router-view/> -->

  </div>


</template>


<script>


import ModalValidate from './views/Modals/ModalValidate'

export default {
  name: "App",
  components: {

    ModalValidate
  },
  data() {
    return {
      modalSecond: {
         show: false,
        name: '',
        email: ''
      },
      modalValidate : false
    };
  },
  methods:{
    submitSecondForm(){
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email =''
      this.modalSecond.show = false

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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
