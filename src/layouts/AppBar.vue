<template>
  <v-app-bar v-if="!isHome" :elevation="2">
    <v-app-bar-title><b>
      Template Frontend
    </b></v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>
