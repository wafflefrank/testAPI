import { createApp } from 'vue';
import ElementPlus from 'element-plus'; // 引用 element-ui 樣式
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';
import './assets/all.css';
import './assets/css/fontawesome-all.css';

const app = createApp(App);
app.use(ElementPlus, { locale });
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
