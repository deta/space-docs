<script lang="ts">
  // TODO(@maxu): rework this thing
  export let type: "button" | "link" = "button",
    style: "ghost" | "link" = "ghost",
    target: "_blank" | "_self" = "_self",
    href: string = "",
    disabled = false;
</script>

<button class:disabled on:click {disabled}>
  <span><slot /></span>
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 7px;
    border-radius: 10px;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transform: scale(1);

    transition: all 0.05s ease-in-out, background 0.15s ease-in-out;
  }
  button:not(.disabled):hover {
    background: hsl(var(--color-gray-90));
  }
  button:not(.disabled):active > span {
    transform: scale(0.85);
  }

  button > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
