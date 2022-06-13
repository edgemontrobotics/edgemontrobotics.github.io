<script>
	import Saos from 'saos';
</script>

<svelte:head>
	<title>Outreach - Edgemont Robotics</title>
</svelte:head>

<header class="header">
	<div class="inner">
		<div class="banner-splash">
			<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
				<h1 class="banner-title">Outreach</h1>
			</Saos>
		</div>
	</div>
</header>

<div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="row containter rightImage visible">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="image featureImage" src="./illustrations/undraw_team_collaboration_re_ow29.svg" />
				<div class="description">
					<h2 class="h2">What is outreach?</h2>
					<div class="text">
						Outreach is all about community interaction and developing entrepreneurial and business
						skills. The Outreach team manages the treasury. We ensure the Robotics team has a strong
						balance to afford various expenses like parts and we work to contact various companies
						for sponsorships and fundraising events. Most importantly, the Outreach team works hard
						to promote Gracious Professionalism among all members and between all community
						interactions.
					</div>
				</div>
			</div>
		</Saos>
	</div>
	<div class="grid partnersContainer grey-background no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<h2 class="h2" style="text-align: center;">Our Partners</h2>
			<div class="logos">
				<a href="https://edgemontptsa.org/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_edgemont_ptsa.jpg" alt="Edgemont PTSA Logo" height="256"
						width="256" /></a>
				<a href="https://www.community.chipotle.com/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_chipotle.svg" alt="Chiptole Logo" height="256" width="256" /></a>
				<a href="https://www.mezzalunascarsdale.com/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_mezzaluna.png" alt="Mezzaluna Logo" height="256" width="256" /></a>
				<a href="https://www.pizzarellispizzeria.com/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_pizzarellis.webp" alt="Pizzarellis Logo" height="256"
						width="auto" /></a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0)"><img class="partnerLogo" src="./partners/partner_nonnis.png"
						alt="Nonni's Logo" height="256" width="auto" /></a>
				<a href="https://www.villagecomputershop.com/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_village_computer.png" alt="Village Computer Shop Logo" height="256"
						width="auto" /></a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0)"><img class="partnerLogo" src="./partners/partner_scarsdale_bagels.jpg"
						alt="Scarsdale Bagels Logo" height="300" width="auto" /></a>
				<a href="https://www.bethesdabaptistny.org/" target="_blank"><img class="partnerLogo"
						src="./partners/partner_bethesda_church.png" alt="Bethesda Baptist Church New Rochelle Logo"
						width="auto" height="221" /></a>
			</div>
		</Saos>
	</div>
	<div class="grid no-overflow">
		<Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
			<div class="work-with-us">
				<h2 class="h2">Work with us!</h2>
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSf44hiLJGWaB1ARTtk5Rf87ZgUqms-KswBuGKbXEMiGCjZUDg/viewform?embedded=true"
					width="800" height="1120" />
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
		background-image: url('/photos/outreach-cover.png');
	}
	.inner {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.row,
	.work-with-us {
		padding: 120px 40px 120px 40px;
		/* Top, Right, Bottom, Left */
	}

	.work-with-us {
		text-align: center;
	}

	.partnersContainer {
		padding: 120px 0 120px 0;
		overflow: none;
	}

	.h2 {
		padding-bottom: 20px;
	}

	.logos {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 10px;
		gap: 35px;
		align-items: center;
	}

	.partnerLogo {
		transition: transform 0.7s;
	}

	.partnerLogo:hover {
		transform: scale(1.125);
	}

	iframe {
		border: 0;
	}

	@media screen and (max-width: 768px) {

		.row,
		.work-with-us {
			padding: 60px 40px 60px 40px;
		}

		.logos {
			flex-direction: column;
		}

		.partnerLogo {
			width: 200px;
			height: auto;
		}

		iframe {
			width: 90vw;
			height: 100vh;
		}
	}
</style>