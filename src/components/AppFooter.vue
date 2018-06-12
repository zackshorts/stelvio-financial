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
        <h4>Location 1</h4>
        <p>2514 East Sierra Madre Avenue</p>
      </div>
      <div>
        <h4>Location 2</h4>
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
    padding: 2rem;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: #F4F7D9;
    font-size: 6rem;
    color: #29494C;
  }

  .bottom-footer div a {
    display: block;
    color: #29494C;
  }

  @media (max-width: 900px) {
    .bottom-footer {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      text-align: center;

      grid-gap: 4rem;
    }
  }

  @media (max-width: 670px) {
    .bottom-footer {
      grid-template-columns: 1fr ;
      grid-template-rows: repeat(4, auto);
      text-align: center;
      grid-gap: 4rem;
    }
  }
</style>
