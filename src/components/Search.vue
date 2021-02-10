<template>
    <div class="wrapper__search">

        <div class="input-group mb-3">
            <input type="text"  v-model="search" class=" form-control" placeholder="Type here" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class=" csm-btn btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>

    </div>
</template>

<script>
  export default {
    props: {
      // value: {
      //   type: String,
      //   required: true
      // },
      placeholder: {
        type: String,
        default: 'Search'
      }
    },
    data () {
      return { search: this.value }
    },
    watch: {
      search (val) {
        // console.log(val)
        this.$emit('search', val);
      }
    }
  }
</script>

<style scoped>

    .wrapper__search{
        padding: 30px;
        width: 500px;
        margin-left: 400px;

    }
        .csm-btn{
            color: #007bff;
        }



</style>


