export default class {

    beers;
    url = 'https://api.punkapi.com/v2/beers';

    filterBeers () {

    }

    getBeers () {
        return fetch(this.url).then(response => {
            this.beers = response.json();
            return this.beers;
        })
    }

    searchBeers () {

    }

} 