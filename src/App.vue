<template>
  <div id="app">

    <router-view v-bind:user="user" />
  </div>
</template>

<script>
//import Header from './components/layout/Header';
import axios from "axios";
export default {
  name:"app",


  data() {
    return {
      user: []
    }
  },

  async mounted() {
    const config = {
      method: 'get',
      url: 'https://iyogera.dev/iyogera2/api/me',
      headers: {
        'Authorization': '*',
        'Access-Control-Allow-Origin': '*'
      }
    }
    let res = await axios(config)
    console.log(res.data);
    //this.user = res.data
  },
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
