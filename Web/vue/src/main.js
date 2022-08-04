import { createApp } from "vue";
import App from "./App.vue";
import applyComponents from "./components/init";

let Vue = createApp(App);
applyComponents(Vue);
Vue.mount("#app");
