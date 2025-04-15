<template>
	<div>
		<v-container :class="isMobile ? 'px-md-16 px-4 mt-5' : 'px-md-16 px-4 mt-10'">
			<br v-if="!isMobile" />
			<h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">La Fitotarapia</h1>
            <video autoplay loop muted src="@/assets/fitoterapia.mp4" style="max-width: 100%; max-height: 100%; object-fit: contain;"></video>
            <p class="body-1">
                I medicinali fitoterapici sono definiti tali se il principio attivo è una sostanza vegetale; sono formati da una miscela di sostanze vegetali biologicamente attive. 
                Sono utilizzati <strong><span style="color: #7d2b3b;">per fini terapeutici e preventivi</span></strong>.<br>
                Non sono sostanze innocue ma bisogna tenere in considerazione eventuali interazioni con farmaci che si assumono con regolarità ed eventuali effetti indesiderati.<br>
                I fitoterapici possono essere assunti comunemente sotto forma di <strong><span style="color: #7d2b3b;">compresse o capsule, oppure gocce</span></strong>.  
            </p>
            <br>
            <h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">L'Aromaterapia</h1>
            <v-img src="@/assets/aromaterapia.png" alt="Agopuntura" aspect-ratio="16/9" 
						 elevation="7" />
            <p class="body-1">
                L’aromaterapia è una forma di fitoterapia che utilizza gli <strong><span style="color: #7d2b3b;">oli essenziali</span></strong> ricavati da diversi metodi di estrazione di determinate componenti delle piante (fiori, corteccia, radici, foglie, frutti etc).<br>
                Possono essere assunti <strong><span style="color: #7d2b3b;">per via inalatoria, orale o cutanea</span></strong>.<br>
                La sua funzione è estremamente eterogenea ma molto efficace e combinabile con altre forme di terapia e prevenzione.
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
