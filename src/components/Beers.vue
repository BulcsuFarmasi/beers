<template>
  <div class="beers">
      <h1>Beers</h1>
      <BeerSearch v-on:search-changed="onSearchChanged($event)" /> 
      <div class="beer" v-for="beer of beers" v-bind:key="beer.id">
        <h2>{{ beer.name }}</h2>
        <img v-bind:src="beer.image_url">
        <p>{{ beer.description }}</p>
      </div>
  </div>
</template>

<script>

import BeerService from '../services/BeerService.js';
import BeerSearch from './BeerSearch.vue';

export default {
  name: 'Beers',
  components: {
    BeerSearch
  },
  data ()  {
    return {
      beers: []
    }
  },
  mounted () {
     this.beerService = new BeerService();
     this.beerService.getBeers().then((beers) => {
       this.beers = beers;
     })
  },
  methods: {
      onSearchChanged: function (searchExpression) {
        this.beers = this.beerService.searchBeers(searchExpression);
      }
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