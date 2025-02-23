<template>
  <section id="treatments" class="treatments-section">
    <h2 class="treatments-title">Trattamenti</h2>
    <div class="treatments-container">
      <RouterLink 
        v-for="treatment in treatments" 
        :key="treatment.id"
        :to="treatment.route"
        class="treatment-card"
      >
        <div class="card-inner">
          <div class="card-front">
            <img :src="treatment.image" :alt="treatment.title" />
            <h3>{{ treatment.title }}</h3>
          </div>
          <div class="card-back">
            <img :src="treatment.image" :alt="treatment.title" />
            <h3>{{ treatment.title }}</h3>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import agopunturaImg from '@/assets/agopuntura.jpg'
import fitoterapiaImg from '@/assets/fitoterapia.jpg'
import tecnicheImg from '@/assets/tecniche.jpg'

const treatments = [
  {
    id: 1,
    title: 'Agopuntura',
    image: agopunturaImg,
    route: '/agopuntura'
  },
  {
    id: 2,
    title: 'Fitoterapia e Aromaterapia',
    image: fitoterapiaImg,
    route: '/fitoterapia'
  },
  {
    id: 3,
    title: 'Tecniche complementari',
    image: tecnicheImg,
    route: '/tecniche'
  }
]
</script>

<style scoped>
.treatments-section {
  padding: 4rem 2rem;
  background-color: #faf6f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.treatments-title {
  color: #8B4513;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-style: italic;
}

.treatments-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.treatment-card {
  width: 300px;
  height: 300px;
  perspective: 1000px;
  text-decoration: none;
  color: inherit;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.treatment-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-back {
  transform: rotateY(180deg);
}

.card-front img,
.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-front h3,
.card-back h3 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: 1rem;
  text-align: center;
  color: #8B4513;
}

</style>
