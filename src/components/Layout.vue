<template>
  <div id="layout">
    <navbar></navbar>

    <main id="content" class="content" role="main">
      <router-view>
        Loading...
      </router-view>
      <div class="made-by-footer">
        ©2018. Made by Tobias Asplund
      </div>
    </main>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    name: 'layout',
    components: {
      Navbar
    }
  }
</script>

<style>
  #layout{
    height:100%;
    display:flex;
    flex-flow: column;
  }
  #content{
    overflow: auto;
    flex: 2 ;
  }
  .made-by-footer{
    color: #dddddd;
  }

</style>
