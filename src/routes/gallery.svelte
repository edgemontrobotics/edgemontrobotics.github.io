<svelte:head>
	<title>Gallery - Edgemont Robotics</title>
</svelte:head>

<header>
	<div class="inner">
		<div class="banner-splash">
			<h1 class="banner-title">Gallery</h1>
		</div>
	</div>
</header>

<div class="gallery-container">
	<div class="w-4 h-3" data-aos="fade-right">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4349_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-3" data-aos="fade-left">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/20220213_131504_cropped.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-3" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4361_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-4 h-3" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4353_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-4 h-3" data-aos="fade-right">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./photos/team_photo_fall.png" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-3" data-aos="fade-left">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4371_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-3 h-3" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4374_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-3 h-3" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/20220213_140848_cropped.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>

	<div class="w-2 h-4" data-aos="fade-right">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/IMG_9375.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-2" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/IMG_2170.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-4" data-aos="fade-left">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/IMG_9371.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-2 h-2" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/DSC_4405_cropped.JPG" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>
	<div class="w-6 h-4" data-aos="fade-up">
		<div class="gallery-item">
			<div class="gallery-image">
				<img src="./gallery/scrimmage.jpg" alt="nature" />
			</div>
			<div class="text"></div>
		</div>
	</div>

</div>
<div class="h-1 h-2 h-3 h-4 h-5 h-6 w-1 w-2 w-3 w-4 w-5 w-6"></div>

<style>
	header {
		height: 820px;
		background: linear-gradient(90deg, #b473f5, #e292aa);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.inner {
		background-image: url('./illustrations/undraw_camera_re_cnp4.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
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
	.gallery-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 100px 300px;
		grid-gap: 10px; /* This and the margin tag below should be same size so that it looks good.*/
		grid-auto-flow: dense;
		margin: 10px;
		text-align: center;
	}
	.gallery-item {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.gallery-item .gallery-image {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.gallery-item .gallery-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.gallery-item .text {
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 25px;
		pointer-events: none;
		z-index: 4;
		transition: 0.3s ease-in-out;
	}

	.gallery-item:hover .text {
		opacity: 1;
		animation: move-down 0.3s linear;
		width: 100%;
	}

	.w-1 {grid-column: span 1;}
	.w-2 {grid-column: span 2;}
	.w-3 {grid-column: span 3;}
	.w-4 {grid-column: span 4;}
	.w-5 {grid-column: span 5;}
	.w-6 {grid-column: span 6;}

	.h-1 {grid-row: span 1;}
	.h-2 {grid-row: span 2;}
	.h-3 {grid-row: span 3;}
	.h-4 {grid-row: span 4;}
	.h-5 {grid-row: span 5;}
	.h-6 {grid-row: span 6;}

	@media screen and (max-width:500px){
    .gallery-container{
        grid-template-columns: repeat(1,1fr);
    }
    .w-1,.w-2,.w-3,.w-4,.w-5,.w-6{
        grid-column:span 1;
    }
}
</style>
