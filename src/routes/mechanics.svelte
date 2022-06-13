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
			<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
				<h1 class="banner-title">Mechanics</h1>
			</Saos>
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
						Every year, the challenge changes. While some parts of the robot stay the same
						year-over-year, most of the parts change. However, before we can start putting parts
						together we need to sketch out what we want the robot to look like.
						<br />
						<br />
						Sketch by Griffin Rho ('24).
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
						process. We use Fusion 360 to create a 3D representation of our sketch.
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
					<h2 class="h2">Evolving Designs</h2>
					<div class="text">
						Our CAD design never truly finished. It is constantly evolving throughout the year as we recognize missing
						features and add new ones. These new features can range from support rods to a 3D printed ramp.
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
						After hours of design, interation, testing, and more testing, the final look of the robot comes alives. This
						final version the combined result of over a dozen members, not just in Mechanics, but in all of our teams.
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
				<video class="video" loop playsinline bind:this={videoRef}>
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