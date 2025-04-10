<template>
    <v-container class="dioassissi">
        <div class="review-wrapper">
        <v-window show-arrows>
          <template #prev>
            <v-btn class="arrow-button" icon="mdi-chevron-left" />
          </template>
          <template #next>
            <v-btn class="arrow-button" icon="mdi-chevron-right" />
          </template>
  
          <v-window-item v-for="reviewGroup in chunkArray(reviews, 4)">
            <v-card v-for="review in reviewGroup" :width="cardWidth" class="cards" style="border-radius: 12px;">
                <v-card-title class="d-flex align-center" style="font-size: 16px;">
                <v-avatar size="40" class="mr-3">
                    <canvas :ref="el => setCanvasRef(el, review.name)" width="40" height="40"></canvas>
                </v-avatar>
                {{ review.name }}
                </v-card-title>
                <v-card-subtitle class="mt-1">
                <v-icon color="#ffbb29" v-for="n in 5" :key="n">mdi-star</v-icon>
                </v-card-subtitle>
                <v-card-text style="font-size: 14px;">
                {{ review.review }}
                </v-card-text>
            </v-card>
          </v-window-item>
      </v-window>
      </div>
  </v-container>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const canvasRefs = ref({});
const cardWidth = computed(() => window.innerWidth < 600 ? '250' : '350');

const reviews = ref([
  { name: 'Julien Larcinese', review: 'Personale cordialissimo, molto disponibile.' },
  { name: 'Gianmarco Russo', review: 'Eccellente e gentilissimi. Vengo da Lecce per comprare da loro.' },
  { name: 'Antonio Elle', review: 'Personale gentile, preparato e veloce.' },
  { name: 'Luca Elia', review: "Ampia disponibilità di ricambi e rapidità nel reperire anche quelli più particolari." },
  { name: 'Teresa Grauso', review: 'Negozio molto ben fornito di ricambi auto. Il personale è molto competente e cordiale.' },
  { name: 'Fabio Greco', review: 'Ho trovato sempre il ricambio che cercavo. Personale professionale e disponibile.' },
  { name: 'Paolo BMW', review: 'Personale gentile, professionali e veloci. prezzi ottimi.' },
  { name: 'Juri Andrea', review: 'Trovi tutto ciò che ha bisogno la tua auto...' },
  { name: 'Carmine Ricciardi', review: 'Ottime persone,  gentili, disponibili e preparate.' },
  { name: 'Roberta Toma', review: 'Personale preparato e disponibile. Prezzi concorrenziali. Decisamente consigliato.' }
]);

const setCanvasRef = (el, name) => {
  if (el && !canvasRefs.value[name]) {
    canvasRefs.value[name] = el;
  }
};

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size)
    result.push(array.slice(i, i + size));
  return result;
};

const generateProfileImage = (canvas, name) => {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD', '#16A085', '#E74C3C'];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 40, 40);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name.charAt(0).toUpperCase(), 20, 22);
};

const shuffleReviews = () => {
  reviews.value = reviews.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

onMounted(() => {
  shuffleReviews();
  reviews.value.forEach(review => {
    const canvas = canvasRefs.value[review.name];
    if (canvas) {
      generateProfileImage(canvas, review.name);
    }
  });
});
</script>

<style scoped>
.cards{
  margin-left: 10px;
  margin-right: 10px;
  padding: 4px;
}

.review-wrapper {
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #f8d4da;
}

.arrow-button {
  border: 4px solid #a63b52;
  border-radius: 50%;
  padding: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.arrow-button:hover {
  background-color: #f8d4da;
}

@media (max-width: 600px) {
  .v-card {
    min-height: 150px;
  }

  .v-avatar {
    width: 32px !important;
    height: 32px !important;
  }

  .v-icon {
    font-size: 16px !important;
  }

  .v-card-title {
    font-size: 16px;
  }

  .v-card-subtitle {
    font-size: 12px;
    margin: 0 !important;
  }

  .v-card-text {
    font-size: 13px;
  }
}
</style>
  