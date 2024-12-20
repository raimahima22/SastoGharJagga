<!-- Home.vue -->
<template>
    <div id="home">
        <!-- Include the NavBar component here -->
        <navigation />
        <router-view /> 
        <h1>Welcome to My Home Page</h1>
        <p>This is the home page content.</p>
    </div>
</template>

<script>
// import { RouterView } from "vue-router"; // Import RouterView for Vue Router
import navigation from "../components/Navigation.vue"; // Import the NavBar component

export default {
    name: "Home",
    components: { 
      navigation, // Register NavBar component }
},};
</script>

<style scoped>
/* Home page-specific styles */
</style>
