<template>
  <div id="app">
    <app-header id="app-header"></app-header>
    <router-view/>
    <app-footer id="app-footer"></app-footer>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import AppFooter from "./components/AppFooter";
export default {

  name: 'App',
  components: {
    AppFooter,
    AppHeader},

}
</script>

<style>

* {
  font-size: 62.5%;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;
}

  #app-header {
    position: fixed;
    width: 100%;
  }


  #app-footer {
    height: 60vh;
  }


</style>
