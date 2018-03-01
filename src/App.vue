<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from './components/Layout'
  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: #eee url("./assets/stolen-picture.jpg") no-repeat fixed center;
  background-size: cover;
}
body, html{
  height: 100%;
}
</style>
