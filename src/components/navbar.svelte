<script>
	import House from 'phosphor-svelte/lib/House';
</script>

<div class="row">
	<header class="wrapper">
		<nav class="nav">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="logoLink logo" href="./">
				<img src="/photos/logo_fullname.svg" width="200" height="auto">
			</a>
			<div class="links">
				<a class="link" href="/mechanics">Mechanics</a>
				<a class="link" href="/programming">Programming</a>
				<a class="link" href="/outreach">Outreach</a>
				<a class="link" href="/gallery">Gallery</a>
				<a class="link" href="/team">The Team</a>
			</div>
		</nav>
	</header>
</div>

<style>
	a {
		font-family:var(--font-primary);
	}
	.row {
		margin: 0 auto;
	}
	.wrapper {
		grid-column: span 4;
		grid-column: span var(--num-grid-columns);
	}
	.nav {
		position: absolute;
		-webkit-box-pack: justify;
		justify-content: space-between;
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		max-width: 1180px;
	}
	.logoLink {
		-webkit-box-pack: center;
		justify-content: center;
		display: -webkit-box;
		-webkit-box-align: center;
		align-items: center;
	}
	.logo {
		-webkit-box-flex: 0;
		flex: 0 0 auto;
	}
	.links {
		-webkit-box-flex: 1;
		flex: 1 1 auto;
		text-align: right;
		font-size: 18px;
		line-height: 140%;
		font-weight: 600;
	}
	.link {
		margin: 20px;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
	.link:hover {
		border-bottom: 2px solid #fff;
		padding-bottom: 1px;
	}

	@media screen and (max-width: 768px) {
		.wrapper {
			opacity: 0;
		}
	}
</style>
