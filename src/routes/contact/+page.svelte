<script>
	import '../../styles/pages/contact.scss';
</script>

<svelte:head>
	<title>Contact Us</title>
	<meta name="description" content="" />
</svelte:head>

<main id="contact">
	<div class="container">
		<div class="info-container">
			<!-- <span>Contact Us</span> -->
			<h2>Contact us for your landscaping needs.</h2>
			<div class="para">
				<p>
					Feel free to contact us for any construction services. Give us a call for immediate help.
				</p>
			</div>
			<ul>
				<li>
					<a href="/">
						<img src="/phone-callg.svg" alt="Phone Icon" height="50" width="50" />
					</a>
					<div>
						<p>Give Us a Call</p>
						<a href="/" class="phone">(918) 123 - 4567</a>
					</div>
				</li>
				<li>
					<a href="/">
						<img src="/locationg.svg" alt="Phone Icon" height="50" width="50" />
					</a>
					<div>
						<p>Our Location</p>
						<a href="/" class="location">1234 E Street, Tulsa, Oklahoma</a>
					</div>
				</li>
				<li>
					<a href="/">
						<img src="/emailg.svg" alt="Phone Icon" height="50" width="50" />
					</a>
					<div>
						<p>Business Email</p>
						<a href="/" class="phone">landscaping@gmail.com</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="form-container">
			<form name="Contact Form" id="contact-form" method="POST" data-netlify="true">
				<div class="flex">
					<div class="form-control dropdown">
						<p>How did you hear about us?</p>
						<select name="contact-reason" form="contact-form" aria-label="contact reason" required>
							<option value="" disabled selected>Select an option</option>
							<option value="option">Option 1</option>
							<option value="optiontwo">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<div class="form-control">
						<p>Your Name:</p>
						<input type="text" name="name" aria-label="Your name" placeholder="Name" required />
					</div>
				</div>
				<div class="flex">
					<div class="form-control">
						<p>Your Email:</p>
						<input type="email" name="email" aria-label="Your email" placeholder="Email" required />
					</div>
					<div class="form-control">
						<p>Your Phone:</p>
						<input
							type="number"
							name="number"
							aria-label="Your phone number"
							placeholder="Phone"
							required
						/>
					</div>
				</div>
				<div class="form-control">
					<p>How can we help?</p>
					<textarea aria-label="message" placeholder="Your Message" name="message" required />
				</div>
				<button type="submit" class="btn btn-primary">Send Message</button>
			</form>
		</div>
	</div>
</main>
