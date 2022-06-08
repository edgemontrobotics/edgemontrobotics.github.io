<script>
	import Saos from 'saos';
</script>

<svelte:head>
	<title>Programming - Edgemont Robotics</title>
</svelte:head>

<header class="header">
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Programming</h1>
		</div>
	</div>
</header>

<div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
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
		</Saos>
	</div>
	<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
	<h2 class="h2 design-title grey-background" data-aos="fade-up">
		Creating Camera Vision
	</h2>
	</Saos>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>

		<div class="row containter leftImage visible design-padding" data-aos="fade-up">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage noHeightLimit" src="./programming/code.png" />
			<div class="description">
				<h2 class="h2">A little bit of code</h2>
				<div class="text">
					For the 2021-22 season, we created our own Camera Vision system.
					This system allows the cameras on the robot to recognize the color of an object infront of
					it. Then the code figures out whether the green is present in the left, middle, or right
					of the picture. Our code uses HSV coloring techniques, saturation curves, and brightness
					correction to account for different lighting conditions. This information is passed to the
					other control systems which allows the roboto to perform vital functions.
				</div>
			</div>
		</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>

		<div class="row containter rightImage visible design-padding" data-aos="fade-up">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./programming/cameravision.png" />
			<div class="description">
				<h2 class="h2">Camera Vision in action</h2>
				<div class="text">
					This image shows Camera Vision in action. It is a simple example of what the robot "sees" and how it is able to recognize how much green is in the picture.
				</div>
			</div>
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
	.row {
		padding: 120px 40px 120px 40px;
		/* Top, Right, Bottom, Left */
	}
	.design-padding {
		padding: 60px 40px 60px 40px;
		/* Top, Right, Bottom, Left */
	}
	.design-title {
		padding: 60px 40px 60px 40px;
		text-align: center;
	}
	.noHeightLimit{
		max-height: 100%;
	}
	.header {
		background-image: url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
	}
	.inner {
		background-color: rgba(0, 0, 0, 0.5);
	}
	@media screen and (max-width: 768px) {
		.design-padding {
			padding: 20px 40px 20px 40px;
		}
		.row {
			padding: 60px 40px 60px 40px;
		}
	}
</style>
