<template>
    <div>
        <modal
                title="Log In"
                @close="$emit('close')"
        >
            <div slot="body">

                <form @submit.prevent="">
                    <div class="form-item" :class="{errorInput: $v.name.error }">
                        <label>Name: </label>
                        <p class="errorText1" v-if="!$v.name.required">File the name</p>
                        <p class="errorText" v-if="!$v.name.minLength">Name must contain min {{$v.name.$params.minLength.min}} symbols</p>
                        <input  v-model="name"
                        :class=" {error: $v.name.$error }"

                        >

                    <div >
                        <label>Email: </label>
                        <p class="errorText1" v-if="!$v.email.required">File the name</p>
                        <p class="errorText" v-if="!$v.email.email">This board must be mail</p>
                        <input   v-model="email"
                                 :class=" {error: $v.email.$error }">
                    </div>
                    <button class="btn">
                       Log In
                    </button>
                    </div>
                </form>
            </div>


        </modal>

    </div>
</template>

<script>
  import modal from './Modal.vue'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  export default {
    name: 'ModalValidate',
    components: {
      modal
    },
    data(){
      return{
        name: '',
        email:''
      }
    },
    validations:{
      name: {
        required,
        minLength: minLength(6)
      },
      email:{
         required,
         email
      }
    },


  }
</script>

<style lang="scss" scoped >
.form-item .errorText {
    color: #ff0000;
    font-size: 13px;
}
.form-item {
    .errorInput .errorText {
        display: block;
    }
}
    input.error{
        border-color: red;
    }
    .errorText1{
        color: black;

font-size: 13px    }
    .btn{
        margin-top: 10px;
    }
</style>