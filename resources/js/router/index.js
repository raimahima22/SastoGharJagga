import { createRouter, createWebHistory } from "vue-router";

// Import your .vue components

import Home from "../pages/Home.vue";
// import About from "../components/About.vue";
import Login from "../pages/Login.vue";
import navigation from "../components/Navigation.vue";

const routes = [
    { path: "/", component: Home }, // Maps to Home.vue
    // { path: "/about", component: About }, // Maps to About.vue
    { path: "/Login", component: Login }, // Maps to Login.vue
    { path: "/Navigation", component: navigation }, // Maps to Login.vue
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
