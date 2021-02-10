<template>
    <div class="users">
        <div class="container">
            <table class="table">

                <thead>
                <tr>
                    <th @click="sort('name')">Name</th>
                    <th @click="sort('age')">Age</th>
                    <th @click="sort('gender')">Gender</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="index" v-for="(user,index) in usersSort">
                    <td scope="row">{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.gender}}</td>
                </tr>
                </tbody>
            </table>
            <p style="text-align: center">
                <span>  degub: sort:  {{currentSort}}, dir: {{currentSortDir}} </span>
            </p>
        </div>

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Users',
    data () {
      return {
        users: [],
        currentSort: 'name',
        currentSortDir: 'asc',
      }
    },
    computed: {
      usersSort () {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.users.sort((a, b) => {
          let modifier = 1
          if (this.currentSortDir === 'desc') {
            modifier = -1
          }
          if (a[this.currentSort] < b[this.currentSort]) {
            return -1 * modifier
          }
          if (a[this.currentSort] > b[this.currentSort]) {
            return 1 * modifier
          }
          return 0
        })
      },
    },
    methods: {
      async fetchUsers () {
        await axios.get('https://api.myjson.com/bins/rzgya').then(response => {
          // console.log(response.data)
          this.users = response.data
        }).catch(error => {
          console.log(error)
        })
      },
      sort: function (s) {
        if (s === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        }
        this.currentSort = s
      },
    },
    created () {
      this.users = [
        { id: 1, name: 'Jack', age: 22, gender: 'male' },
        { id: 2, name: 'Syuzan', age: 24, gender: 'female' },
        { id: 3, name: 'Lucy', age: 38, gender: 'female' },
        { id: 4, name: 'Mark', age: 26, gender: 'male' },

      ]
    }
  }
  //
  // }


</script>

<style lang="scss" scoped>
    .container {

        padding-top: 50px;

    }

</style>