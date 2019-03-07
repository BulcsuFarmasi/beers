<template>
    <div class="filter">
        <v-btn color="warning" v-on:click="toggleFilter()">Show Filters</v-btn>
        <div class="filters" v-if="filtersShown">
            <p>
                <label for="brewed-after">Brewed After</label><br>
                <vue-monthly-picker v-model="filter.brewedAfter"></vue-monthly-picker>
            </p>
            <p>
                <label for="brewed-before">Brewed Before</label><br>
                <vue-monthly-picker v-model="filter.brewedBefore"></vue-monthly-picker>
            </p>
            <p>
                <v-btn color="warning" v-on:click="onFilter()">Filter</v-btn>
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