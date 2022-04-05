import { createApp } from 'vue'
import App from './App.vue'

global.CONFIG = {}
global.CONFIG.apiURL = "http://localhost:4001/";
global.CONFIG.assetURL = global.CONFIG.apiURL+"assets/";

createApp(App).mount('#app')
