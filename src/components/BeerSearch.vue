<template>
    <p>
        <input type="serach" name="search" id="search" v-model="searchExpression">
        <button type="submit" v-on:click="onSearch()">Search</button>
    </p>
</template>

<script>
export default {
    name: 'BeerSearch',
    data () {
        return {
            searchExpression: ''
        }
    },
    methods: {
        onSearch: function () {
            this.$emit('search-changed', this.searchExpression);
        }
    }
}
</script>

<style scoped>


</style>

