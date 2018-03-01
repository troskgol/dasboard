<template>
  <!--<b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand class="brand" href="#">DAS BOARD</b-navbar-brand>
    <b-nav-item to="frontpage">Front Page</b-nav-item>
    <b-nav-item to="powerhours">Power Hours</b-nav-item>
    DUmmy User
  </b-navbar>-->
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand class="brand" href="#">DAS BOARD</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="frontpage">Front Page</b-nav-item>
        <b-nav-item to="powerhours">Power Hours</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</template>

<script>

  export default {
    name: 'navbar'
  }
</script>

<style>
  .brand{
    font-weight: 700;
    letter-spacing: 3px;
    color: rgb(118, 234, 164) !important;
  }
  .nav-link{
    color: #f7f7f7;
    outline:none;
  }
  .nav-link:hover{
    color: #40e583;
  }
  .navbar{
    height:65px;
  }
  #nav_collapse{
    background-color: #343a40;
  }
</style>
