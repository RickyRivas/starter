<script>
	// Loaded on every page // global
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ToTop from '$lib/widget/ToTop.svelte';
	import '../styles/global.scss';
</script>

<Header />
<slot />
<Footer />
<ToTop />
