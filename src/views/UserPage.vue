<template>
    <div class="userpage">
       <div class="user-left-container">
           <div class="card" style="width: 18rem;">
               <img  class="card-img-top" alt=""><img src="../assets/pr.jpg" height="200" width="200"/><img/>
               <div class="card-body">
                   <h5 class=" user-name card-title" data-bs-toggle="tooltip" data-bs-placement="right" title="UserName">User Name</h5>
                   <p class="card-text">About user...</p>
               </div>
               <ul class="list-group list-group-flush">
                   <li class=" online-class list-group-item">Online</li>
                   <li class="list-group-item">Age</li>
                   <li class="list-group-item">Gender</li>
               </ul>
           </div>
       </div>
        <div class="user-right-container">
              <p>Messages</p>
              <p>About You</p>
              <p>Edit your profile</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'UserPage',
  }
</script>

<style lang="scss" scoped>

    .userpage{
        display: flex;
        justify-content: space-around;
        padding-top: 30px;
        height: 600px;
        width: 50%;
        margin-left: 350px;
        color: #007bff;
        .user-name{
            color: black;
        }
        .online-class{
            color: green;
        }
    }

</style>