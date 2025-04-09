import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import { createVuetify } from "vuetify";
import "vuetify/styles"; // 引入 Vuetify 樣式
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
});

createApp(App)
  .use(router)
  .use(vuetify)
  .mount("#app");