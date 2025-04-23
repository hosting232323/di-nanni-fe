<template>
	<div>
		<v-container :class="isMobile ? 'px-md-16 px-4 mt-5' : 'px-md-16 px-4 mt-10'">
			<br v-if="!isMobile" />
			<h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">Tecniche Complementari</h1>
            <p class="body-1">Sono tecniche che possono essere eseguite da sole e/o assieme all’agopuntura e all’utilizzo di oli essenziali diluiti in olio vegetale. Si tratta di manualità diverse che aiutano la circolazione di energia e sangue che possono essere supportate con il guasha e/o coppette.</p>
            <br>
			<v-container>
				<v-window v-model="window" show-arrows>
					<v-window-item v-for="(item, i) in tecniche" :key="i">
						<!-- <v-card class="pa-4 d-flex flex-column flex-md-row justify-center align-center" elevation="4"> -->
						<div class="pa-4 d-flex flex-column flex-md-row justify-center align-center">
							<v-col cols="12" md="5" class="mb-4 mb-md-0">
								<v-img
								:src="item.image"
								:alt="item.title"
								aspect-ratio="16/9"
								max-width="500"
								rounded="lg"
								class="mx-auto"
								/>
							</v-col>
							<v-col cols="12" md="5">
								<h2 class="font-weight-bold text-center text-md-left mb-4" style="color: #7d2b3b; font-size: 28px; text-align: center;">
								{{ item.title }}
								</h2>
								<p class="body-1" v-html="item.description" />
							</v-col>
						</div>
						<!-- </v-card> -->
					</v-window-item>
				</v-window>
			</v-container>
        </v-container>
	</div>
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
      La coppettazione utilizza delle “<strong><span style="color: #7d2b3b;">coppette</span></strong>” di diverso materiale (più comunemente in vetro, ma anche bambù e silicone) che creano un effetto sottovuoto a contatto con la pelle (come una specie di ventosa).<br>
      <strong><span style="color: #7d2b3b;">Si lavora su determinati punti oppure lungo un meridiano particolare</span></strong>. È possibile mantenere la coppetta in un punto per pochi minuti.<br>
      È eseguibile <strong><span style="color: #7d2b3b;">a caldo o a freddo</span></strong>. In entrambi i casi è possibile che a termine del trattamento rimangano dei segni non dolorosi sulla pelle che in pochissimi giorni andranno via da soli.<br>
      È utile soprattutto nelle <strong><span style="color: #7d2b3b;">tensioni muscolari, nelle contratture, allevia il dolore</span></strong> con lo scopo di portare in superficie il sangue e le tossine.
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
</script>

<style scoped>
.body-1 {
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
	font-size: 18px;
	line-height: 1.5;
	color: #333;
}
</style>
