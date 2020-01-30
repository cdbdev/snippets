<template>
	<div>			
		<span>Successfully logged in with token: {{ token }}!</span>
	</div>
</template>	

<script lang="ts">
	import * as store from '../store/index.ts';	
	import rest from '../services/rest.ts';	
	
	export default {
		mounted() {
			rest.processPage1(function(response: string, data) {
				if(response === "Success")
				{
					console.log("Final confirmation: " + data);
				}
				else
				{	
					console.log("Something went wrong!!");
					this.$router.push('/');
				}
			}.bind(this));
		},
		data: function () {
			return {
				token: store.getters.getToken()
			};
		}
	}
</script>