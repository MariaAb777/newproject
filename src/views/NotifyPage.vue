<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">

                <!-- wrapper -->
                <div class="notify__wrapper">

                    <!-- title -->
                    <div class="notify-title">
                        <p>Notify App</p>
                        <svg @click="getNotifyLazy" version="1.1"  width="20px" height="20px" cursor="pointer" x="0px" y="0px" viewBox="0 0 489.935 489.935" style="enable-background:new 0 0 489.935 489.935;"></svg>

                    </div>

                    <!-- notify -->
                    <div class="notify__content">

                        <!-- preloader -->
                        <preloader v-if="loading" :width="90" :height="90"/>

                        <!-- erorr -->
                        <div class="error" v-if="error">
                            <p>{{ error }}</p>
                        </div>

                        <!-- notify -->
                        <notify v-if="!loading && !error" :messages="messages"/>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import axios from 'axios'
  import notify from '../components/Notify.vue'

 import preloader from '../components/UI/Preloader'

  export default {
    components: {
      notify,
      preloader
    },
    data () {
      return {
        loading: false,
        error: null
      }
    },
    mounted () {
      this.getNotify()
    },
    computed: {
      messages () {
        return this.$store.getters.getMessageMain
      }
    },
    methods: {
      getNotifyLazy () {
        this.loading = true
        setTimeout (() => {
          this.getNotify()
        }, 1800)
      },
      getNotify () {
        this.loading = true
        axios
        .get('')
        .then(reseponse => {
          let res = reseponse.data.notify,
            messages = [],
            messagesMain = [];

          // filter
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) messagesMain.push(res[i])
            else messages.push(res[i])
          }

          this.$store.dispatch('setMessage', messages)
          this.$store.dispatch('setMessageMain', messagesMain)
        })
        .catch(error => {
          console.log(error)
          this.error = 'Error: Network Error'
        })
        .finally( () => (this.loading = false))
      }
    }
  }
</script>


<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }

    .notify__wrapper {
        width: 400px;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
    }

    .notify__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 300px;
    }

    .notify-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 24px;
        }
    }

</style>
