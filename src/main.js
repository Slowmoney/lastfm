import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import lastfm from "./plugins/lastfm";

Vue.config.productionTip = false;
Vue.use(lastfm);

new Vue({
  router,
  store,
  vuetify,
  lastfm,
  render: h => h(App)
}).$mount("#app");
