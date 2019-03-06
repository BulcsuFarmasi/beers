import moment from 'moment';

export default class {
    
    beers;
    url = 'https://api.punkapi.com/v2/beers'

    filterBeers (filter) {
        let beers = this.beers;
        if (filter.brewedAfter) {
            beers = beers.filter(beer => {
                if (filter.brewedAfter.unix() < beer.firstBrewed.unix()) {
                    return true;
                }
            })
        }
        if (filter.brewedBefore) {
            beers = beers.filter(beer => {
                if (filter.brewedBefore.unix() > beer.firstBrewed.unix()) {
                    return true;
                }
            })
        }
        return beers;
    }

    getBeers () {
        return fetch(this.url).then(response => {
            return response.json();
        })
        .then(beers => {
            this.beers = this.transformBeers(beers);
            return Promise.resolve(this.beers);
        })
    }

    transformBeers (beers) {
        return beers.map(beer => {
            beer.firstBrewed = moment(beer.first_brewed, 'MM/YYYY');
            delete beer.first_brewed;
            return beer;
        })
    }

    searchBeers (searchExpression) {
        // eslint-disable-next-line
        console.log(searchExpression);
        if (!searchExpression) {
            return this.beers;
        }

        return this.beers.filter((beer) => {
            return beer.name.indexOf(searchExpression) > -1;                
        })
    }

} 