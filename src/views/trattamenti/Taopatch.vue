<template>
	<div class="no-top-margin">
		<v-container class="pa-0" fluid>
			<!-- Card N. 1 -->
			<!-- Desktop -->
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<v-img src="@/assets/taopatch.jpeg" alt="Taopatch" height="100%" width="100%" cover />
					</div>
				</v-col>
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1">
						<h1 class="text-h3 font-weight-bold highlight-title px-4">Cos'è il Taopatch?</h1>
						<p class="mt-4 px-4" style="font-size: 18px !important">
							Il <strong><span class="highlight">Taopatch</span></strong> è un dispositivo innovativo medico e nanotecnologico, di classe 1 CE, che emette luce terapeutica, stimolando punti energetici del corpo e favorendo il riequilibrio e il benessere generale.<br>
							Ha il <strong><span class="highlight">vantaggio</span></strong> di essere non invasivo (non rilascia sostanze chimiche), indolore e privo di effetti collaterali, ed è particolarmente utile per chi cerca un supporto naturale senza farmaci.
						</p>
					</div>
				</v-col>
			</v-row>
			<!-- Mobile -->
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<v-img src="@/assets/taopatch.jpeg" alt="Agopuntura"
							style="width: 100%; height: 65vh; object-fit: cover;" />
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1 py-8">
						<h1 class="text-h3 font-weight-bold highlight-title px-4" style="font-size: 30px !important;">Cos'è il Taopatch?</h1>
						<p class="mt-4 px-4" style="font-size: 16px !important">
							Il <strong><span class="highlight">Taopatch</span></strong> è un dispositivo innovativo medico e nanotecnologico, di classe 1 CE, che emette luce terapeutica, stimolando punti energetici del corpo e favorendo il riequilibrio e il benessere generale.<br>
							Ha il <strong><span class="highlight">vantaggio</span></strong> di essere non invasivo (non rilascia sostanze chimiche), indolore e privo di effetti collaterali, ed è particolarmente utile per chi cerca un supporto naturale senza farmaci.
						</p>
					</div>
				</v-col>
			</v-row>

			<!-- Card N. 2 -->
			<!-- Desktop -->
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1 px-4" style="font-size: 18px !important">
						È un <strong><span class="highlight">trattamento sicuro</span></strong> e semplice da utilizzare: si applica sulla pelle in specifici punti con un nastrocerotto adesivo, resiste agli urti e all'acqua.<br>
						Sono dispositivi indossabili 24 h su 24 e durano circa 3 anni.
					</div>
				</v-col>
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<v-img src="@/assets/taopatch1.jpeg" alt="Taopatch" height="100%" width="100%" cover />
					</div>
				</v-col>
			</v-row>
			<!-- Mobile -->
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<v-img src="@/assets/taopatch1.jpeg" alt="Agopuntura"
							style="width: 100%; height: 65vh; object-fit: cover;" />
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1 py-4 px-4" style="font-size: 16px !important">
						È un <strong><span class="highlight">trattamento sicuro</span></strong> e semplice da utilizzare: si applica sulla pelle in specifici punti con un nastrocerotto adesivo, resiste agli urti e all'acqua.<br>
						Sono dispositivi indossabili 24 h su 24 e durano circa 3 anni.
					</div>
				</v-col>
			</v-row>

			<!-- Card N. 3 -->
			<!-- Desktop -->
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<v-img src="@/assets/taopatch2.jpg" alt="Taopatch" height="100%" width="100%" cover />
					</div>
				</v-col>
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1">
						<h1 class="text-h3 font-weight-bold highlight-title px-4">Sulle applicazioni</h1>
						<p class="mt-4 px-4" style="font-size: 18px !important">
							Il <strong><span class="highlight">Taopatch migliora</span></strong> disturbi muscolari, posturali, neurologici e altri squilibri legati allo stress e alla fatica.<br>
							Migliora il movimento e la postura del corpo, riducendo dolori di ogni genere. Ottimizza le prestazioni fisiche e biologiche del corpo, portando a un benessere globale del paziente.<br>
							E' possibile integrarlo con altre terapie e trattamenti.<br>
							È <strong><span class="highlight">importante</span></strong> rivolgersi a professionisti applicatori Taopatch per creare un percorso ottimale e personalizzato per ottenere il massimo dei risultati.
						</p>
					</div>
				</v-col>
			</v-row>
			<!-- Mobile -->
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<v-img src="@/assets/taopatch2.jpg" alt="Agopuntura" style="width: 100%; height: 65vh;" cover/>
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1">
						<h1 class="text-h3 font-weight-bold highlight-title px-4" style="font-size: 30px !important;">Sulle applicazioni</h1>
						<p class="mt-4 px-4" style="font-size: 16px !important">
							Il <strong><span class="highlight">Taopatch migliora</span></strong> disturbi muscolari, posturali, neurologici e altri squilibri legati allo stress e alla fatica.<br>
							Migliora il movimento e la postura del corpo, riducendo dolori di ogni genere. Ottimizza le prestazioni fisiche e biologiche del corpo, portando a un benessere globale del paziente.<br>
							E' possibile integrarlo con altre terapie e trattamenti.<br>
							È <strong><span class="highlight">importante</span></strong> rivolgersi a professionisti applicatori Taopatch per creare un percorso ottimale e personalizzato per ottenere il massimo dei risultati.
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col cols="12" class="px-6 py-8 bg-color">
					<div class="text-center">
						<h3 class="highlight-title mb-4">Riconoscimenti ufficiali</h3>
						<p class="body-2 mb-2">
							Ad oggi il Taopatch è supportato da numerosi studi clinici e ricerche scientifiche che ne attestano
							l’efficacia nel migliorare il benessere fisico e l’equilibrio energetico.<br>
							In alcuni paesi è utilizzato come complemento nei trattamenti fisioterapici e di medicina integrata,
							valorizzando un approccio naturale alla salute.
						</p>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script setup>
import mobile from "@/utils/mobile";

const isMobile = mobile.setupMobileUtils();
</script>

<style scoped>
.no-top-margin {
	margin-top: -1px !important;
}

.v-container {
	padding-top: 0 !important;
	margin-top: 0 !important;
}

.desktop-row {
	height: 75vh;
}

.full-height {
	height: 100%;
}

.media-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}

.text-container {
	padding-left: 10rem;
	padding-right: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.body-1 {
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
	font-size: 16pt;
	line-height: 1.6;
	color: #333;
}

.body-2 {
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
	font-size: 12pt;
	line-height: 1.5;
	color: #333;
}

.highlight-title {
	color: #7d2b3b;
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
}

.highlight-title-large {
	color: #7d2b3b;
	font-size: 36px;
}

.highlight {
	color: #7d2b3b;
	font-weight: 600;
}

@media (max-width: 960px) {
	.media-container {
		height: 50vh;
	}

	.body-1 {
		font-size: 14pt;
		padding: 1rem 0;
	}

	.text-container {
		padding: 1rem;
		height: auto;
	}
}
</style>
