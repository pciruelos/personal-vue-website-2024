import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'; 
import { FaGithub, FaLinkedin, FaYoutube, FaBehance, FaEnvelope } from 'oh-vue-icons/icons'; // Import the specific icons you want to use

addIcons(FaGithub, FaLinkedin, FaYoutube, FaBehance, FaEnvelope);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(router);
app.mount('#app');
