<template>
    <p>
        <v-text-field solo label="Search" v-model="searchExpression"></v-text-field>
        <v-btn color="warning" v-on:click="onSearch()">Search</v-btn>
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
    .v-btn {
        width: 33%;
    }

    .v-text-field  {
        width: 33%;
        margin: 0 auto;
    }

    @media only screen and (max-width: 480px) {
        .v-btn {
            width: 75%;
        }

        .v-text-field  {
            width: 75%;
        }

    } 

</style>

