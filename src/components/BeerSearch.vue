<template>
    <p>
        <v-text-field solo label="Search Name" v-model="searchExpression"></v-text-field>
        <v-btn color="warning" v-on:click="onSearch()">Search</v-btn><br>
        <v-btn color="warning" v-on:click="clearSearch()">Clear Search</v-btn>
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
        clearSearch : function () {
            this.searchExpression = '';
            this.onSearch();
        },
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

