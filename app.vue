<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script>
import { testLoader } from '~/assets/ts/wallet'

export default {
  mounted () {
    testLoader()
  }
}

</script>