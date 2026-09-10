<template>
  <div class="cit-band">
    <v-container class="padding-fix cit-container">
      <span class="mdi mdi-format-quote-open cit-mark cit-mark-open"></span>
      <p class="cit-title">{{ text }}</p>
      <span class="mdi mdi-format-quote-close cit-mark cit-mark-close"></span>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

.cit-band {
  background: linear-gradient(120deg, #5a1b29, #7d2636 55%, #a33a4d);
  position: relative;
  overflow: hidden;
}

.cit-container {
  position: relative;
  text-align: center;
}

.cit-title {
  margin: 0 auto;
  color: #f8d4d9;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 2.6rem;
  font-style: italic;
  max-width: 880px;
  line-height: 1.3;
  position: relative;
  z-index: 1;
}

.cit-mark {
  position: absolute;
  font-size: 7rem;
  color: rgba(248, 212, 217, 0.16);
  z-index: 0;
  user-select: none;
}

.cit-mark-open {
  top: -6px;
  left: -10px;
}

.cit-mark-close {
  bottom: -18px;
  right: -10px;
}

@media (max-width: 768px) {
  .cit-title {
    font-size: 1.7rem;
    padding: 0 1rem;
  }

  .cit-mark {
    font-size: 4.5rem;
  }
}
</style>