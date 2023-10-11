import { createApp } from 'vue';


import App from './App.vue';
import router from './router.js';
import store from './stores/index.js';
import VueSocialSharing from 'vue-social-sharing'

const app = createApp(App);


app.use(router);
app.use(store);
app.use(VueSocialSharing);

app.mount('#app');
