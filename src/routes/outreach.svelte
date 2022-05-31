<script>
</script>

<svelte:head>
	<title>Outreach - Edgemont Robotics</title>
</svelte:head>

<header>
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Outreach</h1>
		</div>
	</div>
</header>

<div>
	<div class="grid">
		<div class="row containter rightImage visible" data-aos="fade-up">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="image featureImage" src="./illustrations/undraw_team_collaboration_re_ow29.svg" />
			<div class="description">
				<h2 class="h2">What is outreach?</h2>
				<div class="text">
					Outreach is all about community interaction and developing entrepreneurial and business
					skills. The Outreach team manages the treasury. We ensure the Robotics team has a strong
					balance to afford various expenses like parts and we work to contact various companies for
					sponsorships and fundraising events. Most importantly, the Outreach team works hard to
					promote Gracious Professionalism among all members and between all community interactions.
				</div>
			</div>
		</div>
	</div>
	<div class="grid partnersContainer grey-background">
		<h2 class="h2" data-aos="fade-up">Our Partners</h2>
		<div class="logos" data-aos="fade-up">
			<a href="https://edgemontptsa.org/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_edgemont_ptsa.jpg"
					alt="Edgemont PTSA Logo"
					height="256"
					width="256"
				/></a
			>
			<a href="https://www.community.chipotle.com/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_chipotle.svg"
					alt="Chiptole Logo"
					height="256"
					width="256"
				/></a
			>
			<a href="https://www.mezzalunascarsdale.com/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_mezzaluna.png"
					alt="Mezzaluna Logo"
					height="256"
					width="256"
				/></a
			>
			<a href="https://www.pizzarellispizzeria.com/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_pizzarellis.webp"
					alt="Pizzarellis Logo"
					height="256"
					width="auto"
				/></a
			>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="javascript:void(0)"
				><img
					class="partnerLogo"
					src="./partners/partner_nonnis.png"
					alt="Nonni's Logo"
					height="256"
					width="auto"
				/></a
			>
			<a href="https://www.villagecomputershop.com/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_village_computer.png"
					alt="Village Computer Shop Logo"
					height="256"
					width="auto"
				/></a
			>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="javascript:void(0)"
				><img
					class="partnerLogo"
					src="./partners/partner_scarsdale_bagels.jpg"
					alt="Scarsdale Bagels Logo"
					height="300"
					width="auto"
				/></a
			>
			<a href="https://www.bethesdabaptistny.org/" target="_blank"
				><img
					class="partnerLogo"
					src="./partners/partner_bethesda_church.png"
					alt="Bethesda Baptist Church New Rochelle Logo"
					width="auto"
					height="221"
				/></a
			>
		</div>
	</div>
	<div class="grid">
		<div class="work-with-us" data-aos="fade-up">
			<h2 class="h2">Work with us!</h2>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSf44hiLJGWaB1ARTtk5Rf87ZgUqms-KswBuGKbXEMiGCjZUDg/viewform?embedded=true"
				width="800"
				height="1120"
			/>
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
</style>
