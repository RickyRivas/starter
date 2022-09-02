<script>
	// Loaded on every page // global
	import Header from '$lib/header/Header.svelte';
	import Footer from '../lib/header/Footer.svelte';
	import '../styles/global.scss';
</script>

<Header />
<slot />
<Footer />
