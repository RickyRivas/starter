<script>
	import SubHeader from './../lib/SubHeader.svelte';
	import { page } from '$app/stores';
	let pageTitle = 'Error';
</script>

<SubHeader {pageTitle} />
<main id="error">
	<div class="container">
		<span>Message:</span>
		<h1>{$page.status}: {$page.error.message}</h1>
		<div class="btns">
			<a href="/" class="btn">Go Home</a>
		</div>
	</div>
</main>

<style>
	#error {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3em 0;
	}
	@media only screen and (min-width: 768px) {
		#error {
			padding: 5em 0;
		}
	}
	#error .container {
		width: 90%;
		box-shadow: var(--box-shadow);
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		border-top: 0.5em solid #c1121f;
		border-radius: 0.5em;
		padding: 2em 1em;
	}
	@media only screen and (min-width: 768px) {
		#error .container {
			width: 30em;
		}
	}
	span {
		margin-bottom: 0.5em;
	}
	.btns {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btns a {
		margin: 0;
	}
	h1 {
		margin-bottom: 1em;
	}
</style>
