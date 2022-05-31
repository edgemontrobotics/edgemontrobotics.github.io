<svelte:head>
	<title>Mechanics - Edgemont Robotics</title>
</svelte:head>

<header>
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Mechanics</h1>
		</div>
	</div>
</header>

<div>
	<div class="grid">
		<div class="row containter rightImage visible" data-aos="fade-up">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./illustrations/undraw_artificial_intelligence_re_enpp.svg" />
			<div class="description">
				<h2 class="h2">What does mechanics do?</h2>
				<div class="text">
					Like the name suggests, the mechanics team is in charge of actually building the robot.
					Mechanics is all about fostering the imagination of young engineers. We prioritize
					simplicity in our designs - not only does this make our process accessible to new members
					but it's critical for allowing us to resolve our issues efficiently. We utilize design
					software like CAD to plan our robot chassis designs to ensure our time is spent well.
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
