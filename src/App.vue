<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <section>
          <div class="container">
             <!-- {{ title }} -->

             <div class="note-header">
              <h1 class="notes_title">{{ title }}</h1>
              <div>
            <!-- {{ message }} -->

            <message v-if="message" :message="message"> </message>

            <!-- {{ new note }} -->
            <newNote :note="note" @addNote="addNote"> </newNote>


            <!-- title -->
            
             <div class="note-header">
              <h1 class="notes_title">{{ title1 }}</h1>

              <div class="icons">
                    <button class="button_icon" :class="{active: grid}" @click="grid = true">Column</button>
                    <button class="button_icon"  :class="{active: !grid}" @click="grid = false">Grid</button>
              </div>
              </div>

              </div>
            </div>

            <!-- {{ note list }} -->
            <notes :notes="notes" :grid='grid' @remove="removeNote"> </notes>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import message from "./components/Message.vue";
import notes from "./components/Notes.vue";
import newNote from "./components/NewNote.vue";

export default {
  name: "App",
  components: {
    message,
    notes,
    newNote,
  },
  data() {
    return {
      title: "Notes App",
      title1: 'Notes',
      message: null,
      grid: true,

      note: {
        title: "",
        descr: "",
      },
      notes: [
        {
          title: "First Note",
          descr: "Description for 1 note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second Note",
          descr: "Description for 2 note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third Note",
          descr: "Description for 3 note",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      //  console.log(this.note)
      let { title, descr } = this.note;

      if (title === "") {
        this.message = "Title can not be blank!!";
        return false;
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      });
      (this.note.title = ""), (this.note.descr = ""), (this.message = null);
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
* {
  text-align: center;
}

.notes_title {
  font-size: 33px;
  color: #999;
  padding-top: 20px;
}
.new-note {
  display: grid;
  height: 120px;
  width: 200px;
  align-items: center;
  margin-left: 730px;

  input {
    margin-bottom: 20px;
    border: 1px gray solid;
    border-radius: 5px;
  }

  textarea {
    margin-bottom: 20px;
    border: 1px gray solid;
    border-radius: 5px;
  }
}
.notes {
  margin-top: 50px;
}
.button_icon{
           width: 100px;
    height: 25px;
    background-color:#D8D8D8;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    &.active{
      background-color:#6b6b6b;
    
    }
    }
</style>
