<div class="holder">
	<img class="placeholder" src="/docs_assets/cloud-illustrations/transparent-background.png" alt="for position" />
	<div class="cloud-painted overlay"> </div>
    <div class="deta-green overlay"></div> 
    <div class="deta-publish overlay"></div>
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

	.deta-green {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #0EC463;
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

	.deta-publish {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("/docs_assets/cloud-illustrations/anime/deta-publish.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(1);
		opacity: 1;
	}

</style>