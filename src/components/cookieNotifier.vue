<template>

	<div class="cookies">
		<article class="message">
			<div class="message-header">
				<p>Hi there</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				<p>Accept cookies?</p>
				<button class = "button is-danger" type="submit" v-on:click="yesStorage()"">Yes</button> <button class = "button is-danger" type="submit" v-on:click="noStorage()">No</button>
			</div>	
		</article>
	</div>

</template>

<script>
import store from '../main.js';

export default {
	name: 'cookieNotifier',
	data(){
		return {

		}
	},
	methods: {
		yesStorage(){
			localStorage.setItem("cookiesGood", true);
		},
		noStorage(){
			localStorage.setItem("cookiesGood", false)
		}
	}
}

</script>

<style lang="scss">
	.cookies{
		@media screen and(max-width: 800px){
			width: 100%;
		}
		
		position: fixed;
		bottom: 5px;
		right: 5px;

	}
</style>