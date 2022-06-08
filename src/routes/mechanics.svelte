<script>
	import {
		inview
	} from 'svelte-inview';
	import Saos from 'saos';

	let isInView;
	/**
	 * @type {HTMLVideoElement}
	 */
	let videoRef;
</script>

<svelte:head>
	<title>Mechanics - Edgemont Robotics</title>
</svelte:head>

<header class="header">
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Mechanics</h1>
		</div>
	</div>
</header>

<div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter rightImage visible row-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./illustrations/undraw_artificial_intelligence_re_enpp.svg" />
				<div class="description">
					<h2 class="h2">What does mechanics do?</h2>
					<div class="text">
						Like the name suggests, the mechanics team is in charge of actually building the robot.
						Mechanics is all about fostering the imagination of young engineers. We prioritize
						simplicity in our designs - not only does this make our process accessible to new
						members but it's critical for allowing us to resolve our issues efficiently. We utilize
						design software like CAD to plan our robot chassis designs to ensure our time is spent
						well.
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
		<h2 class="h2 design-title grey-background">The Robot Design Process</h2>
	</Saos>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter leftImage visible design-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./mechanics/sketch.png" />
				<div class="description">
					<h2 class="h2">Starting from sketch</h2>
					<div class="text">
						Every year, we are tasked with making a new completely new robot from scratch. Before we
						can do any building, we need to create a basic design for the robot.
						<br />
						<br />
						Sketch created by Griffin Rho ('24).
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter rightImage visible design-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./mechanics/design1.png" />
				<div class="description">
					<h2 class="h2">CAD Design Process</h2>
					<div class="text">
						Once our sketch has been semi-finalized, we begin the Computer Aided-Design (CAD)
						process. We use CAD software to plan our robot chassis designs to ensure our time is
						spent well.
						<br />
						<br />
						CAD created by Mihir Patil ('22) and Gautam Soni ('23).
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter leftImage visible design-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./mechanics/design2.png" />
				<div class="description">
					<h2 class="h2">Interations, Interations</h2>
					<div class="text">
						Our CAD design is constantly evolving throughout the year. We are constantly working on
						improving our designs and adding new features.
						<br />
						<br />
						CAD created by Gautam Soni ('23).
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter rightImage visible design-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./mechanics/render1.png" />
				<div class="description">
					<h2 class="h2">A simple render</h2>
					<div class="text">
						Once we have a solid design, we begin the render process. This allows us to bring our
						robot to life, allowing us to see what it is going to look like in the real world.
						<br />
						<br />
						Render created by Gautam Soni ('23).
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter leftImage visible design-padding">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./photos/21Robot_Render_cropped.png" />
				<div class="description">
					<h2 class="h2">The final look</h2>
					<div class="text">
						After several hours of interations and additions, a final render is created. This render
						is usually the most accurate representation of our robot.
						<br />
						<br />
						Render created by Mihir Patil ('22).
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="visible video-padding" use:inview on:enter={()=> videoRef.play()}
				on:leave={() => videoRef.pause()}
				>
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="video" loop bind:this={videoRef}>
					<source src="./mechanics/robot_low.mp4" type="video/mp4" />
				</video>
			</div>
		</Saos>
	</div>
</div>

<style>
	/* Scroll animations */
	@keyframes -global-fade-in-up {
		0% {
			opacity: 0;
			transform: translateY(3vw);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.header {
		background-image: url('https://images.unsplash.com/photo-1600466886092-f76fabd39a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
	}
	.inner {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.design-title {
		padding: 60px 40px 60px 40px;
		text-align: center;
	}

	.row-padding {
		padding: 120px 40px 120px 40px;
		/* Top, Right, Bottom, Left */
	}

	.design-padding,
	.video-padding {
		padding: 60px 40px 60px 40px;
		/* Top, Right, Bottom, Left */
		min-height: 100%;
	}

	.video {
		width: 70vw;
		height: auto;
	}

	@media screen and (max-width: 768px) {
		.video {
			width: 80vw;
			height: auto;
		}

		.video-padding,
		.design-padding {
			padding: 20px 40px 20px 40px;
		}

		.row {
			padding: 60px 40px 60px 40px;
		}
	}
</style>