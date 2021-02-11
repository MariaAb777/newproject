<template>
    <div class="login-page">
        <div class="login-header">
               <div class="text-block">
                   <router-link to="/Login" class="login-text">Log In</router-link>
               </div>
        </div>

        <div class="login-form">
            <div class="login-container">

                <p class="inform-text">UserName</p>
                <div class="input-group mb-3">
                    <input type="text"
                           class="form-control"
                           placeholder="username"
                           required="required"
                           :class="{'border border-danger':usernameError}"
                           v-model="form.username"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2">

                </div>
                <p class="inform-text" >Password</p>
                <div class="input-group mb-3">
                    <input type="password"
                           class="form-control"
                           placeholder="password"
                           required="required"
                           :class="{'border border-danger':passwordError}"
                           v-model="form.password"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2">
                </div>
                <div class="button-group">
                    <button  @click="login" type="button" class=" btn btn-outline-primary">Log In</button>
                    <button   @click="goTo('Register')" type="button" class="ctm-btn btn btn-outline-primary"  >
                        Register
                    </button>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        form: {
          username: '',
          password: '',
        },
        usernameError: false,
        passwordError: false,
      }
    },
    methods: {
      goTo(path){
        this.$router.push(path)
      },
      login () {
        if (this.validateUsername() && this.validatePassword()) {
          localStorage.setItem('user', JSON.stringify(this.form))
          this.$router.push({ name: '/YourPage' })
        }
      },
      validatePassword () {
        if (this.form.password === '' || this.form.password.length < 6) {
          this.passwordError = true
          return false
        }
        this.passwordError = false
        return true
      },
      validateUsername() {
        if (
          this.form.username === '' ||
          this.form.password.length < 4
        ) {
          this.usernameError = true
          return false
        }
        this.usernameError = false
        return true
      },
    },
  }
</script>

<style lang="scss" scoped>

    .login-page{

        .login-header{
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .login-text{
                font-size: 25px;
                color: #007bff;

            }
        }
        .login-container{
            padding: 30px 500px 0 500px;
        }

        .inform-text{
            color: rgba(0, 123, 255, 0.99);
        }
    button-group{
        display: inline-block;
        justify-content: space-around;
        align-items: center;

    }
        .ctm-btn{
            margin-left: 210px;
        }
    }





</style>