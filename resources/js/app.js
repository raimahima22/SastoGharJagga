import "./bootstrap";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import App from "../App.vue"; // Use PascalCase for components
// import home from "./components/home.vue"; // Use PascalCase for components
import router from "./router";

const app = createApp(App); // Rename the app instance
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.mount("#app");
// createApp(App).mount("#app");
