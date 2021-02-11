<template>
    <div class="register-page">
        <div class="register-header">
            <div class="text-block">
                <router-link to="/Register" class="register-text">Register</router-link>
            </div>
        </div>

        <div class="register-form">
            <div class="register-container">

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
                <p class="inform-text" >Email</p>
                <div class="input-group mb-3">
                    <input type="email"
                           class="form-control"
                           placeholder="email"
                           required="required"
                           :class="{'border border-danger':emailError}"
                           v-model="form.email"
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
                    <button  @click="register" type="button" class=" btn btn-outline-primary"  >
                        Register
                    </button>
                    <button @click="goTo('Login')"  type="button" class="ctm-btn btn btn-outline-primary">Log In</button>

                </div>
            </div>


        </div>

    </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        form: {
          username: '',
          password: '',
          email: ''
        },
        usernameError: false,
        passwordError: false,
        emailError: false,
      }
    },
    methods: {
      goTo(){
        this.$router.push('/')
      },
      register () {
        if (this.validateUsername() && this.validateEmail() && this.validatePassword())   {
          localStorage.setItem('user', JSON.stringify(this.form))
          this.$router.push({ name: 'YourPage' })
        }
      },
      validateUsername() {
        console.log('usernameeee')
        if (this.form.username === '' || this.form.username.length < 4) {
          this.usernameError = true
        } else {
          this.usernameError = false
        }
        return !this.usernameError
      },
      validatePassword () {
        console.log('passwordd')
        if (this.form.password === '' || this.form.password.length < 6) {
          this.passwordError = true
        } else {
          this.passwordError = false
        }
        return !this.passwordError
       },
      validateEmail () {
        console.log('emailllllllllllll')
        if (
          this.form.email === '' ||
          !/(.+)@(.+){2,}\.(.+){2,}/.test(this.form.email)
        ) {
          this.emailError = true
        } else {
          this.emailError = false
        }
        return !this.emailError
      },

    },
  }
</script>

<style lang="scss" scoped>

    .register-page{

        .register-header{
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .register-text{
                font-size: 25px;
                color: #007bff;

            }
        }
        .register-container{
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