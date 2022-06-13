<script>
    import Saos from "saos";
</script>

<svelte:head>
    <title>Team - Edgemont Robotics</title>
</svelte:head>

<header class="header">
    <div class="inner">
        <div class="banner-splash">
            <Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
                <h1 class="banner-title">The Team</h1>
            </Saos>
        </div>
    </div>
</header>

<div class="flexbox-outer no-overflow">
    <!-- Lower -->
    <Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
        <div>
            <img class="profile-picture" src="./people/profile-placeholder.png" alt="placeholder" width="200"
                height="275" />
            <h2 class="h2">TBD</h2>
            <h3 class="h3">Faculty Advisor</h3>
        </div>
    </Saos>
    <!-- Captains -->
    <Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
        <div class="captains">
            <div class="person">
                <img class="profile-picture" src="./people/alex.jpg" alt="placeholder" width="200" height="275" />
                <h2 class="h2">Alex William</h2>
                <h3 class="h3">Co-Captain of Mechanics</h3>
                <a href="mailto:awilliam@student.edgemont.org" target="_blank" class="email">
                    <h4 class="h4">awilliam@student.edgemont.org</h4>
                </a>
            </div>
            <div class="person">
                <img class="profile-picture" src="./people/gautam.png" alt="placeholder" width="200" height="275" />
                <h2 class="h2">Gautam Soni</h2>
                <h3 class="h3">Co-Captain of Mechanics</h3>
                <a href="mailto:gsoni@student.edgemont.org" target="_blank" class="email">
                    <h4 class="h4">gsoni@student.edgemont.org</h4>
                </a>
            </div>
            <div class="person">
                <img class="profile-picture" src="./people/brandon.jpg" alt="placeholder" width="200" height="275" />
                <h2 class="h2">Brandon Jeon</h2>
                <h3 class="h3">Co-Captain of Programming</h3>
                <a href="mailto:bjeon@student.edgemont.org" target="_blank" class="email">
                    <h4 class="h4">bjeon@student.edgemont.org</h4>
                </a>
            </div>
            <div class="person">
                <img class="profile-picture" src="./people/ella.jpg" alt="placeholder" width="200" height="275" />
                <h2 class="h2">Ella Schneyer</h2>
                <h3 class="h3">Co-Captain of Programming</h3>
                <a href="mailto:eschneyer@student.edgemont.org" target="_blank" class="email">
                    <h4 class="h4">eschneyer@student.edgemont.org</h4>
                </a>
            </div>
            <div class="person">
                <img class="profile-picture" src="./people/yansi.jpg" alt="placeholder" width="200" height="275" />
                <h2 class="h2">Yansi Foong</h2>
                <h3 class="h3">Director of Outreach, Treasurer</h3>
                <a href="mailto:yanfoong@student.edgemont.org" target="_blank" class="email">
                    <h4 class="h4">yanfoong@student.edgemont.org</h4>
                </a>
            </div>
        </div>
    </Saos>
    <!-- Noncaptains -->
    <Saos animation={'fade-in-up .75s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once={true} top={250}>
        <div class="noncaptains">
            <h2 class="h2">Rahman Ahmed</h2>
            <h2 class="h2">Eugene Cho</h2>
            <h2 class="h2">Maxwell Ho</h2>
            <h2 class="h2">Jonas Im</h2>
            <h2 class="h2">Lindsay Jaffe</h2>
            <h2 class="h2">Uichan Jeong</h2>
            <h2 class="h2">Uihyun Jeong</h2>
            <h2 class="h2">Haris Karim</h2>
            <h2 class="h2">Siddanth Karthik</h2>
            <h2 class="h2">Daniel Lee</h2>
            <h2 class="h2">Lauren Lee</h2>
            <h2 class="h2">Richa Patil</h2>
            <h2 class="h2">Arjun Rajdev</h2>
            <h2 class="h2">Hillary Schuldenfrei</h2>
            <h2 class="h2">Ananya Shah</h2>
            <h2 class="h2">Yash Shah</h2>
            <h2 class="h2">Matthew Zeitz</h2>
            <h2 class="h2">Haoyi Zhang</h2>
            <h2 class="h2">Alexander Zhou</h2>
        </div>
    </Saos>
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
		background-image: url('/photos/team-cover.jpg');
	}
	.inner {
		background-color: rgba(0, 0, 0, 0.5);
	}

    .h2 {
        font-size: 28px;
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

    .h4 {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        font-family: var(--font-display);
        margin: 0;
    }

    .email {
        text-decoration: none;
        color: var(--royal-blue);
    }

    .email:hover {
        text-decoration: underline;
    }

    .flexbox-outer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 35px;
        margin: auto 0;
        text-align: center;
        justify-content: center;
    }

    .captains,
    .noncaptains {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px;
        padding: 35px;
        margin: auto 0;
        text-align: center;
        justify-content: center;
        max-width: 1700px;
    }

    .profile-picture {
        transition: transform 0.5s;
        margin-bottom: 10px;
        object-fit: cover;
    }

    .profile-picture:hover {
        transform: scale(1.1);
    }

    .person {
        min-width: 300px;
    }

    @media screen and (max-width: 768px) {
        .noncaptains {
            flex-direction: column;
            padding: 10px;
        }
    }
    @media screen and (max-width: 1900px) {
        
    }
</style>