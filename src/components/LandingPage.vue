<template>
  <div>
    <br>
    <h1 id="test">HOME</h1>
    <div>
      <h2>Stelvio is ranked number one in the nation.</h2>
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

  #test {
    margin-top: 100px;
    background-color: black;
    font-size: 6rem;
    text-align: center;
  }



  img {
    height: 300px;
  }

    .picture-stretch {
      width: 100%;
      object-fit: cover;
      object-position: 0 80%;
    }





</style>
