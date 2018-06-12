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
    <div id="landing-1">
        <h3>Personal Wealth Management</h3>
        <p>We’re all in. We’re in for your future. For your peace of mind. For the freedom that comes from knowing that the college tuition will be there. That you can retire confidently—and completely. That the person you said “I do” to will be taken care of today, tomorrow and always.</p>
        <p>At ASI, we take personal wealth management personally. It’s more than what we do. It’s who we are.</p>
        <router-link to="/what-we-do"><strong>See what sets us apart.</strong></router-link>
    </div>
    <!-- LAYER TWO -->
    <div id="landing-2">
      <h3>Consulting Services</h3>
      <p>It’s no surpise that some of the region’s most prestigious individuals and most respected companies trust ASI for consulting services. From retirement plans and endowments to corporate asset optimization and advanced planning, our expert team puts their extensive experience, state-of-the-art analytical systems and complete qualitative and quantitative data to work for you, creating strategic plans that deliver results. This is consulting done right. That is ASI.</p>
      <p>Read to get down to business?</p>
    </div>
    <!-- LAYER THREE -->
    <div id="landing-3">
      <h3>Our Philosophy</h3>
      <p>We believe in the idea that wealth is borne not just from portfolios and bank accounts, but from the relationships and experiences that make us who we are. For us, the greatest investment isn’t in a “what,” it’s in a “who.” You.</p>
      <strong>See how our philosophy sets us apart.</strong>
    </div>
    <!-- LAYER FOUR -->
    <div id="landing-4">
      <h3>Our Process</h3>
      <p>We don’t just manage your assets. We have your back. And we boldly forge the path to success guided by the beacon of your goals rather than our own. It begins with an in-depth analysis of where you are and where you want to go. Then we map out how to get you there.</p>
      <strong>Start your better tomorrow today.</strong>
    </div>
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
    margin-top: 10rem;
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
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: 2fr .7fr;
    grid-template-rows: 30vh;
    font-size: 4.5rem;
    text-align: right;
    align-items: center;
    background-color: white;
    color: #44787D;
  }

  #intro {
    width: 80%;
    margin: auto;
  }

  #landing-logo {
    height: 90%;
    width: auto;
    margin: auto;
  }

  #main-content-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 2rem;
    font-size: 5rem;
    grid-template-columns: .1fr 1fr 1fr .1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas: ". landing-1 . ."
                          ". . landing-2 ."
                          ". landing-3 . ."
                          ". . landing-4 .";
  }

  h3:after {
    background: none repeat scroll 0 0 white;
    bottom: -6px;
    content: "";
    display: block;
    height: 6px;
    position: relative;
    width: 120px;
    border-radius: 5px;
  }

  #landing-1 {
    grid-area: landing-1;
  }
  #landing-2 {
    grid-area: landing-2;
  }
  #landing-3 {
    grid-area: landing-3;
  }
  #landing-4 {
    grid-area: landing-4;
  }

  #landing-1 p, #landing-2 p, #landing-3 p, #landing-4 p {
    margin-top: 9px;
    text-align: justify;
  }
  #landing-1 h3, #landing-2 h3, #landing-3 h3, #landing-4 h3 {
    text-align: left;
    font-size: 3.5rem;
  }



  #test {
    margin-top: 120px;
    background-color: #3E423A;
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


  @media (max-width: 900px) {
    #intro-grid {
      grid-template-columns: 1fr;
      grid-template-rows: 20vh 20vh;
      font-size: 4rem;
      text-align: center;
      align-items: center;
    }

    #main-content-grid {
      padding-left: 2rem;
      padding-right: 2rem;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "landing-1 ."
                            ". landing-2"
                            "landing-3 ."
                            ". landing-4 ";

    }
  }

  @media (max-width: 700px) {

    #main-content-grid {
      padding-left: 2rem;
      padding-right: 2rem;
      grid-template-columns: 1fr;
      grid-template-areas: "landing-1"
      "landing-2"
      "landing-3"
      "landing-4 ";
      width: 75%;
      text-align: center;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      grid-gap: 4rem;
    }
  }

  @media (max-width: 500px) {
    #intro-grid{
      font-size: 3rem;
    }

    #landing-logo {

    }


  }




</style>
