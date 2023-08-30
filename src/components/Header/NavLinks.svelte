<script lang="ts">
  import { getMetadata } from '@/utils/metadata';
  	import { onMount } from "svelte";

	export let isDocs = false;
	export let isChangelog = false;

	let isDevMode = false
	let isAuthenticated = false

	onMount(async () => {
		const data = await getMetadata();
		isDevMode = data.isDevMode;
		isAuthenticated = data.isAuthenticated;
	})
</script>

<div class="links">
	{#if isAuthenticated}
		<a href="/">Open Canvas</a>
	{:else}
		<a href="/login">Login to Space</a>
	{/if}

	{#if isDocs}
		<a href="/blog">Blog</a>
	{:else if isChangelog}
		<a href="/docs/">Docs</a>
	{/if}

    <a href="https://go.deta.dev/discord">Join Discord</a>
</div>

<style>
    .links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.links a {
		cursor: pointer;
		color: var(--theme-text);
		font-weight: 500;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.links a:hover {
		color: var(--theme-accent);
	}

	@media (max-width: 50em) {
		.links {
			gap: 1rem;
		}

		.links a {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 25em) {
		.links {
			display: none;
		}
	}
</style>