<script>
  import IconArrowLeft from "@/components/core/Icon/IconArrowLeft.svelte";
  import IconArrowRight from "@/components/core/Icon/IconArrowRight.svelte";
</script>

<br />
<section class="nav-btns">
  <a href="#" class="nav-btn prev">
    <span class="icon"><IconArrowLeft color="inherit" /></span>
    <div>
      <span><small>Previous</small></span>
      <p>The Space App Anatomy</p>
    </div>
  </a>
  <a href="#" class="nav-btn next">
    <div>
      <span><small>Next</small></span>
      <p>Space CLI</p>
    </div>
    <span class="icon"><IconArrowRight color="inherit" /></span>
  </a>
</section>

<style lang="scss">
  .nav-btns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-6);
  }
  @media screen and (min-width: 768px) {
    .nav-btns {
      flex-wrap: nowrap;
    }
  }
  .nav-btn {
    width: 100%;

    display: flex;
    justify-content: space-between;
    border: 2px solid hsl(var(--color-gray-90));
    padding-inline: var(--spacing-5);
    padding-block: var(--spacing-3);
    border-radius: var(--rounded-3);

    color: var(--theme-text);

    transition: all 100ms ease-in-out;

    span {
      color: hsl(var(--color-gray-40));

      &.icon {
        color: hsl(var(--color-gray-70));
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    p {
      margin: 0;
    }
    &.prev {
      text-align: right;
    }
    &.next {
    }

    &:hover {
      color: var(--theme-accent);
      border-color: hsl(var(--color-gray-70));
      p {
        color: var(--theme-accent);
      }

      span.icon {
        color: var(--theme-accent);
      }
    }
  }
</style>
