<template>
    <div class="filter">
        <v-btn color="warning" v-on:click="toggleFilter()" v-if="!filtersShown">Show Filters</v-btn>
        <v-btn color="warning" v-on:click="toggleFilter()" v-if="filtersShown">Hide Filters</v-btn>
        <div class="filters" v-if="filtersShown">
            <p>
                <span>First Brewed After</span><br>
                <vue-monthly-picker v-model="filter.brewedAfter"></vue-monthly-picker>
            </p>
            <p>
                <span>First Brewed Before</span><br>
                <vue-monthly-picker v-model="filter.brewedBefore"></vue-monthly-picker>
            </p>
            <p class="red--text text-xs-center" v-if="isInvalidInterval()">Invalid interval</p>
            <p>
                <v-btn color="warning" v-on:click="onFilter()">Filter</v-btn>
            </p>
            <p>
                <v-btn color="warning" v-on:click="clearFilters()">Clear Filters</v-btn>
            </p>
        </div>
    </div>
</template>

<script>

import VueMonthlyPicker from 'vue-monthly-picker'

export default {
    name: 'BeerFilter',
    components: {
        VueMonthlyPicker
    },
    data () {
        return {
            filtersShown: false,
            filter: {
                brewedBefore:null,
                brewedAfter:null
            }
        }
    },
    methods: {
        clearFilters: function () {
            this.filter.brewedBefore = null;
            this.filter.brewedAfter = null;
            this.onFilter();
        },
        isInvalidInterval () {
            if (this.filter.brewedBefore && this.filter.brewedAfter) {
                return this.filter.brewedBefore < this.filter.brewedAfter;
            } else {
                return false
            }
        },
        onFilter: function () {
            this.$emit('filter-changed', this.filter)
        },
        toggleFilter: function () {
            this.filtersShown = !this.filtersShown;
        }
    }
}
</script>

<style scoped>
    .v-btn {
        width: 33%;
    }


    .vue-monthly-picker {
        width:33%;
        margin: 0 auto;
    }

    @media only screen and (max-width: 480px) {
        .v-btn {
            width: 75%;
        }

        .vue-monthly-picker  {
            width: 75%;
        }

    } 

</style>