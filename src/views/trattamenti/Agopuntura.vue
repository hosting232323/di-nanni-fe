<template>
	<div>
		<v-container :class="isMobile ? 'px-md-16 px-4 mt-5' : 'px-md-16 px-4 mt-10'">
			<br v-if="!isMobile" />
			<h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">Cos'è l'Agopuntura?</h1>
			<v-row class="mb-5 mt-5" style="margin-top: 3% !important;">
				<v-col cols="12" md="6">
					<video autoplay loop muted src="@/assets/agopuntura.mp4" style="max-width: 100%; max-height: 100%; object-fit: contain;"></video>
				</v-col>
				<v-col cols="12" md="6" style="margin: auto;">
					<p class="body-1">
						L'<strong><span style="color: #7d2b3b;">agopuntura</span></strong> è una pratica della medicina tradizionale cinese che consiste nell'inserire aghi sottili in specifici punti del corpo per riequilibrare l'energia vitale.<br>
                        Ha il <strong><span style="color: #7d2b3b;">vantaggio</span></strong> di non utilizzare farmaci, non causa effetti collaterali o complicanze nella maggior parte dei casi, è utile nei pazienti in cui i farmaci possono creare allergie o sono controindicati.
					</p>
				</v-col>
			</v-row>
			<v-row class="mb-5 align-center" v-if="!isMobile">
				<v-col cols="12" md="6">
					<p class="body-1">
                        È un <strong><span style="color: #7d2b3b;">trattamento sicuro</span></strong> e ha pochissimi effetti collaterali, (dolore e lividi e/o sanguinamenti sulle parti in cui entrano i piccoli aghi).<br>  
						<strong><span style="color: #7d2b3b;">Non è doloroso</span></strong> e cura molte patologie dolorose (in ambito osteomuscolare e post-operatorio) e non (disturbi neurologici, dermatologici, digestivi, ginecologici di pertinenza otorinolaringoiatrica etc.)
					</p>
				</v-col>
				<v-col cols="12" md="6" class="d-flex justify-end">
					<video autoplay loop muted src="@/assets/agopuntura_piede.mp4" style="max-width: 40%; max-height: 30%; object-fit: contain;"></video>
				</v-col>
			</v-row>
			<h2 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-size: 28px;">Sulle sedute</h2>
			<v-row class="align-center">
				<v-col cols="12" md="6">
					<v-img src="@/assets/agopuntura.jpg" alt="Agopuntura" aspect-ratio="16/9" max-width="600"
						rounded="lg" elevation="7" />
				</v-col>
				<v-col cols="12" md="6">
					<p class="body-1">
                        Il <strong><span style="color: #7d2b3b;">primo incontro</span></strong> potrebbe durare quasi un’ora, le <strong><span style="color: #7d2b3b;">sedute di mantenimento</span></strong> dai 30 ai 40 minuti. Il tempo che intercorre con gli aghi inseriti  è variabile dai 20 ai 30 minuti.<br>
                        Gli <strong><span style="color: #7d2b3b;">aghi utilizzati</span></strong> sono usa e getta, sono molto sottili e flessibili. Il loro inserimento potrebbe provocare un leggero “effetto pizzicotto”, un formicolio, un minimo senso di calore ma non sono dolorosi (non devono esserlo per l’intera durata della seduta) e soprattutto sono effetti del tutto personali.<br>  
                        <strong><span style="color: #7d2b3b;">E’ importante riposarsi dopo la seduta evitando pesanti esercizi fisici e grandi abbuffate con alcolici.</span></strong>
					</p>
				</v-col>
			</v-row>
            <br>
            <p class="body-1">
                Ad oggi è <strong><span style="color: #7d2b3b;">riconosciuta e validata dai sistemi sanitari nazionali e dall’Organizzazione Mondiale della Sanità.</span></strong><br>
                In Italia questo sistema terapeutico è stato inserito nei <strong><span style="color: #7d2b3b;">LEA (livelli essenziali di assistenza): perciò in alcune regioni italiane è possibile effettuare queste prestazioni tramite il Servizio Sanitario Nazionale.</span></strong>  
            </p>
        </v-container>
	</div>
</template>

<script setup>
import mobile from "@/utils/mobile";

const isMobile = mobile.setupMobileUtils();
</script>

<style scoped>
.body-1 {
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
	font-size: 16pt;
	line-height: 1.5;
	color: #333;
}
</style>
