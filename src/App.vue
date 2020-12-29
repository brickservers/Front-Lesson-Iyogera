<template>
  <div id="app">
  <Header/>
    <router-view v-bind:user="user" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import axios from "axios";
export default {
  name:"app",
  components: {
    Header
  },

  data() {
    return {
      user: []
    }
  },

  async mounted() {

    const token = localStorage.getItem('token');
    const config = {

      method: 'get',
      url: 'https://demo.iyogera.com/api/me',
      headers: {
        'Authorization': 'Bearer' + token,
        'Access-Control-Allow-Origin': '*'
      }
    }
    let res = await axios(config)
    //console.log(res.data);
    this.user = res.data
  },
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
