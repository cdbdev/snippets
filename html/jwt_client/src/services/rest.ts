import axios from 'axios';
import { LoginSession } from '../classes/LoginSession.ts';
import * as store from '../store/index.ts';

let login = (cbf: Function) => {	
	axios.get('http://localhost/jwt_api/public/index.php/api/login')
		.then(function (response) {	
			cbf("Success", response.data);
		})
		.catch(function (error) {
			let loginSession = { 'error': error };			
			cbf("Error", loginSession);
		})
	;
};

let processPage1 = (cbf: Function) => {
	axios.get('http://localhost/jwt_api/public/index.php/api/page1/test', store.getters.getHeaderWithToken())
		.then(function (response) {	
			cbf("Success", response.data);
		})
		.catch(function (error) {	
			let loginSession = { 'error': error };
			cbf("Error", loginSession);
		})
	;
};

export default {
	login: login,
	processPage1: processPage1
}
