<template>
  <div class="fullscreen-container">
    <div class="background-image"></div>
    <button @click="scrollToNext" class="nav-arrow">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </button>
  </div>
</template>

<script setup>
const { nextSectionId } = defineProps({
  nextSectionId: {
    type: String,
    required: true
  }
})

const scrollToNext = () => {
  const nextSection = document.getElementById(nextSectionId)
  if (nextSection) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
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

.nav-arrow {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 76px;
  height: 76px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-arrow:hover {
  transform: translateY(4px);
}

.nav-arrow svg {
  color: #333;
}
</style>
