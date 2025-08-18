<template>
  <v-container class="d-flex justify-center align-center" style="height: 100%;" v-if="!home">
    <h1 class="text-h5 font-weight-bold" style="color: #7d2636;">
      Caricamento{{ dots }}
    </h1>
  </v-container>
  <div v-else>
    <h1 class="text-h5 font-weight-bold text-center" style="color: #7d2636; margin: 10px 0;">
      Caricamento{{ dots }}
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dots = ref('...')
let intervalId = null

const props = defineProps({
  home: Boolean
})

onMounted(() => {
  let count = 3
  intervalId = setInterval(() => {
    count = (count + 1) % 4
    dots.value = '.'.repeat(count)
  }, 500)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
