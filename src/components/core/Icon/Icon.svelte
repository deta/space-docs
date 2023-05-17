<script lang="ts">
    // PROPS
    export let size: number = 24,
        strokeWidth: number = 48 / size,
        style: "light" | "dark" | "currentColor" = "currentColor",
        color: string | undefined;
</script>

<svg width="{size}" height="{size}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{strokeWidth}" class="icon {style}" style="color:{color};">
    <slot/>
</svg>


<style lang="postcss">
    .icon.currentColor {
        color: inherit;
    }
    .icon.dark {
        color: black;
    }
    .icon.light {
        color: white;
    }
</style>
