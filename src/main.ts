import {createApp} from "vue";
import { createPinia } from 'pinia';
import AppVue from "@/app.vue";
import router from "@/routes/routes";


const app = createApp(AppVue);

app.use(createPinia());
app.use(router);
app.mount("#app");

