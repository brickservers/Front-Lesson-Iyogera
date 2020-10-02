<template>
  <div id="app">  
    <div class="tweet"> 
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>👩🏾‍🏫 just</strong> <small>@wallace</small></p>
              <p>We all know why</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>  
</template>

<script>

import Vue from 'vue'
//import Lessons from '../components/Lessons.vue';
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

export default {
  
  name: 'Lesson',
  props: ["todo"],

  data() {
    return {
      todos: []
    }
  },
  methods: {
    
  mounted() {
    axios.get('https://iyogera.dev/iyogera2/api/live_lesson')
      .then(res => this.todos = res.data.data)
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
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
