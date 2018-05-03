<template>
  <div class="nav-grid" id="nav-grid">
    <h1>Stelvio Financial</h1>
    <!--<span>-->
            <!--<p v-model="date">{{this.date}}</p>-->
            <!--<div v-model="time">{{this.time}}</div>-->
    <!--</span>-->
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "AppHeader",

      data() {
          return {
            state: '',
            date: '',
            time: ''
          }
      },



      created: function () {
          this.startClock();
          this.date = new Date();
      },

      computed: {

      },

      methods: {
          startClock: function () {

            let today = new Date();
            let h = today.getHours();
            if( h > 12 ) h-=12;
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            this.time =
              h + ":" + m + ":" + s;

            let t = setTimeout(this.startClock, 500);
          },

        checkTime: function (i) {
          if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
          return i;
        },

        formatDate: function (date) {
            return moment(date, 'DD/MM'),format('DD/MM')
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

  .nav-grid {
    display: grid;
    grid-template-rows: 80px;
    grid-template-columns: 1fr 3fr;
    background-color: white;
    align-items: center;
  }

  .nav-grid a {
    margin-left: 15px;
  }

  ul {
    list-style-type:none;
    margin:0;
    padding:0;
  }

  /*Create a horizontal list with spacing*/
  li {
    display:inline-block;
    float: right;
    margin-right: 1px;
  }
  /*Style for menu links*/
  li a {
    display:block;
    margin-right: 20px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #666;
  }

</style>
