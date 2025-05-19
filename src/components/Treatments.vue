<template>

  <section id="treatments" class="treatments-section">
    <h2 class="treatments-title">Trattamenti</h2>
    <p class="treatments-description">
      Ogni persona è unica, così come il percorso verso il benessere.<br />
      Ecco perché offro una varietà di trattamenti pensati per rispondere a esigenze diverse, sia fisiche che emotive.<br />
      Dall’agopuntura alla fitoterapia, dal Taopatch® alle tecniche corporee tradizionali, ogni disciplina può essere utile in molti ambiti.<br />
      Se hai un disturbo o un disagio e ti chiedi se uno di questi approcci possa aiutarti, contattami: insieme possiamo valutare la strada migliore per te.
    </p>
    <div class="treatments-container">
      <RouterLink 
        v-for="treatment in treatments" 
        :key="treatment.id"
        :to="treatment.route"
        class="treatment-card"
        :style="{width: isMobile ? '200px': '350px', height: isMobile ? '200px': '350px'}"
      >
        <div class="card-inner">
          <div class="card-front">
            <img :src="treatment.image" :alt="treatment.title" />
            <h3 :style="{fontSize: isMobile ? '14px': '18px', padding: isMobile ? '12px': '16px'}">{{ treatment.title }}</h3>
          </div>
          <div class="card-back">
            <img :src="treatment.image" :alt="treatment.title" />
            <h3 :style="{fontSize: isMobile ? '14px': '18px', padding: isMobile ? '12px': '16px'}">{{ treatment.title }}</h3>
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
import taopatchImg from '@/assets/taopatch.png'
import eftImg from '@/assets/eft.jpg'
import sobadarebozoImg from '@/assets/sobadarebozo.png'
import mobile from "@/utils/mobile.js";

const isMobile = mobile.setupMobileUtils();

const treatments = [
  {
    id: 1,
    title: 'Agopuntura',
    image: agopunturaImg,
    route: '/trattamenti/agopuntura'
  },
  {
    id: 2,
    title: 'Fitoterapia e Aromaterapia',
    image: fitoterapiaImg,
    route: '/trattamenti/fitoterapia-aromaterapia'
  },
  {
    id: 3,
    title: 'Taopatch',
    image: taopatchImg,
    route: '/trattamenti/taopatch'
  },
  {
    id: 4,
    title: 'Emotional Freedom Technique',
    image: eftImg,
    route: '/trattamenti/emotional-freedom-technique'
  },
  {
    id: 5,
    title: 'Sobada e Rebozo',
    image: sobadarebozoImg,
    route: '/trattamenti/sobada-rebozo'
  },
  {
    id: 6,
    title: 'Tecniche complementari',
    image: tecnicheImg,
    route: '/trattamenti/tecniche-complementari'
  }
]
</script>

<style scoped>
.treatments-section {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.treatments-title {
  color: #7d2636;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.treatments-description {
  color: #7d2636;
  font-size: 1.1rem;
  max-width: 900px;
  margin-bottom: 4rem;
  line-height: 1.6;
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
  color: #7D2636;
}
</style>