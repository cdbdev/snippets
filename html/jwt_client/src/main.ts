import Vue from 'vue';
import VueRouter from 'vue-router'; 
import routes from './routes.ts';
import body from './comp/Body.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes 
});	

new Vue({ 
	router,
	mounted() {
		//alert("Lanceer eventuele login pagina");
	},
	data: {
		
	},
	components: {
		'body-component': body
	}
}).$mount('#app');
