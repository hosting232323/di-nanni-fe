<template>
    <div class="scroll-container">
        <div class="sticky-section">
            <Transition name="fade">
                <Fitoterapia v-if="activeSection === 1" />
            </Transition>
            <Transition name="fade">
                <Aromaterapia v-if="activeSection === 2" />
            </Transition>
        </div>

        <div class="spacer" ref="trigger1" />
        <div class="spacer" ref="trigger2" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Fitoterapia from '@/components/Fitoterapia.vue';
import Aromaterapia from '@/components/Aromaterapia.vue';

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
        { threshold: 0.5 }
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
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    overflow: hidden;
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