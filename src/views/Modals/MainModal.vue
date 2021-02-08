<template>
    <div class="wrapper">
        <div class="wrapper_content">
            <section>
                <div class="container">
                    <button @click="modalValidate = !modalValidate" class="main-btn">
                        Click to Log in
                    </button>
                    <ModalValidate v-show="modalValidate" @close="modalValidate=false">

                    </ModalValidate>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
  import ModalValidate from './ModalValidate'


  export default {
    name: 'MainModal',
    components: {

      ModalValidate,

    },
    data() {
      return {

        modalValidate : false
      };
    },

  }
</script>

<style scoped>

</style>