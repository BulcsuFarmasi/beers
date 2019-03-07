<template>
    <div class="beers">
      <v-container class="text-xs-center">
          <h1>Beers</h1>
          <BeerSearch v-on:search-changed="onSearchChanged($event)" />
          <BeerFilter v-on:filter-changed="onFilterChanged($event)" />
      </v-container>
      <v-container d-flex v-if="beers.length > 0"> 
          <v-flex class="beer" v-for="beer of beers" v-bind:key="beer.id">
            <v-card color="warning">
              <v-card-title>
                <h2>{{ beer.name }}</h2>
              </v-card-title>
              <v-card-text>
                <p>First brewed: <strong>{{ beer.firstBrewed | date }}</strong></p>
                <p>{{ beer.description }}</p>
              </v-card-text>
            </v-card>
          </v-flex>
      </v-container>
      <p v-else class="text-xs-center">Beers not found</p>
    </div>
</template>

<script>

import BeerFilter from './BeerFilter'
import BeerSearch from './BeerSearch';

import BeerService from '../services/BeerService';

export default {
  name: 'Beers',
  components: {
    BeerFilter,
    BeerSearch
  },
  filters: {
    date: function(value) {
      return value.format('YYYY/MM')
    }
  },
  data ()  {
    return {
      beers: [],
      isLoading: true
    }
  },
  mounted () {
     this.beerService = new BeerService();
     this.beerService.getBeers().then((beers) => {
       this.isLoading = false;
       this.beers = beers;
     })
  },
  methods: {
      onFilterChanged: function (filter) {
        this.beers = this.beerService.filterBeers(filter);
      },
      onSearchChanged: function (searchExpression) {
        this.beers = this.beerService.searchBeers(searchExpression);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    flex-wrap: wrap;
  }
  .flex {
    width: 48%;
    margin: 20px 1%;
    padding: 2%;
  }

  @media only screen and (max-width: 480px) {
    .flex {
      width:98%;
    }
  }
</style>