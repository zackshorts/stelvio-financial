<template>
  <div id="app">
    <app-header id="app-header"></app-header>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";
export default {

  name: 'App',
  components: {AppHeader},

}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  background-color: aquamarine;
}

  #app-header {
    position: fixed;
    width: 100%;
  }

</style>
