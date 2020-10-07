
<template>
  <div id="app">

    <Todos v-bind:todos="todos" />
    
  </div>
</template>

<script>

import Vue from 'vue'
import Todos from '../components/Todos';
//import Lessons from '../components/Lessons';
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

export default {
  name: 'Home',
  components: {
    Todos,
    
    
  },
  data() {
    return {
      todos: []
    }
  },

  async created() {
    try{
    let res = await axios.get('https://iyogera.dev/iyogera2/api/live_lesson')
      this.todos = res.data.data
      
    }catch(err){console.log(err)
      }
    }
    
}
</script>

<style>
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
