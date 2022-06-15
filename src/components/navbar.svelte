<script>
	// @ts-nocheck
	import Cross from 'phosphor-svelte/lib/X';
	import List from 'phosphor-svelte/lib/List';

	function openNav() {
		document.getElementById('sidebar').style.width = '250px';
		document.getElementById('sidebarButton').style.marginLeft = '250px';
		console.log('openNav');
	}
	function closeNav() {
		document.getElementById('sidebar').style.width = '0';
		document.getElementById('sidebarButton').style.marginLeft = '0';
		console.log('closeNav');
	}
</script>

<div class="navrow">
	<header class="wrapper">
		<nav class="nav">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="logoLink logo" href="./">
				<img src="/photos/logo_fullname.svg" width="225" height="auto" />
			</a>
			<div class="links">
				<ul>
					<li><a class="link" href="/mechanics">Mechanics</a></li>
					<li><a class="link" href="/programming">Programming</a></li>
					<li><a class="link" href="/outreach">Outreach</a></li>
					<li><a class="link" href="/gallery">Gallery</a></li>
					<li><a class="link" href="/team">The Team</a></li>
				</ul>
			</div>
		</nav>
	</header>
</div>

<div class="sidebar-container">
	<div class="nav">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="logoLink logo" href="./">
			<img src="/photos/logo_fullname.svg" width="200" height="auto" />
		</a>
		<button class="toggle-button" id="sidebarButton" on:click="{openNav}">
			<List color="white" weight="bold" size={32} />
		</button>
	</div>
	<div class="sidebar" id="sidebar">
		<a href="." class="closebtn" on:click={closeNav}><Cross color="black" weight="bold" size={32} /></a>
		<a class="link" href="/" on:click={closeNav}>Home</a>
		<a class="link" href="/mechanics" on:click={closeNav}>Mechanics</a>
		<a class="link" href="/programming" on:click={closeNav}>Programming</a>
		<a class="link" href="/outreach" on:click={closeNav}>Outreach</a>
		<a class="link" href="/gallery" on:click={closeNav}>Gallery</a>
		<a class="link" href="/team" on:click={closeNav}>The Team</a>
	</div>
</div>

<style>
	.sidebar-container {
		display: none;
	}
	a {
		font-family: var(--font-display);
		font-weight: 300;
	}
	.navrow {
		margin: 0 auto;
	}
	.nav {
		position: absolute;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
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
		font-size: 18px;
		line-height: 140%;
		font-weight: 600;
	}
	.links ul {
		display: flex;
		margin: 0;
		padding: 0;
	}
	.links li {
		list-style: none;
	}
	.links li a {
		text-decoration: none;
	}
	.links li a:hover {
		border-bottom: 2px solid #fff;
		padding-bottom: 1px;
	}
	.link {
		margin: 20px;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}

	/* .links {
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
 */
	.toggle-button {
		position: absolute;
		background-color: Transparent;
		border: none;
		right: 1rem;
		display: none;
		flex-direction: column;
		justify-content: space-between;
	}

	@media screen and (max-width: 850px) {
		.navrow {
			display: none;
		}
		.sidebar-container {
			display: block;
			overflow: hidden;
		}
		.nav {
			flex-direction: column;
			align-items: flex-start;
		}
		.toggle-button {
			display: flex;
		}
		.sidebar {
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			top: 0;
			right: 0;
			background-color: white;
			overflow-x: hidden;
			transition: 0.5s;
			padding-top: 60px;
		}
		.link {
			padding: 8px 8px 8px 32px;
			text-decoration: none;
			font-size: 16px;
			color: black;
			display: block;
			transition: 0.3s;
			white-space: pre;
			margin: 10px;
		}
		.link:hover {
			color: grey;
		}
		.closebtn {
			position: absolute;
			top: 20px;
			right: 20px;		
			font-size: 36px;
			margin-left: 50px;
			text-decoration: none;
			color: black;
		}
	}
	/* @media screen and (max-width: 1100px) {
		.nav {
			gap: 10vw;
		}
		.link {
			margin: 10px;
		}
	} */
</style>
