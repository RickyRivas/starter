<script>
	// prop
	export let pageTitle;
	// external css
	import '../../styles/layout/subheading.scss';
</script>

<section id="subheader">
	<img aria-hidden="true" src="/twig.png" alt="twig" class="abs-head" width="100" height="139" />
	<h1>{pageTitle}</h1>
	<picture>
		<source media="(max-width: 600px)" srcset="/img08m.webp" />
		<source media="(min-width: 601px)" srcset="/img08l.webp" />
	</picture>
	<div class="overlay" />
</section>
