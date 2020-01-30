import store from './store.ts';

const getters = {
	/**
	 * GETTERS
	 */	
	getToken() {
		return store.state.token;
	},
	getHeaderWithToken() {
		return {
			headers: {
				Authorization: this.getToken()
			}
		}
		
	}
};

export  {
	getters
}
