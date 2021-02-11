<template>
  <div id="main-page">
   <div class="main-header">
     <p class="logo-text">User CRM</p>
        <ul class="menu-block">
          <router-link to="/Home">Home</router-link>
          <router-link to="/Users">Users</router-link>
            <router-link to="/NotifyPage">Notify</router-link>
            <router-link to="/SearchPage">Search</router-link>
            <router-link to="/Login">Login</router-link>
            <router-link to="/Register">Register</router-link>
            <router-link to="/UserPage">Your Page</router-link>
        </ul>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {

  },
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
.main-header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
    padding: 30px;


  .logo-text{
    font-size: 20px;
    color: #007bff;
  }
}
  .menu-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 600px;
  }


</style>
