<template>
  	<div class="no-top-margin">
		<v-container class="pa-0" fluid>
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura.mp4" style="width: 100%; height: 100%; object-fit: cover; "></video>
					</div>
				</v-col>
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1">
						<strong><span class="highlight-title-large px-4">Cos'è l'Agopuntura?</span></strong>
						<p class="mt-4 px-4">
							L'<strong><span class="highlight">agopuntura</span></strong> è una pratica della medicina tradizionale cinese che consiste nell'inserire aghi sottili in specifici punti del corpo per riequilibrare l'energia vitale.<br>
							Ha il <strong><span class="highlight">vantaggio</span></strong> di non utilizzare farmaci, non causa effetti collaterali o complicanze nella maggior parte dei casi, è utile nei pazienti in cui i farmaci possono creare allergie o sono controindicati.
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura.mp4" style="width: 100%; height: 65vh; object-fit: cover;"></video>
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1 py-8">
					<strong><span class="highlight-title-large px-4">Cos'è l'Agopuntura?</span></strong>
						<p class="mt-4 px-4">
							L'<strong><span class="highlight">agopuntura</span></strong> è una pratica della medicina tradizionale cinese che consiste nell'inserire aghi sottili in specifici punti del corpo per riequilibrare l'energia vitale.<br>
							Ha il <strong><span class="highlight">vantaggio</span></strong> di non utilizzare farmaci, non causa effetti collaterali o complicanze nella maggior parte dei casi, è utile nei pazienti in cui i farmaci possono creare allergie o sono controindicati.
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1 px-4">
						È un <strong><span class="highlight">trattamento sicuro</span></strong> e ha pochissimi effetti collaterali, (dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi).<br><br>
						<strong><span class="highlight">Non è doloroso</span></strong> e cura molte patologie dolorose (in ambito osteomuscolare e post-operatorio) e non (disturbi neurologici, dermatologici, digestivi, ginecologici di pertinenza otorinolaringoiatrica etc.)
					</div>
				</v-col>
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura_piede.mp4" style="width: 100%; height: 100%; object-fit: cover;"></video>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura_piede.mp4" style="width: 100%; object-fit: cover;"></video>
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1 py-8 px-4">
						È un <strong><span class="highlight">trattamento sicuro</span></strong> e ha pochissimi effetti collaterali, (dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi).<br><br>
						<strong><span class="highlight">Non è doloroso</span></strong> e cura molte patologie dolorose (in ambito osteomuscolare e post-operatorio) e non (disturbi neurologici, dermatologici, digestivi, ginecologici di pertinenza otorinolaringoiatrica etc.)
					</div>
				</v-col>
			</v-row>
			<v-row class="desktop-row" no-gutters v-if="!isMobile">
				<v-col cols="12" md="6" class="pa-0 full-height">
					<div class="media-container">
						<v-img src="@/assets/agopuntura.jpg" alt="Agopuntura" height="100%" width="100%" cover />
					</div>
				</v-col>
				<v-col cols="12" md="6" class="text-container">
					<div class="body-1">
						<strong><span class="highlight-title-large px-4">Sulle sedute</span></strong>
						<p class="mt-4 px-4">
							Il <strong><span class="highlight">primo incontro</span></strong> potrebbe durare quasi un'ora, le <strong><span class="highlight">sedute di mantenimento</span></strong> dai 30 ai 40 minuti. Il tempo che intercorre con gli aghi inseriti è variabile dai 20 ai 30 minuti.<br><br>
							Gli <strong><span class="highlight">aghi utilizzati</span></strong> sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero "effetto pizzicotto", un formicolio, un minimo senso di calore ma non sono dolorosi (non devono esserlo per l'intera durata della seduta) e soprattutto sono effetti del tutto personali.<br><br>
							<strong><span class="highlight">È importante riposarsi dopo la seduta evitando pesanti esercizi fisici e grandi abbuffate con alcolici.</span></strong>
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters v-if="isMobile">
				<v-col cols="12" class="pa-0">
					<div class="media-container">
						<v-img src="@/assets/agopuntura.jpg" alt="Agopuntura" style="width: 100%; height: 65vh; object-fit: cover;" />
					</div>
				</v-col>
				<v-col cols="12" class="text-container">
					<div class="body-1 py-8 px-4">
						<strong><span class="highlight-title-large">Sulle sedute</span></strong>
						<p class="mt-4">
							Il <strong><span class="highlight">primo incontro</span></strong> potrebbe durare quasi un'ora, le <strong><span class="highlight">sedute di mantenimento</span></strong> dai 30 ai 40 minuti. Il tempo che intercorre con gli aghi inseriti è variabile dai 20 ai 30 minuti.<br><br>
							Gli <strong><span class="highlight">aghi utilizzati</span></strong> sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero "effetto pizzicotto", un formicolio, un minimo senso di calore ma non sono dolorosi (non devono esserlo per l'intera durata della seduta) e soprattutto sono effetti del tutto personali.<br><br>
							<strong><span class="highlight">È importante riposarsi dopo la seduta evitando pesanti esercizi fisici e grandi abbuffate con alcolici.</span></strong>
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col cols="12" class="px-6 py-8 bg-color">
					<div class="text-center">
					<h3 class="highlight-title mb-4">Riconoscimenti ufficiali</h3>
						<p class="body-2 mb-2">
							Ad oggi è <strong class="highlight">riconosciuta e validata</strong> dai sistemi sanitari nazionali e dall'Organizzazione Mondiale della Sanità.
						</p>
						<p class="body-2">
							In Italia è stata inserita nei <strong class="highlight">LEA (livelli essenziali di assistenza)</strong>, quindi in alcune regioni è possibile accedere a questi trattamenti tramite il Servizio Sanitario Nazionale.
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
  font-size: 24px;
  font-weight: 600;
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
