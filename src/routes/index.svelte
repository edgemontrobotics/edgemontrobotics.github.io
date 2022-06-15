<script>
	import Saos from 'saos';
	import {
		createPopperActions
	} from 'svelte-popperjs';
	const [popperRef, popperContent] = createPopperActions({
		placement: 'right',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{
			name: 'offset',
			options: {
				offset: [-4, 15]
			}
		}]
	};

	let showTooltip = true;
</script>

<svelte:head>
	<title>Edgemont Robotics</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<header class="header">
	<div class="inner">
		<div class="banner-splash">
			<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
				<h1 class="banner-title">Edgemont Robotics</h1>
				<h2 class="banner-subtitle">Edging out the competition.</h2>
			</Saos>
		</div>
	</div>
</header>

<div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter leftImage visible">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./photos/team_photo_fall.png" />
				<div class="description">
					<h2 class="h2">Who are we?</h2>
					<div class="text">
						We are 7-12th grade STEAM focused team founded on the principle of a love for all things
						robotics. Our team has also been incredibly resilient, and every year despite setbacks
						has continued to improve and get closer to our ultimate goal: making it to Worlds. As a
						club, we celebrate Gracious Professionalism, and ensure that our environment is
						always incredibly open to positivity and curiosity.
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter rightImage visible">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./photos/21Robot_Render_cropped.png" />
				<div class="description">
					<h2 class="h2">What do we do?</h2>
					<div class="text">
						Every school year, as a part of the FIRST Tech Challenge (FTC), our team must design,
						build, program, and operate a robot to compete in a head-to-head challenge in an alliance
						format. Click <a class="keyword" href="https://www.youtube.com/watch?v=I6lX12idAf8"target="_blank">here</a>
						to see the FTC challenge game for the 2021-22 season.
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter leftImage visible">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./illustrations/undraw_team_up_ip2x.svg" />
				<div class="description">
					<h2 class="h2">Get involved!</h2>
					<div class="text">
						We are always looking for new members. Anyone can join, regardless of experience.
						Just drop in to one of our meetings either on <span class="keyword">Monday</span> or
						<span class="keyword">Wednesday</span> after school.
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="eng-portfolio">
				<a href="https://docs.google.com/document/d/1K2HBo31_Uack4QTbKGU6tca6Uu0lDzW8jU99CqqPp2U/"
					target="_blank" use:popperRef>
					<h2 class="h2 h2-ep">Engineering Portfolio</h2>
				</a>
				{#if showTooltip}
					<div id="tooltip" use:popperContent={extraOpts}>
						Click Me!
						<div id="arrow" data-popper-arrow />
					</div>
				{/if}
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					src="https://docs.google.com/document/d/1K2HBo31_Uack4QTbKGU6tca6Uu0lDzW8jU99CqqPp2U/preview?usp=embed_googleplus"
				/>
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
	/* ----------------------------------------------- */

	.header {
		background-image: url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
	}

	.inner {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.text {
		font-size: clamp(16px, 2vw, 20px);
		font-family: var(--font-primary);
		color: var(--off-grey);
		margin-top: 24px;
	}

	.row,
	.eng-portfolio {
		padding: 120px 40px 120px 40px;
		/* Top, Right, Bottom, Left */
	}

	.eng-portfolio {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.description {
		color: #23272a;
		color: var(--not-quite-black);
		grid-column: span 4;
		grid-column: span var(--num-grid-columns);
	}

	.leftImage .description,
	.rightImage .description {
		margin-top: 20px;
	}

	.image {
		grid-column: span 4;
		grid-column: span var(--num-grid-columns);
		width: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		margin-top: 24px;
	}

	.keyword {
		color: var(--royal-blue);
	}

	.h2-ep {
		text-align: center;
		margin-bottom: 10px;
		transition: transform 1s;
	}

	iframe {
		border: 0;
		width: 800px;
		height: 800px;
	}

	.eng-portfolio a {
		text-decoration: none;
		color: black;
	}

	.h2-ep:hover {
		transition: transform 1s;
		transform: scale(1.05);
	}

	/* Engineering Portfolio Tooltip */
	#tooltip {
		font-family: var(--font-primary);
		background: #333;
		color: white;
		font-weight: 200;
		padding: 4px 8px;
		font-size: 13px;
		border-radius: 4px;
	}
	#arrow,
	#arrow::before {
		position: absolute;
		width: 8px;
		height: 8px;
		top: -4px;
		background: inherit;
	}

	#arrow {
		visibility: hidden;
		left: -4px;
	}

	#arrow::before {
		visibility: visible;
		content: '';
		transform: rotate(45deg);
	}
	/* ----------------------------------------------- */
	@media screen and (min-width: 768px) {
		.rightImage .description {
			margin-top: 0;
			grid-column: span 4;
			-webkit-box-ordinal-group: 2;
			-ms-flex-order: 1;
			order: 1;
		}

		.rightImage .image {
			grid-column: span 4;
			-webkit-box-ordinal-group: 3;
			-ms-flex-order: 2;
			order: 2;
			margin-top: auto;
			margin-bottom: auto;
		}

		.leftImage .description {
			margin-top: 0;
			grid-column: span 4;
		}

		.leftImage .image {
			grid-column: span 4;
			margin-top: auto;
			margin-bottom: auto;
		}

		.description {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
	}

	@media screen and (min-width: 1024px) {
		.rightImage .description {
			grid-column: 1 / span 4;
		}

		.rightImage .image {
			grid-column: 6 / span 7;
		}

		.leftImage .description {
			grid-column: 9 / span 4;
			-webkit-box-ordinal-group: 3;
			-ms-flex-order: 2;
			order: 2;
		}

		.leftImage .image {
			grid-column: span 7;
			-webkit-box-ordinal-group: 2;
			-ms-flex-order: 1;
			order: 1;
		}
	}

	@media screen and (max-width: 768px) {
		iframe {
			width: 320px;
			height: 500px;
		}

		.row {
			padding: 60px 40px 60px 40px;
		}
	}
</style>