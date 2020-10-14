<template>
  <div id="app">
    <LiveLessons v-bind:lessonName="lessonName" v-bind:user="user"  />
  </div>
</template>

<script>

import Vue from 'vue'
import LiveLessons from '../components/LiveLessons';
//import axios from 'axios';
import Header from '../components/layout/Header.vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

export default {
  name: 'Incall',
  props: ["lessonName", "user"],
  components: {
    LiveLessons,
    Header
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
