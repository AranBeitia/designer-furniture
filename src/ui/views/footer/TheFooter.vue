<template>
  <footer class="footer">
    <div class="page-container">
      <img src="~@/ui/assets/images/logo_white.png" alt="logo" title="logo">
      <ul class="legal">
        <li>Privacy policy</li>
        <li>Legal terms</li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    padding: 3rem 0;
    color: var(--color-white);
    background-color: var(--color-grey-dark);
  }

  .legal {
    padding-top: 2rem;

    > li {
      display: inline;

      &:not(:last-child) {
        padding-right: 2.5rem;
      }
    }
  }
</style>
