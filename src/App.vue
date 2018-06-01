<template>
  <div id="app">
    <app-header id="app-header"></app-header>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
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
  /*font-family: 'Work Sans', sans-serif;*/
  font-family: 'Open Sans', sans-serif;
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: #3E423A;
}

  #app-header {
    position: fixed;
    width: 100%;
    z-index: 1;
  }


  /*#app-footer {*/
    /*height: 60vh;*/
  /*}*/


</style>
