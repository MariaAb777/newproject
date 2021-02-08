<template>
  <div class="logged">
     <div class="logged-header">

         <router-link  class="name-page" to="/Logged">Page</router-link>
       <ul class="menu-ul">
           <router-link to="/PagePhotos">Your Photos</router-link>
           <router-link to="/AccountMessages">Messages</router-link>
           <router-link to="/AboutYou">About You</router-link>
       </ul>
         <router-view></router-view>
     </div>


      <div class="main">
          <div class="left-main">

<!--              <div class="photo-logo">-->

<!--              </div>-->

          </div>
          <div class="right-main">
              <p> Edit your profile</p>
          </div>
      </div>
    
  </div>
</template>


<script>


export default {
  name: 'Logged',

  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
    a {
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
.logged-header {

    .name-page{

        color: #42b983;
        text-decoration: none;

    }

    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .menu-ul {

        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        list-style-type: none;
    }
}
.main{
display: flex;
    justify-content: space-evenly;
    align-items: center;
    .left-main{




        .photo-logo{
            height: 130px;
            width: 130px;
            border-radius: 50%;
            border: 1px solid black;
           margin-left: -140px;
            margin-top: 70px;
        }
        .userName{
            margin-left: -150px;
        }
        .email{
            margin-left: -170px;
        }
        .age{
            margin-left: -170px;
        }

    }
    .right-main{

    }



}



</style>
