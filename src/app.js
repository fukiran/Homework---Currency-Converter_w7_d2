import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            ratesTable: [],
            selectedCurrency: null
        },
        mounted(){
            this.getRates()
        },
        computed: {

        },
        methods: {
            getRates: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.ratesTable = data)
            }
            }
        }
    )
});