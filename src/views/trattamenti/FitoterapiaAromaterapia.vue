<template>
    <div class="wrapper">
      <div ref="first" class="scroll-section">
        <Transition name="fade">
          <Fitoterapia v-if="activeSection === 1" />
        </Transition>
      </div>
      <div ref="second" class="scroll-section">
        <Transition name="fade">
          <Aromaterapia v-if="activeSection === 2" />
        </Transition>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Fitoterapia from "@/components/Fitoterapia.vue";
import Aromaterapia from "@/components/Aromaterapia.vue";

const activeSection = ref(1);
const first = ref(null);
const second = ref(null);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            activeSection.value = entry.target === first.value ? 1 : 2;
        }
        });
    },
    { threshold: 0.5 }
    );

onMounted(() => {
    if (first.value) observer.observe(first.value);
    if (second.value) observer.observe(second.value);
});

onBeforeUnmount(() => {
    if (first.value) observer.unobserve(first.value);
    if (second.value) observer.unobserve(second.value);
});
</script>

<style scoped>
.wrapper {
    position: relative;
}
.scroll-section:first-child {
    height: calc(100vh - 64px);  
}
.scroll-section {
    height: 100vh;    
    position: relative;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
