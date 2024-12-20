<!-- App.vue -->
<template>
    <div id="app">
        <!-- Include the Navigation Bar globally -->
        <!-- <home /> -->
        <!-- Render the current route's content -->
        <router-view />
    </div>
</template>

<script>
// import Navigation from "./js/components/Navigation.vue";

export default {
    name: "App",
    // components: {
    //     navigation,
    // },
    // mounted() {
    //     console.log("App has been mounted!");
    // },
};
</script>

<style>
/* Global styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
</style>
