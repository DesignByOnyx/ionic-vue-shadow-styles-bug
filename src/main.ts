import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Ionic from '@ionic/vue';
import { defineCustomElements, applyPolyfills } from './ui-components/loader';

Vue.use(Ionic);
Vue.config.ignoredElements = [/rjs-\w*/];
applyPolyfills().then(() => {
	defineCustomElements(window);
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
