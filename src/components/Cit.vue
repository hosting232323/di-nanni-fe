<template>
  <div style="background-color: #7d2636; width: 100%;">
    <v-container class="padding-fix">
      <p class="cit-title">{{ text }}</p>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
</script>

<style scoped>
.cit-title {
  margin: 0;
  color: #f8d4d9;
  font-size: 3.0rem;
  font-style: italic;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .cit-title {
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
  }
}
</style>