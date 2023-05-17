<footer>
  <div class="content">
    <p class="title">DETA ~ 2335</p>
    <p>
      <a href="https://deta.space/legal">Legal</a> /
      <a href="https://deta.space/privacy">Privacy</a>
      / <a href="https://deta.space/terms">Terms</a>
    </p>
  </div>
</footer>

<style lang="scss">
    footer {
        grid-column: 1 / -1;
        grid-row: 3;

        padding: var(--spacing-4);

        // TODO!: FIX
        background: #191818;
        color: white;
    }

    :global(body.sideNav-open footer) {
        grid-column: 2 / -1 !important;
    }
</style>
