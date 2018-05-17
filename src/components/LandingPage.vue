<template>
  <div>
    <br>
    <div id="landing-picture">
      <h2 id="landing-picture-description">The Stelvio Pass is one big butt crack over in italy somewhere</h2>
      <img class="picture-stretch" src="../assets/stelvio-images/night.jpg">
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
      top: 2rem;
      right: 2rem;
      color: white;
      text-align: center;
      padding: .5rem;
    
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
