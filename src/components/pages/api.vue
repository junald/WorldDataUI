<template>
    <div>
        
        <h5><span>World data api, returns json</span></h5>
        <br>
        <ul>

            <li> <p> <a href="http://www.worldd4t4.com/countries">worldd4t4.com/countries </a> </p></li>

            <li> <p>worldd4t4.com/districts/{COUNTRY_CODE}</p></li>
            <li> <p>worldd4ta.com/country/{COUNTRY_CODE}</p></li>
            <li> <p>worldd4ta.com/country/capital/{COUNTRY_CODE}</p></li>
            <li> <p>worldd4t4.com/cities/{DISTRICT}/{COUNTRY_CODE}</p></li>
            <li> <p>worldd4t4.com/cities/{COUNTRY_CODE}</p></li>
            <li> <p>worldd4t4.com/cities/{DISTRICT}/{COUNTRY_CODE}</p></li>

        </ul>
        
        <p>
            <span class="span-color"> COUNTRY_CODE = Two digit country code </span>
        </p>
    </div>
</template>
<script>
    import Vue from "vue";
    export default {
        // ===Component name
        name: "blank",
        // ===Props passed to component
        props: {},
        // ===Components used by this component
        components: {

        },
        // ===component Data properties
        data() {
            return {

            }
        },
        // ===Code to be executed when Component is mounted
        mounted() {

        },
        // ===Computed properties for the component
        computed: {},
        // ===Component methods
        methods: {

        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style scoped>
.span-color {
    color: red;    
}
</style>
