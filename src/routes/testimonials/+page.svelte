<script>
	// External styles
	import SubHeader from '../../lib/header/SubHeader.svelte';
	import './misc.scss';
	let pageTitle = 'Testimonials';
	let reviews = [
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		},
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		},
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		},
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		},
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		},
		{
			testifier: 'Valued Customer',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
		}
	];
</script>

<svelte:head>
	<title>Testimonials</title>
	<meta name="description" content="" />
</svelte:head>

<SubHeader {pageTitle} />
<main id="services">
	<div class="container">
		{#each reviews as { review, testifier }}
			<div class="item">
				<div class="stars">
					<img src="/reviews/star.svg" alt="star" width="25" height="25" />
					<img src="/reviews/star.svg" alt="star" width="25" height="25" />
					<img src="/reviews/star.svg" alt="star" width="25" height="25" />
					<img src="/reviews/star.svg" alt="star" width="25" height="25" />
					<img src="/reviews/star.svg" alt="star" width="25" height="25" />
				</div>
				<p>
					{review}
				</p>
				<div class="info">
					<img src="/reviews/user.svg" alt="testifier" width="40" height="40" />
					<div>
						<h4>{testifier}</h4>
						<p>Certified Google Review</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
