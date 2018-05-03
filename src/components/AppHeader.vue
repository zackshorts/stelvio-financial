<template>
  <div class="nav-grid" id="nav-grid">
    <h1><a href="">Stelvio Financial</a></h1>

    <ul id="menu">

      <li @click="activePage = 'contact'" :class="{highlight:activePage === 'contact'}"><router-link to="/contact-us" >Contact Us</router-link></li>
      <li @click="activePage = 'who'" :class="{highlight:activePage === 'who'}"><router-link to="/who-we-serve" >Who We Serve</router-link></li>
      <li @click="activePage = 'what'" :class="{highlight:activePage === 'what'}"><router-link to="/what-we-do" >What We Do</router-link></li>
      <li @click="activePage = 'about'" :class="{highlight:activePage === 'about'}"><router-link to="/who-we-are" >Who We Are</router-link></li>
      <li @click="activePage = 'home'" :class="{highlight:activePage === 'home'}"><router-link to="/" >Home</router-link></li>

    </ul>

  </div>
</template>

<script>
    export default {
        name: "AppHeader",

      data() {
          return {
            activePage: 'home'
          }
      },

      created: function () {
          this.activePage = 'home'
      },

      computed: {

      },

      methods: {
      }
    }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  /* NAVIGATION GRID SELECTORS*/

  .highlight {
    background-color: #ddd;
    border-radius: 5px;
  }

  h1 a {
    text-decoration: none;
    color: black;
  }

  h1 a:hover {
    color: #347089;
    transition: color 0.8s ease;
  }

  .nav-grid {
    display: grid;
    grid-template-rows: 80px;
    grid-template-columns: 1fr 3fr;
    background-color: white;
    align-items: center;
  }

  ul {
    list-style-type:none;
    margin:0;
    padding:0;
  }

  li {
    display:inline-block;
    float: right;
    margin-right: 10px;

  }

  li a {
    display:block;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: black;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;

  }


  li:hover {
    background-color: #ddd;
    transition: background-color ease 0.8s;
    border-radius: 5px;
  }

</style>
