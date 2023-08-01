<script lang="ts">
    import { onMount } from "svelte";
    import { getMetadata } from "@/utils/metadata";

    let isAuthenticated = false
    let loading = true

	onMount(async () => {
		const data = await getMetadata();
		isAuthenticated = data.isAuthenticated;
        loading = false
	})
</script>

{#if loading}
    <!-- Keep emtpy for now -->
{:else if isAuthenticated}
    <a href="/" aria-label="Button" data-no-instant>
        <div><div class="" style="width: 20px; height: 20px;"><svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="1.15273" y="1.15273" width="19.6945" height="19.6945" rx="5.93086" stroke-width="1.69453"></rect><rect x="4.25" y="4.16016" width="6" height="5.76" rx="2.88" fill="currentColor"></rect><rect x="11.75" y="11.3594" width="6" height="5.76" rx="2.88" fill="currentColor"></rect></svg></div></div>
        Canvas
    </a>
{:else}
    <a href="/login" class="text" data-no-instant>
        <span>Login to Space</span>
    </a>
{/if}

<style lang="scss">
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
    }

    .text {
        color: var(--theme-color);
    }

    a:hover {
        filter: brightness(1.3);
        cursor: pointer;
    }
    a:active {
        transform: scale(0.95);
    }
</style>