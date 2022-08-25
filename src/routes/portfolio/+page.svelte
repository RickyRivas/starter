<script>
	// External styles
	import SubHeader from '../../lib/header/SubHeader.svelte';
	import './portfolio.scss';
	let pageTitle = 'Our Portfolio';
</script>

<svelte:head>
	<title>Our Portfolio</title>
	<meta name="description" content="" />
</svelte:head>

<SubHeader {pageTitle} />
<main id="portfolio">
	<div class="grid">
		<div class="col">
			<div class="item">
				<img
					class=""
					src="/portfolio/img01.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img02.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img03.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<div class="col">
			<div class="item">
				<img
					class=""
					src="/portfolio/img02.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img01.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img01.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<div class="col">
			<div class="item">
				<img
					class=""
					src="/portfolio/img01.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img02.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="item">
				<img
					class=""
					src="/portfolio/img03.webp"
					width=""
					height=""
					alt=""
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</div>
</main>
