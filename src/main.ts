import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "./routes";

const app = createApp(App);

app.use(router);

app.use(VueQueryPlugin);

app.mount("#app");
