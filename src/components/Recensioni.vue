<template>
  <v-container class="padding-fix">
    <div class="review-wrapper position-relative">
      <div class="outer-container">
        <v-btn class="arrow-button prev-arrow" icon @click="prevSlide" :disabled="windowIndex === 0">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="arrow-button next-arrow" icon @click="nextSlide" :disabled="windowIndex === groupedReviews.length - 1">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-window v-model="windowIndex" class="mt-4 carousel-window">
          <v-window-item v-for="(group, index) in groupedReviews" :key="index">
            <v-row class="justify-center">
              <v-col v-for="review in group" :key="review.name" cols="12" sm="5" md="4" class="d-flex justify-center">
                <v-card class="review-card" :style="{ height: cardHeight + 'px' }">
                  <div class="review-header">
                    <div class="avatar-container">
                      <canvas :ref="el => setCanvasRef(el, review.name, index)" width="60" height="60"></canvas>
                    </div>
                    <div class="reviewer-info">
                      <div class="font-weight-bold reviewer-name">{{ review.name }}</div>
                      <div class="stars-container">
                        <template v-for="n in 5" :key="n">
                          <v-icon v-if="review.rating >= n" color="#FFD700" size="20">mdi-star</v-icon>
                          <v-icon v-else-if="review.rating >= n - 0.5" color="#FFD700" size="20">mdi-star-half-full</v-icon>
                          <v-icon v-else color="#C0C0C0" size="20">mdi-star-outline</v-icon>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="review-content">{{ review.review }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';

const windowIndex = ref(0);
const canvasRefs = ref({});
const cardHeight = ref(250);
const groupSize = ref(window.innerWidth < 600 ? 2 : 3);

const setCanvasRef = (el, name, groupIndex) => {
  if (el) canvasRefs.value[`${name}-${groupIndex}`] = el;
};

const generateProfileImage = (canvas, name) => {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 60, 60);
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD', '#16A085', '#E74C3C'];
  ctx.fillStyle = colors[hash % colors.length];
  ctx.fillRect(0, 0, 60, 60);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '28px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name.charAt(0).toUpperCase(), 30, 30);
};

const shuffleReviews = () => {
  reviews.value = reviews.value.map(v => ({ v, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ v }) => v);
};

const updateGroupSize = () => {
  groupSize.value = window.innerWidth < 600 ? 2 : 3;
  cardHeight.value = window.innerWidth < 600 ? 230 : 250;
};

const groupedReviews = computed(() => {
  const result = [];
  for (let i = 0; i < reviews.value.length; i += groupSize.value) {
    result.push(reviews.value.slice(i, i + groupSize.value));
  }
  return result;
});

const prevSlide = () => { if (windowIndex.value > 0) windowIndex.value--; };
const nextSlide = () => { if (windowIndex.value < groupedReviews.value.length - 1) windowIndex.value++; };

watch(windowIndex, (newIndex) => {
  setTimeout(() => {
    groupedReviews.value[newIndex]?.forEach(review => {
      generateProfileImage(canvasRefs.value[`${review.name}-${newIndex}`], review.name);
    });
  }, 50);
});

onMounted(() => {
  shuffleReviews();
  updateGroupSize();
  setTimeout(() => {
    groupedReviews.value[windowIndex.value]?.forEach(review => {
      generateProfileImage(canvasRefs.value[`${review.name}-${windowIndex.value}`], review.name);
    });
  }, 100);
  window.addEventListener('resize', updateGroupSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateGroupSize);
});

const reviews = ref([
  { name: 'Giovanni Basalisco', review: 'La dottoressa Di Nanni unisce grande professionalità e competenza,fondate su rigorosi studi scientifici, ad empatia ed approccio olistico ai problemi dei pazienti...', rating: 5 },
  { name: 'Francesca Ambrosi', review: 'Un prezioso aiuto e supporto. La Dottoressa Di Nanni è sempre disponibile e pronta ad accogliermi per un consulto su numerose tematiche...', rating: 5 },
  { name: 'Giorgia Neri', review: 'L\’agopuntura è un\’esperienza fantastica che bisogna provare almeno una volta nella vita. Se a praticarla è la dolce Doriana, allora tutto diventa magico!', rating: 5 },
  { name: 'Michele Mennuti', review: "La dott.ssa Di Nanni è davvero una grande professionista. Da sempre disponibile con terapie personalizzate e tanti consigli utili per ogni paziente.", rating: 5 },
  { name: 'Samantha Chiurlia', review: 'Non posso che consigliare e ringraziare con tutta me stessa la Dott.sa Di Nanni per l’aiuto che mi ha dato in un momento difficile della mia vita♥️', rating: 5 },
  { name: 'Emanuele Costanza', review: 'La mia cefalea muscolo tensiva è ormai un lontano ricordo, grazie ai trattamenti della dottoressa.', rating: 5 },
  { name: 'Carla Bavaro', review: 'Grazie alla Dottoressa Di Nanni, la mia insonnia è sparita! Professionale, disponibile , preparata e disponibile. Consigliatissima.', rating: 5 },
  { name: 'Marilena Passabi', review: 'La Dottoressa Di Nanni... Semplicemente meravigliosa. Professionale, umana, empatica e con il raro e prezioso dono di saper ascoltare... Grazie di cuore', rating: 5 },
  { name: 'Gaia Ferorelli', review: 'Avevo un dolore alla mano legato all\'utilizzo del mouse, grazie all\'intervento della Dott.ssa Di Nanni è passato e non si è più verificato. Esperienza ottima!', rating: 5 },
  { name: 'Elisa Zuffa', review: 'Con un breve percorso di agopuntura ho potuto dire addio ai dolori mestruali lancinanti con cui combattevo da anni.', rating: 5 },
  { name: 'Irene Caruso', review: 'I suggerimenti della dott.ssa Di Nanni sono stati fondamentali per la mia gravidanza, dalla fase di programmazione fino alla nascita di mio figlio...', rating: 5 },
  { name: 'Costantino Ricci', review: 'Premetto che sono un medico e che, scioccamente e da cieco uomo di scienza, mi sono avvicinato “da paziente” in maniera riluttante a queste terapie...', rating: 5 }
]);
</script>

<style scoped>
.review-wrapper {
  padding: 60px 0;
  background-color: #f8d4da;
}

.review-card {
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
  border-radius: 12px !important;
}

.review-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.avatar-container canvas {
  border-radius: 50%;
  border: 2px solid white;
  flex: 0 0 60px;
  margin-right: 16px;
}

.reviewer-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.reviewer-name {
  white-space: normal;
  font-size: 18px;
  margin-bottom: 6px;
}

.review-content {
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 1.6;
}

.stars-container {
  display: flex;
  margin-top: 6px;
}

.outer-container {
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 0 50px;
}

.carousel-window {
  overflow: visible;
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid #a63b52;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.prev-arrow { left: -35px; }
.next-arrow { right: -35px; }
.arrow-button:hover { background-color: #f8d4da; }

@media (max-width: 600px) {
  .stars-container .v-icon { font-size: 15px !important; }
  .avatar-container canvas { height: 40px; }
  .outer-container { width: 85%; padding: 0 30px; }
  .avatar-container { flex: 0 0 48px; margin-right: 12px; }
  .reviewer-name { font-size: 16px;}
  .review-content { font-size: 13px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; margin-top: -8px; padding-bottom: 12px; max-height: calc(1.4em * 5); text-overflow: ellipsis; white-space:normal ;}
  .arrow-button { height: 44px; width: 44px; }
  .prev-arrow { left: -20px; }
  .next-arrow { right: -20px; }
}

</style>
