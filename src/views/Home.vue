
<template>
  <div id="app">

    <Todos v-bind:todos="todos" v-bind:user="user" />
    
  </div>
</template>

<script>

import Vue from 'vue'
import Todos from '../components/Todos';
//import Lessons from '../components/Lessons';
import Header from '../components/layout/Header.vue';
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

export default {
  name: 'Home',
  components: {
    Todos,
    Header,
  },
  props: [
    "user"
  ],
  data() {
    return {
      todos: []
    }
  },

  async created() {
    try{
    let res = await axios.get('https://demo.iyogera.com/api/live_lesson')
      this.todos = res.data.data
      
    }catch(err){(err)
      }
    }
    
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
