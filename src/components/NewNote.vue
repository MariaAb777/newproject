<template>
    <div class="new-note">
        <label class="labelTitle"> Title</label>
      <input v-model="note.title" type="text">
      <label class="labelDescription"> Description</label>
      <textarea  v-model="note.descr"></textarea>
      <button class="btn" @click="addNote">New Note</button>
    </div> 
</template>


<script>
export default {
  props: {
      note:{
          type: Object,
          required: true
      }
  },
  methods: {
      addNote (){
          this.$emit('addNote', this.note)
      }
  }
    
}
</script>

<style lang="scss" scoped>
.labelTitle{
      color: grey;
        font-size: 20px;
}
.labelDescription{
    padding-bottom: 20px;
      color: grey;
        font-size: 20px;
}
  .btn {
    width: 100px;
    height: 25px;
    margin-left: 50px;
    background-color:#D8D8D8;
    border: none;
    border-radius: 5px;
  }

</style>