<div class="holder">
    <div class="cloud-painted">
        <div class="deta-pink overlay">
            <div class="sparkles overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-pink overlay">
            <div class="deta-learn overlay">
            </div>
        </div>
    </div>
</div>
<h2>Build</h2>

<div class="holder">
    <div class="cloud-painted">
        <div class="deta-blue overlay">
            <div class="blocks overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-blue overlay">
            <div class="anime4 overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-blue overlay">
            <div class="deta-build overlay">
            </div>
        </div>
    </div>
</div>
<h2>Use</h2>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-yellow overlay">
            <div class="deta-build overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-yellow overlay">
            <div class="deta-use overlay">
            </div>
        </div>
    </div>
</div>

<h2>Publish</h2>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-green overlay">
            <div class="anime2 overlay">
            </div>
        </div>
    </div>
</div>

<div class="holder">
    <div class="cloud-painted">
        <div class="deta-green overlay">
            <div class="anime3 overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-green overlay">
            <div class="deta-publish overlay">
            </div>
        </div>
    </div>
</div>
<div class="holder">
    <div class="cloud-painted">
        <div class="deta-green overlay">
            <div class="anime1 overlay">
            </div>
        </div>
    </div>
</div>

<div class="holder">
    <div class="cloud-painted">
        <div class="deta-green overlay">
            <div class="anime4 overlay">
            </div>
        </div>
    </div>
</div>

<style>
	.holder {
		position: relative;
        width: 100%;
        background: red;
	}
	.cloud-painted {
		content:'';
		position: relative;
		top: 0;
		left: 0;
		width: 712px;
		height: 304px;
		background-image: url("/docs-assets/cloud-illustrations/cloud-cartoon.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

	}
	.sparkles {
		background-image: url("/docs-assets/cloud-illustrations/sparkles.gif");
		mix-blend-mode: color-dodge;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		opacity: 1;

	}
	.blocks {
		background-image: url("/docs-assets/cloud-illustrations/build.gif");
		mix-blend-mode: soft-light;
		filter: contrast(1.2) brightness(1) saturate(0.5);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		opacity: 1;

	}
	.deta-learn {
		background-image: url("/docs-assets/cloud-illustrations/anime/deta-learn.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(0.8) saturate(0.5);
		opacity: 1;

	}
	.deta-build {
		background-image: url("/docs-assets/cloud-illustrations/anime/deta-build.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(1);
		opacity: 1;
	}
	.deta-publish {
		background-image: url("/docs-assets/cloud-illustrations/anime/deta-publish.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(0.8) brightness(1) saturate(2);
		opacity: 1;
	}
	.deta-use {
		background-image: url("/docs-assets/cloud-illustrations/anime/deta-use.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(0);
		opacity: 1;
	}
	.anime1 {
		background-image: url("/docs-assets/cloud-illustrations/anime/1anime.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(0);
		opacity: 1;
	}
	.anime2 {
		background-image: url("/docs-assets/cloud-illustrations/anime/2anime.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(0);
		opacity: 1;
	}
	.anime3 {
		background-image: url("/docs-assets/cloud-illustrations/anime/3anime.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		filter: contrast(1.2) brightness(1) saturate(0);
		opacity: 1;
	}
	.anime4 {
		background-image: url("/docs-assets/cloud-illustrations/anime/4anime.gif");
		mix-blend-mode: screen;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		filter: contrast(1.2) brightness(1) saturate(0);
		opacity: 1;
	}

	.deta-pink {
		background-color: #F26DAA;
		mix-blend-mode: multiply;
	}
	.deta-yellow {
		background-color: #FA870C;
		mix-blend-mode: multiply;
	}
	.deta-blue {
		background-color: #4D73E0;
		mix-blend-mode: multiply;
	}
	.deta-green {
		background-color: #0EC463;
		mix-blend-mode: multiply;
	}
	.overlay {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-mask-image: url("/docs-assets/cloud-illustrations/cloud-cartoon.png");
		mask-image: url("/docs-assets/cloud-illustrations/cloud-cartoon.png");
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: cover;
		-webkit-mask-position: center;
  		-webkit-mask-mode: alpha;
		mask-repeat: no-repeat;
		mask-size: cover;
		mask-position: center;
  		mask-mode: alpha;
	}
</style>