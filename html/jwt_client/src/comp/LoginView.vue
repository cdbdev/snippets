<template>
	<div>			
		<span>hello</span>
		<form>
			<button @click="login()" type="button">login</button>
		</form>
	</div>
</template>	

<script lang="ts">
	import * as store from '../store/index.ts';
	import rest from '../services/rest.ts';	
	import { LoginSession } from '../classes/LoginSession.ts';
		
	export default {
		methods: {
			login() {
				rest.login(function(response: string, jsonObj: LoginSession) {
					if(response === "Success")
					{
						this._processLogin(jsonObj);										
					}
					else
					{	
						alert("Error: " + jsonObj.message);
					}
				}.bind(this));
			},
			_processLogin(jsonObj: LoginSession) {
				let jwt = <Object>jsonObj.jwt;
				
				store.dispatch('addToken', jwt).then(function(value) {
					/**
					 * Go to the success page
					 */
					this.$router.push('/main');
				}.bind(this))
				.catch(function(err) {
					console.log("Error occurred");
				});	
			}
		}
	}
</script>