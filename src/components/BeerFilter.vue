<template>
    <div class="filter">
        <button v-on:click="toggleFilter()">Show Filters</button>
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
                <input type="submit" value="Filter" v-on:click="onFilter()">
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


</style>