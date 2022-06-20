<template>
  <Indecision/>
</template>

<script>
import Indecision from './components/Indecision.vue'

  export default{
    name: 'App',
    components:{
      Indecision
    }
  }
</script>

<style>
  #app{
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  html, body{
    background-color: black;
  }
</style>
