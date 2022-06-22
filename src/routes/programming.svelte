<svelte:head>
	<title>Programming - Edgemont Robotics</title>
</svelte:head>

<header>
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Programming</h1>
		</div>
	</div>
</header>

<div>
	<div class="grid">
		<div class="row containter leftImage visible" data-aos="fade-up">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./illustrations/undraw_firmware_re_fgdy.svg" />
			<div class="description">
				<h2 class="h2">What are you programming?</h2>
				<div class="text">
					The programming team is responsible for making sure the robot can actually be used. The
					robot needs to be able to move on its own and with a controller. Programming is no easy
					task, and requires hours upon hours of work and heavy collaboration with the mechanics
					team to make sure that the code written can be effectively applied and used.
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	header {
		height: 820px;
		background-image: url('./banner_bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.inner {
		background: rgba(65, 105, 225, 0.5);
		overflow: hidden;
		height: 100%;
	}

	.banner-splash {
		position: relative;
		margin: 500px 0 0 200px;
		color: white;
		width: 800px;
	}

	.banner-title {
		font-size: 84px;
		font-weight: 700;
		line-height: 120%;
		font-family: var(--font-display);
		margin: 0;
	}

	.row {
		padding: 120px 40px 120px 40px;
		/* Top, Right, Bottom, Left */
	}
</style>
