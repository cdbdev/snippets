import Vue from 'vue';
import store from './store.ts';
import rest from '../services/rest.ts';	

/**
 * MUTATIONS
 */
export function addToken(...obj:Array<object>) {
	let newToken = <string><unknown>obj[0];	
	store.state.token = newToken;
}