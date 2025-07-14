<template>
    <div class="scroll-container">
      <div class="sticky-section">
        <div class="content-wrapper">
          <Transition name="fade">
            <div v-if="activeSection === 1" class="section">
              <Sobada />
            </div>
          </Transition>
          <Transition name="fade">
            <div v-if="activeSection === 2" class="section">
              <Rebozo />
            </div>
          </Transition>
        </div>
      </div>
  
      <div class="spacer" ref="trigger1" />
      <div class="spacer" ref="trigger2" />
    </div>
</template>  

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Sobada from '@/components/Sobada.vue';
import Rebozo from '@/components/Rebozo.vue';

const activeSection = ref(1);
const trigger1 = ref(null);
const trigger2 = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === trigger1.value) activeSection.value = 1;
          if (entry.target === trigger2.value) activeSection.value = 2;
        }
      });
    },
    { threshold: 0.5, rootMargin: '0px 0px 40% 0px' }
  );

  if (trigger1.value) observer.observe(trigger1.value);
  if (trigger2.value) observer.observe(trigger2.value);
});

onBeforeUnmount(() => {
  if (trigger1.value) observer.unobserve(trigger1.value);
  if (trigger2.value) observer.unobserve(trigger2.value);
});
</script>

<style scoped>
.scroll-container {
  position: relative;
}

.sticky-section {
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  background: white;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sticky-section>* {
  width: 100%;
  height: 100%;
  min-width: 100%;
}

.spacer {
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
