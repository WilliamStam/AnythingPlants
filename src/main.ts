import {createApp} from "vue";
import { createPinia } from 'pinia';
import AppVue from "@/app.vue";
import "bootstrap";
import router from "@/routes/routes";

import '@/assets/css/styles.scss'
import {FontAwesomeIcon} from '@/icons'
const app = createApp(AppVue);

app.use(createPinia());
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");

