<template>
  <div class="beers">
      <h1>Beers</h1>
      <div class="beer" v-for="beer of beers" v-bind:key="beer.id">
        <h2>{{ beer.name }}</h2>
        <img v-bind:src="beer.image_url">
        <p>{{ beer.description }}</p>
      </div>
  </div>
</template>

<script>

import BeerService from '../services/BeerService.js';

export default {
  name: 'Beers',
  data: () => {
    return {
      beers: []
    }
  },
  mounted () {
     this.beerService = new BeerService();
     this.beerService.getBeers().then((beers) => {
       this.beers = beers;
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>