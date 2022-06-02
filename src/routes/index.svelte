<svelte:head>
	<title>Edgemont Robotics</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<header class="header">
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Edgemont Robotics</h1>
			<h2 class="banner-subtitle">Edging out the competition.</h2>
		</div>
	</div>
</header>

<div>
	<div class="grid">
		<div class="row containter leftImage visible">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./photos/team_photo_fall.png" />
			<div class="description">
				<h2 class="h2">Who are we?</h2>
				<div class="text">
					We are 7-12th grade STEAM focused team founded on the principle of a love for all things
					robotics. Our team has also been incredibly resilient, and every year despite setbacks has
					continued to improve and get closer to our ultimate goal: making it to Worlds. As a
					culture, we celebrate Gracious Professionalism, and ensure that our environment is always
					incredibly open to positivity and curiosity.
				</div>
			</div>
		</div>
	</div>
	<div class="grid grey-background">
		<div class="row containter rightImage visible">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./photos/21Robot_Render_cropped.png" />
			<div class="description">
				<h2 class="h2">What do we do?</h2>
				<div class="text">
					We work to create a robot that can accomplish a set of tasks during a competition. Whether
					shooting hoops or placing a rubber ducks on a carousel, every year brings different
					challenges.
				</div>
			</div>
		</div>
	</div>
	<div class="grid">
		<div class="row containter leftImage visible">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./illustrations/undraw_team_up_ip2x.svg" />
			<div class="description">
				<h2 class="h2">Get involved!</h2>
				<div class="text">
					We are always looking for future members. We accept anyone, regardless of experience. Just
					drop in to one of our meetings either <span class="keyword">Monday</span> or
					<span class="keyword">Wednesday</span> after school.
				</div>
			</div>
		</div>
	</div>
	<div class="grid grey-background">
		<div class="eng-portfolio">
			<a
				href="https://docs.google.com/document/d/1K2HBo31_Uack4QTbKGU6tca6Uu0lDzW8jU99CqqPp2U/"
				target="_blank"><h2 class="h2 h2-ep">Engineering Portfolio</h2></a
			>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://docs.google.com/document/d/1K2HBo31_Uack4QTbKGU6tca6Uu0lDzW8jU99CqqPp2U/preview?usp=embed_googleplus"
			/>
		</div>
	</div>
</div>

<style>
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
		transform: scale(1.2);
	}

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
