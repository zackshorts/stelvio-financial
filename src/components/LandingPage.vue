<template>
  <div>
    <br>
    <div id="landing-picture">
      <h2 id="landing-picture-description">The Stelvio Pass is one windy butt crack over in italy somewhere</h2>
      <img class="picture-stretch" src="../assets/stelvio-images/night.jpg">
    </div>
  <div id="intro-grid">
      <h3 id="intro">From personal wealth management to consulting, we’re one of the most trusted investment firms in Arizona</h3>
      <img id="landing-logo" src="../assets/logo.png">   
  </div>
  <div id="main-content-grid">
    <!-- LAYER ONE -->
    <div></div>
    <div>
        <h3>Personal Wealth Management</h3>
        <p>We’re all in. We’re in for your future. For your peace of mind. For the freedom that comes from knowing that the college tuition will be there. That you can retire confidently—and completely. That the person you said “I do” to will be taken care of today, tomorrow and always.</p>
        <p>At ASI, we take personal wealth management personally. It’s more than what we do. It’s who we are.</p>
        <strong>See what sets us apart.</strong>
    </div>
    <div></div>
    <div></div>
    <!-- LAYER TWO -->
    <div></div>
    <div>

    </div>
    <div></div>
    <div></div>
    <!-- LAYER THREE -->
    <div></div>
    <div>

    </div>
    <div></div>
    <div></div>
    <!-- LAYER FOUR -->
    <div></div>
    <div>

    </div>
    <div></div>
    <div></div>
    <!-- END OF GRID -->
  </div>
  </div>
</template>

<script>
  export default {
        name: "landing-page",

    }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  #landing-picture {
    position: relative;
    margin-top: 11rem;
  }

  #landing-picture-description {
      position: absolute;
      font-size: 4rem;
      width: 70%;
      background-color: #00000089;
      top: 6rem;
      right: 3rem;
      color: white;
      text-align: center;
      padding: .5rem;
      border-radius: 8px;
  }

  #intro-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 30vh;
    font-size: 4rem;
    text-align: center;
    align-items: center;
  }

  #intro {
    width: 75%;
    margin: auto;
  }

  #landing-logo {
    height: 100%;
    width: auto;
    margin: auto;
  }

  #main-content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

   #test {
    margin-top: 120px;
    background-color: black;
    font-size: 6rem;
    text-align: center;
  }

  img {
    height: 70vh;
  }

    .picture-stretch {
      width: 100%;
      object-fit: cover;
      object-position: 0 80%;
    }





</style>
