<script>
	import Mail from 'phosphor-svelte/lib/EnvelopeOpen';
	import Pin from 'phosphor-svelte/lib/MapPin';
	import Insta from 'phosphor-svelte/lib/InstagramLogo';
	import GitHub from 'phosphor-svelte/lib/GitHubLogo';
</script>

<div class="footer-container">
	<div class="quickLinks">
		<h3 class="h3">Quick Links</h3>
		<div class="links">
			<a class="link" href="./">Home</a>
			<a class="link" href="./mechanics">Mechanics</a>
			<a class="link" href="./programming">Programming</a>
			<a class="link" href="./outreach">Outreach</a>
			<a class="link" href="./gallery">Gallery</a>
			<a class="link" href="./team">The Team</a>
		</div>
	</div>
	<div class="footer-item">
		<Pin color="white" weight="fill" size={72} />
		<p>200 White Oak Lane<br />Scarsdale NY, 10583</p>
	</div>
	<div class="footer-item">
		<Mail color="white" weight="fill" size={72} />
		<a href="mailto:roboticsedgemont@gmail.com" target="_blank" style="text-decoration: none;"
			><p class="hoverable">roboticsedgemont@gmail.com</p></a>
	</div>
	<div class="footer-item">
		<a
			href="https://www.instagram.com/RoboticsEdgemont/"
			target="_blank"
			class="insta-logo hoverable"><Insta size={72} /></a>
		<p>Follow our Instagram!</p>
	</div>
	<div class="footer-item">
		<a href="https://github.com/EdgemontRobotics" target="_blank" class="github-logo hoverable"
			><GitHub size={72} /></a>
		<p>See our work!</p>
	</div>
</div>

<style>
	.footer-container {
		gap: 20px;
		display: flex;
		justify-content: center;
		height: 250px;
		background-color: var(--gray-black);
	}
	.footer-item {
		display: flex;
		align-items: center;
		color: white;
	}
	p {
		margin: auto 0;
		font-family: var(--font-primary);
		font-size: 18px;
		color: white;
		padding-left: 10px;
	}
	.hoverable {
		color: var(--royal-blue);
		text-decoration: none;
	}
	.hoverable:hover {
		color: grey;
	}
	.github-logo {
		margin: auto 0;
	}
	.insta-logo {
		margin: auto 0;
	}
	.links {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.link {
		text-decoration: none;
		color: white;
		font-family: var(--font-primary);
	}
	.link:hover {
		color: grey;
	}
	.quickLinks {
		padding: 20px;
	}
	.h3 {
		font-size: 20px;
		font-weight: 700;
		line-height: 120%;
		font-family: var(--font-display);
		color: var(--royal-blue);
	}

	@media screen and (max-width: 768px) {
		.footer-container {
			flex-direction: column;
            height: auto;
            padding-bottom: 20px
		}
	}
</style>
