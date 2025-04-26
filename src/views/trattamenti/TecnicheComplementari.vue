<template>
	<v-container :class="isMobile ? 'px-md-16 px-4 mt-5' : 'px-md-16 px-4 mt-10'">
		<br v-if="!isMobile" />
		<h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">Tecniche Complementari</h1>
		<p class="body-1">Sono tecniche che possono essere eseguite da sole e/o assieme all’agopuntura e all’utilizzo di oli essenziali diluiti in olio vegetale. Si tratta di manualità diverse che aiutano la circolazione di energia e sangue che possono essere supportate con il guasha e/o coppette.</p>
		<br>
		<v-container>
			<v-window v-model="window">
				<v-window-item v-for="(item, i) in tecniche" :key="i">
					<div class="d-flex justify-center">
						<div class="section" v-if="!isMobile">
							<v-img :src="item.image" :alt="item.title" class="media" />
							<div class="overlay">
								<h1>{{ item.title }}</h1>
								<p class="body-1" style="color: #fff !important;" v-html="item.description" />
							</div>
						</div>
						<div v-else>
							<h1>{{ item.title }}</h1>
							<v-img :src="item.image" :alt="item.title" />
							<p class="body-1" v-html="item.description" />
						</div>
					</div>
				</v-window-item>
			</v-window>
			<div class="pagination-indicator d-flex justify-center align-items-center mt-3">
				<v-btn icon @click="goToPrevPage" :disabled="window === 0">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<div class="dots-container d-flex justify-center">
					<span
					v-for="(item, i) in tecniche"
					:key="i"
					:class="['dot', { active: window === i }]"
					@click="window = i"
					></span>
				</div>
				<v-btn icon @click="goToNextPage" :disabled="window === tecniche.length - 1">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</div>
		</v-container>
	</v-container>
</template>

<script setup>
import mobile from "@/utils/mobile";
import { ref } from 'vue'

import coppettazione from '@/assets/coppettazione.png'
import guasha from '@/assets/guasha.png'
import tuina from '@/assets/tui-na.jpg'

const window = ref(0)

const isMobile = mobile.setupMobileUtils();
const tecniche = [
  {
    title: 'La Coppettazione',
    image: coppettazione,
    description: `
      La coppettazione utilizza delle “<strong><span style="color: #7d2b3b;">coppette</span></strong>” di diverso materiale che creano un effetto sottovuoto a contatto con la pelle (come una specie di ventosa).<br>
      <strong><span style="color: #7d2b3b;">Si lavora su determinati punti oppure lungo un meridiano particolare</span></strong>. È possibile mantenere la coppetta in un punto per pochi minuti.<br>
      È eseguibile <strong><span style="color: #7d2b3b;">a caldo o a freddo</span></strong>. In entrambi i casi è possibile che a termine del trattamento rimangano dei segni non dolorosi sulla pelle che in pochissimi giorni andranno via da soli.<br>
    `
  },
  {
    title: 'Il Guasha',
    image: guasha,
    description: `
      È un’antica tecnica tradizionale cinese e il termine significa “strofinare”.<br>
      Infatti, si utilizza un strumento smussato di giada o di quarzo direttamente a contatto con la pelle con <strong><span style="color: #7d2b3b;">movimenti di sfregamento con proprietà lenitive e antinfiammatorie</span></strong>.<br>
      Ha lo scopo di <strong><span style="color: #7d2b3b;">rilassare i muscoli, riducendo il dolore e favorendo la circolazione e il drenaggio dei tessuti</span></strong>.
    `
  },
  {
    title: "Il Tui Na'",
    image: tuina,
    description: `
      È il <strong><span style="color: #7d2b3b;">massaggio</span></strong> della Medicina Tradizionale Cinese; agisce sui meridiani energetici e sugli agopunti con diverse tecniche di manipolazione.<br>
      Ha lo scopo di <strong><span style="color: #7d2b3b;">sciogliere i blocchi energetici e favorire il movimento del sangue e dell’energia</span></strong>: regola la funzionalità degli organi e dei visceri e riattiva le risorse individuali accelerando i processi di guarigione.<br>
      È un valido supporto alle altre tecniche terapeutiche, utile in problemi osteomuscolari e non.
    `
  }
]

const goToPrevPage = () => {
  if (window.value > 0) {
    window.value--;
  }
}

const goToNextPage = () => {
  if (window.value < tecniche.length - 1) {
    window.value++;
  }
}
</script>


<style scoped>
.section {
  position: relative;
  width: 600px;
}

.media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.6);
}

.overlay {
  position: relative;
  z-index: 2;
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
}

.body-1 {
  font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #000;
}

.pagination-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-indicator .v-btn {
  z-index: 999;
  background: none;
  box-shadow: none;
}

.dots-container {
  display: flex;
  gap: 8px;
  margin: 0 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #bbb;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #7d2b3b;
}

.v-btn {
  padding: 0;
}
</style>
