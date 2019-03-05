export default class {

    beers;
    url = 'https://api.punkapi.com/v2/beers'

    getBeers () {
        return fetch(this.url).then(response => {
            return response.json();
        })
        .then(beers => {
            this.beers = beers;
            return Promise.resolve(this.beers);
        })
    }

    searchBeers (searchExpression) {
        if (!searchExpression) {
            return this.beers;
        }
        
        return this.beers.filter((beer) => {
            return beer.name.indexOf(searchExpression) > -1;                
        })
    }

} 