<script>
	import { URL, companyName, industry, cityAndState, DESCRIPTION } from '$lib/config.js';
	// import { page } from '$app/stores';
	let pageTitle = 'Portfolio';
	import SubFooter from '$lib/SubFooter.svelte';
	import SubHeader from '$lib/SubHeader.svelte';
	import './portfolio.scss';
	import '../../styles/widgets/swiper.scss';
	// Swiperjs
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/autoplay';
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	let allImageSrc = [];
	let showSwiper = false;
	let showSlideIndex;
	let imgs;
	const initSwiper = (index) => {
		showSlideIndex = parseInt(index);
		imgs.forEach((img) => {
			allImageSrc = [...allImageSrc, img.src];
		});
		showSwiper = !showSwiper;
	};
	onMount(() => {
		imgs = Array.from(document.querySelectorAll('.item > img'));
		imgs.forEach((img, i) => {
			img.dataset.index = i;
		});
	});
	async function autofocus(el) {
		await tick();
		el.focus();
	}
</script>

<svelte:head>
	<link rel="canonical" href={URL} />
	<meta name="Description" content={DESCRIPTION} />
	<meta property="og:description" content={DESCRIPTION} />
	<title>{companyName} | {industry} | {cityAndState}</title>
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
					on:click={(e) => {
						initSwiper(e.target.dataset.index);
					}}
					on:keydown={(e) => {
						initSwiper(e.target.dataset.index);
					}}
				/>
			</div>
			<div class="flex">
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
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
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
					/>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="flex">
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
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
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
					/>
				</div>
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
					on:click={(e) => {
						initSwiper(e.target.dataset.index);
					}}
					on:keydown={(e) => {
						initSwiper(e.target.dataset.index);
					}}
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
					on:click={(e) => {
						initSwiper(e.target.dataset.index);
					}}
					on:keydown={(e) => {
						initSwiper(e.target.dataset.index);
					}}
				/>
			</div>
			<div class="flex">
				<div class="item">
					<img
						class=""
						src="/portfolio/img02.webp"
						width=""
						height=""
						alt=""
						loading="lazy"
						decoding="async"
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
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
						on:click={(e) => {
							initSwiper(e.target.dataset.index);
						}}
						on:keydown={(e) => {
							initSwiper(e.target.dataset.index);
						}}
					/>
				</div>
			</div>
		</div>
	</div>
</main>
<SubFooter />

{#if showSwiper}
	<section id="swiper-modal" tabindex="-1" role="dialog" use:autofocus>
		<div class="overlay" />
		<button
			class="close"
			on:click={() => {
				showSwiper = false;
				showSlideIndex = null;
			}}
		>
			<img src="/close.svg" alt="" width="20" height="20" decoding="async" />
		</button>
		<button class="prev control"
			><img src="/left-chevron.svg" alt="" width="20" height="20" /></button
		>
		<button class="next control"
			><img src="/right-chevron.svg" alt="" width="20" height="20" /></button
		>
		<Swiper
			modules={[Navigation, Autoplay]}
			navigation={{
				prevEl: '.prev',
				nextEl: '.next'
			}}
			autoplay={{
				delay: 10000
			}}
			class="gallery-swiper"
			initialSlide={showSlideIndex}
			spaceBetween={0}
			slidesPerView={1}
			loop={true}
		>
			{#each allImageSrc as src, index}
				<SwiperSlide data-slide={index}><img {src} alt="swiper slide" /></SwiperSlide>
			{/each}
		</Swiper>
	</section>
{/if}
