<template>
  <div class="fullscreen-container">
    <div class="background-image"></div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.fullscreen-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/Doriana_home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
