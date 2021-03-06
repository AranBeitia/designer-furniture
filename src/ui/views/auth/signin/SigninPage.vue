<template>
  <TheHeader />
  <SigninForm />
  <TheFooter />
</template>

<script>
import TheHeader from '@/ui/views/header/TheHeader'
import TheFooter from '@/ui/views/footer/TheFooter'
import SigninForm from '@/ui/views/auth/signin/SigninForm'

export default {
  components: {
    TheHeader,
    TheFooter,
    SigninForm
  }
}
</script>