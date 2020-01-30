import * as store from '../store/index.ts';
import rest from '../services/rest.ts';	

/**
 * 	 TOKEN ACTIONS
 */
export function addToken(...obj:Array<object>) {	
	return new Promise(function(resolve, reject) {
		let newToken = <String>obj[0];		
		
		store.commit('addToken', newToken);
		console.log("Token " + newToken + " committed");
		resolve("OK");
	});
}
