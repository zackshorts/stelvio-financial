<template>
  <div class="nav-grid" id="nav-grid">

    <div class="overlay" id="myNav">

      <a class="closebtn" id="exitButton"  v-on:click="closeMenu">&times;</a>
      <div class="overlay-content" v-on:click="closeMenu">

        <router-link to="/" >Home</router-link>
        <router-link to="/who-we-are" >Who We Are</router-link>
        <router-link to="/what-we-do" >What We Do</router-link>
        <router-link to="/who-we-serve" >Who We Serve</router-link>
        <router-link to="/contact-us" >Contact Us</router-link>
      </div>

    </div>

    <h1 id="logo"><a href="">Stelvio Financial</a></h1>
    <button id="hamburger-menu" v-on:click="showMenu">&#9776;</button>
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
            activePage: ''
          }
      },

      created: function () {

      },

      computed: {

      },

      methods: {
        showMenu: function () {
          document.getElementById("myNav").style.animation = "ease 2s";
          document.getElementById("myNav").style.height = "100vh";
        },

        closeMenu: function () {
          document.getElementById("myNav").style.height = "0vh";
        }


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
    background-color: #A4CFBE;
    border-radius: 5px;
  }

  #myNav {
    transition: 0.5s;

  }

  .overlay .closebtn {
    position: absolute;
    right: .65rem;
    top: 1.5rem;
    font-size: 5rem;
    padding-bottom: .5rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .overlay {
    height: 0%;
    width: 100vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.96);
    overflow-y: hidden;
    animation: ease;
  }

  .overlay-content {
    position: relative;
    top: 25%;
    width: 100vw;
    text-align: center;
    margin-top: 30px;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: white;
    display: block;
    transition: color 0.5s ease;
    cursor: pointer;
  }

  .overlay a:hover, .overlay a:focus {
    transition: color 0.5s ease;
    color: #3E423A;
  }

  #hamburger-menu {
    display: none;
  }

  #logo {
    margin: 2rem;
  }

  h1 a {
    text-decoration: none;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 4rem;
    text-align: left;
    transition: color 0.5s ease;
  }

  h1 a:hover {
    /*color: #347089;*/
    color: #455c50;
    transition: color 0.5s ease;
  }
  .nav-grid {
    display: grid;
    grid-template-rows: 12rem;
    grid-template-columns: 2fr 5fr;
    background-color: white;
    align-items: center;
  }

  ul {
    list-style-type:none;
    margin:0;
    padding:0;
  }

  li {
    float: right;
    margin-right: 10px;
    font-size: 3rem;
  }

  li a {
    display:block;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #29494C;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
  }

  li {
    transition: background-color ease 0.8s;
     border-radius: 5px;
  }


  li:hover {
    background-color: #A4CFBE;
    transition: background-color ease 0.8s;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
      #menu {
        display: none;
      }

    #hamburger-menu {
      display: unset;
      text-decoration: none;
      border: none;
      border-radius: 12px;
      background: none;
      float: left;
      font-size: 3rem;
      padding-bottom: .5rem;
      padding-right: 1rem;
      padding-left: 1rem;
      text-align: right;
      /*width: fit-content;*/
      position: absolute;
      right: 1rem;
      transition: background-color ease 0.8s;

    }

    #hamburger-menu:hover {
      background-color: #A4CFBE;
      border-radius: 12px;
      transition: background-color .8s ease;
    }

    button:focus { outline: none; }
  }



</style>
