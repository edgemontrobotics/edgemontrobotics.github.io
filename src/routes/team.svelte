<svelte:head>
	<title>Team - Edgemont Robotics</title>
</svelte:head>

<header>
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">The Team</h1>
		</div>
	</div>
</header>

<div>
	<div class="flexbox-outer">
        <!-- Lower -->
        <div data-aos="fade-up">
            <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
            <h2 class="h2">Talia Dardis</h2>
            <h3 class="h3">Faculty Advisor</h3>
        </div>
        <!-- Captains -->
        <div class="flexbox-inner" data-aos="fade-up">
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Alex William</h2>
                <h3 class="h3">Co-Captain of Mechanics</h3>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Gautam Soni</h2>
                <h3 class="h3">Co-Captain of Mechanics</h3>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Brandon Jeon</h2>
                <h3 class="h3">Co-Captain of Programming</h3>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Ella Schneyer</h2>
                <h3 class="h3">Co-Captain of Programming</h3>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Yansi Foong</h2>
                <h3 class="h3">Director of Outreach</h3>
            </div>
        </div>
        <!-- Noncaptains -->
        <div class="flexbox-inner" data-aos="fade-up">
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Rahman Ahmed</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Eugene Cho</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Maxwell Ho</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Jonas Im</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Lindsay Jaffe</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Uichan Jeong</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Uihyun Jeong</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Haris Karim</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Siddanth Karthik</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Daniel Lee</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Lauren Lee</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Richa Patil</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Arjun Rajdev</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Hillary Schuldenfrei</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Ananya Shah</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Yash Shah</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Matthew Zeitz</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Haoyi Zhang</h2>
            </div>
            <div>
                <img class="profile-picture" src="./profile-placeholder.png" alt="placeholder" width="300" height="auto">
                <h2 class="h2">Alexander Zhou</h2>
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

	.h2 {
		font-size: 30px;
		font-weight: 700;
		line-height: 120%;
		font-family: var(--font-display);
		margin: 0;
	}
	.h3 {
		font-size: 18px;
		font-weight: 500;
		line-height: 120%;
		font-family: var(--font-display);
		margin: 0;
	}

	.flexbox-outer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
        padding: 50px;
        margin: auto 0;
        text-align: center;
        justify-content: center;
	}
	.flexbox-inner {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
        gap: 50px;
        padding: 50px;
        margin: auto 0;
        text-align: center;
        justify-content: center;
        max-width: 1700px;
	}

    .profile-picture {
        transition: transform .5s;
        margin-bottom: 10px;
    }
    .profile-picture:hover {
        transform: scale(1.1);
    }
</style>
