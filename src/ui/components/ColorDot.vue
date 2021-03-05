<template>
  <ul class="dot-wrapper">
    <li class="[ dot dot-coffee ] --active"></li>
    <li class="[ dot dot-dark ]"></li>
  </ul>
</template>

<style lang="scss" scoped>
.dot-wrapper {
  display: flex;
  padding: 1rem 0;
}

.dot {
  $size: 2rem;
  display: block;
  width: $size;
  height: $size;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

</style>