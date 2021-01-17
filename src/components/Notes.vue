<template>
    <div class="notes">
              <div class="note" :class="{full: !grid}" v-for="(note, index) in notes" :key="index">
                <div class="note-header" :class="{full: !grid}">  
                            <!-- for animation ?????? -->
                    <p class="x" style="cursor: pointer" @click="removeNote(index)">x</p>
                  <p>{{ note.title }}</p>
                  
                  
                  <div class="note-body">
                    <p>{{ note.descr }}</p>
                    <span>{{ note.date }} </span>
                  </div>
                </div>
              </div>
            </div>
</template>


<script>
export default {
    props: {
        notes:{
            type: Array,
            required: true
        },
        grid: {
             type: Boolean,
            required: true
        }
    },
    methods:{
        removeNote (index){
            console.log(`Note id- ${index} removed`);
            this.$emit('remove', index)
        }
    }
}
</script>

<style lang="scss" scoped>
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note{
    width: 46%;
    padding:  18px 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    &.full{
        width: 100%;
    }
}
.note-header{
    
    
    p{
        color: grey;
        font-size: 22px;
    }
    .x{
    color:red,
}


}


.note-body{
    
    p{
        margin: 20px 0;
    }
    span{
        font-size: 14px;
        color: #999;
    }
}



</style>