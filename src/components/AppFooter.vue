<template>
  <div id="app-footer-grid">


    <div class="bottom-footer">
      <h1>Stelvio Financial</h1>
      <div>
        <router-link to="/" >Home</router-link>
        <router-link to="/who-we-are" >Who We Are</router-link>
        <router-link to="/what-we-do" >What We Do</router-link>
        <router-link to="/who-we-serve" >Who We Serve</router-link>
        <router-link to="/contact-us" >Contact Us</router-link>
      </div>
      <div>
        <h3>Location 1</h3>
        <p>2514 East Sierra Madre Avenue</p>
      </div>
      <div>
        <h3>Location 2</h3>
        <p>1020 E Center Street Apt 13</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "app-footer"
    }
</script>

<style scoped>
  #app-footer-grid {
    display: grid;
    grid-template-rows: 3fr 2fr;
  }

  .bottom-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: #333333;
    font-size: 6rem;
    color: white;
  }

  .bottom-footer div a {
    display: block;
    color: white;
  }

  @media (max-width: 900px) {
    .bottom-footer {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      text-align: center;
    }
  }

  @media (max-width: 670px) {
    .bottom-footer {
      grid-template-columns: 1fr ;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      text-align: center;

    }
  }
</style>
