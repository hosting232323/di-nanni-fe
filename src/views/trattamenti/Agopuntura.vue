<template>
	<div class="no-top-margin">
		<v-container class="pa-0" fluid>
			<v-row class="mb-0 mt-0 pt-0" no-gutters>
				<v-col cols="12" md="6" class="pa-0" v-if="!isMobile">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura.mp4" style="width: 100%; height: 100vh; object-fit: cover;"></video>
					</div>
				</v-col>
				<v-col cols="12" md="6" class="px-md-6 px-4 d-flex align-center bg-color">
					<div class="body-1 py-8">
						<strong><span style="color: #7d2b3b; font-size: 36px;">Cos'è l'Agopuntura?</span></strong>
						<p class="mt-4">
							L'<strong><span style="color: #7d2b3b;">agopuntura</span></strong> è una pratica della medicina tradizionale cinese che consiste nell'inserire aghi sottili in specifici punti del corpo per riequilibrare l'energia vitale.<br>
							Ha il <strong><span style="color: #7d2b3b;">vantaggio</span></strong> di non utilizzare farmaci, non causa effetti collaterali o complicanze nella maggior parte dei casi, è utile nei pazienti in cui i farmaci possono creare allergie o sono controindicati.
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row class="mb-0" no-gutters>
				<v-col cols="12" md="6" class="pa-0" v-if="isMobile">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura_piede.mp4" style="width: 100%; height: 100vh; object-fit: cover;"></video>
					</div>
				</v-col>
				<v-col cols="12" md="6" class="px-md-6 px-4 d-flex align-center bg-color">
					<div class="body-1 py-8">
						È un <strong><span style="color: #7d2b3b;">trattamento sicuro</span></strong> e ha pochissimi effetti collaterali, (dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi).<br><br>
						<strong><span style="color: #7d2b3b;">Non è doloroso</span></strong> e cura molte patologie dolorose (in ambito osteomuscolare e post-operatorio) e non (disturbi neurologici, dermatologici, digestivi, ginecologici di pertinenza otorinolaringoiatrica etc.)
					</div>
				</v-col>
				<v-col cols="12" md="6" class="pa-0" v-if="!isMobile">
					<div class="media-container">
						<video autoplay loop muted src="@/assets/agopuntura_piede.mp4" style="width: 100%; height: 100vh; object-fit: cover;"></video>
					</div>
				</v-col>
			</v-row>
			<v-row class="mb-0" no-gutters>
				<v-col cols="12" md="6" class="pa-0">
					<div class="media-container">
						<v-img src="@/assets/agopuntura.jpg" alt="Agopuntura" 
							height="100vh" width="100%" cover />
					</div>
				</v-col>
				<v-col cols="12" md="6" class="px-md-6 px-4 d-flex align-center bg-color">
					<div class="body-1 py-8">
						<strong><span style="color: #7d2b3b; font-size: 36px;">Sulle sedute</span></strong>
						<p class="mt-4">
							Il <strong><span style="color: #7d2b3b;">primo incontro</span></strong> potrebbe durare quasi un'ora, le <strong><span style="color: #7d2b3b;">sedute di mantenimento</span></strong> dai 30 ai 40 minuti. Il tempo che intercorre con gli aghi inseriti è variabile dai 20 ai 30 minuti.<br><br>
							Gli <strong><span style="color: #7d2b3b;">aghi utilizzati</span></strong> sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero "effetto pizzicotto", un formicolio, un minimo senso di calore ma non sono dolorosi (non devono esserlo per l'intera durata della seduta) e soprattutto sono effetti del tutto personali.<br><br>
							<strong><span style="color: #7d2b3b;">E' importante riposarsi dopo la seduta evitando pesanti esercizi fisici e grandi abbuffate con alcolici.</span></strong>
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

.media-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.highlight-title {
  font-size: 24px;
  font-weight: 600;
  color: #7d2b3b;
  font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
}

.highlight {
  color: #7d2b3b;
  font-weight: 600;
}

@media (max-width: 960px) {
    .media-container {
        height: 50vh;
    }
    
    .v-row {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .body-1 {
        font-size: 14pt;
        padding: 1rem 0;
    }
}

</style>