<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<script>
import TheHeader from '@/ui/views/header/TheHeader.vue'
import TheFooter from '@/ui/views/footer/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>