<template>

	<div class="cookies">
		<article class="message">
			<div class="message-header">
				<p>Hi there</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				<p>This site has some extended functionality with cookies.  Not needing to re-login upon refresh, etc.  Do you accept the use of cookies on this site?</p>
				<button class = "button is-danger" type="submit">Yes</button> <button class = "button is-danger" type="submit">No</button>
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
	}
}

</script>

<style lang="scss">
	.cookies{
		width: 35vw;
		position: fixed;
		bottom: 5px;
		right: 5px;

	}
</style>