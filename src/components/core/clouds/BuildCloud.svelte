<div class="holder">
	<img class="placeholder" src="/docs_assets/cloud-illustrations/transparent-background.png" alt="for position" />
	<div class="cloud-painted overlay"> </div>
	<div class="deta-blue overlay"></div> 
    <div class="deta-build overlay"></div>
</div>

<style>
	.holder {
		position: relative;
        width: 100%;
		margin-bottom: 5rem;
	}

	.placeholder {
		position: relative;
		width: 110%;
		height: auto;
	}

	.cloud-painted {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("/docs_assets/cloud-illustrations/cloud-cartoon.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.deta-blue {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #4D73E0;
		mix-blend-mode: multiply;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-mask-image: url("/docs_assets/cloud-illustrations/cloud-cartoon.png");
		mask-image: url("/docs_assets/cloud-illustrations/cloud-cartoon.png");
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: cover;
		-webkit-mask-position: center;
  		-webkit-mask-mode: alpha;
		mask-repeat: no-repeat;
		mask-size: cover;
		mask-position: center;
  		mask-mode: alpha;
	}

	.deta-build {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("/docs_assets/cloud-illustrations/anime/deta-build.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(1);
		opacity: 1;
	}

</style>