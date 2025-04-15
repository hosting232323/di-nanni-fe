<template>
	<div>
		<v-container :class="isMobile ? 'px-md-16 px-4 mt-5' : 'px-md-16 px-4 mt-10'">
			<br v-if="!isMobile" />
			<h1 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;">Tecniche Complementari</h1>
            <p class="body-1">Sono tecniche che possono essere eseguite da sole e/o assieme all’agopuntura e all’utilizzo di oli essenziali diluiti in olio vegetale. Si tratta di manualità diverse che aiutano la circolazione di energia e sangue che possono essere supportate con il guasha e/o coppette.</p>
            <br>
			<h2 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-size: 28px;">La Coppettazione</h2>
            <v-row class="align-center">
				<v-col cols="12" md="6">
					<v-img src="@/assets/coppettazione.png" alt="Coppettazione" aspect-ratio="16/9" max-width="600"
						rounded="lg" elevation="7" />
				</v-col>
				<v-col cols="12" md="6">
					<p class="body-1">
                        La coppettazione utilizza delle “<strong><span style="color: #7d2b3b;">coppette</span></strong>” di diverso materiale (più comunemente in vetro, ma anche bambù e silicone) che creano un effetto sottovuoto a contatto con la pelle (come una specie di ventosa).<br>
                        <strong><span style="color: #7d2b3b;">Si lavora su determinati punti oppure lungo un meridiano particolare</span></strong>. E’ possibile mantenere la coppetta in un punto per pochi minuti.<br>
                        E’ eseguibile <strong><span style="color: #7d2b3b;">a caldo o a freddo</span></strong>. In entrambi i casi è possibile che a termine del trattamento rimangono dei segni non dolorosi sulla pelle che in pochissimi giorni andranno via da soli.<br>
                        E’ utile soprattutto nelle <strong><span style="color: #7d2b3b;">tensioni muscolari, nelle contratture, allevia il dolore</span></strong> con lo scopo di portare in superficie il sangue e le tossine.<br>
					</p>
				</v-col>
			</v-row>
            <br>
            <h2 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-size: 28px;">Il Guasha</h2>
            <v-row class="align-center">
				<v-col cols="12" md="6">
					<p class="body-1">
                        E’ un’antica tecnica tradizionale cinese e il termine significa “strofinare”.<br>
                        Infatti, si utilizza un strumento smussato di giada o di quarzo direttamente a contatto con la pelle con <strong><span style="color: #7d2b3b;">movimenti di sfregamento con proprietà lenitive e antinfiammatorie</span></strong>.<br>
                        Ha lo scopo di <strong><span style="color: #7d2b3b;">rilassare i muscoli, riducendo il dolore e favorendo la circolazione e il drenaggio dei tessuti</span></strong>.
					</p>
				</v-col>
                <v-col cols="12" md="6">
					<v-img src="@/assets/guasha.png" alt="Coppettazione" aspect-ratio="16/9" max-width="600"
						rounded="lg" elevation="7" />
				</v-col>
			</v-row>
            <br>
			<h2 class="font-weight-bold mb-3 text-center" style="color: #7d2b3b; font-size: 28px;">Il Tui Na'</h2>
            <v-row class="align-center">
				<v-col cols="12" md="6">
					<v-img src="@/assets/tui-na.jpg" alt="Coppettazione" aspect-ratio="16/9" max-width="600"
						rounded="lg" elevation="7" />
				</v-col>
				<v-col cols="12" md="6">
					<p class="body-1">
                        E’ il <strong><span style="color: #7d2b3b;">massaggio</span></strong> della Medicina Tradizionale Cinese; agisce sui meridiani energetici e sugli agopunti con diverse tecniche di manipolazione.
                        Ha lo scopo di <strong><span style="color: #7d2b3b;">sciogliere i blocchi energetici e favorire il movimento del sangue e dell’energia</span></strong>: regola la funzionalità degli organi e dei visceri e riattiva le risorse individuali accelerando i processi di guarigione. 
                        E’ un valido supporto alle altre tecniche terapeutiche, utile in problemi osteomuscolari e non.
					</p>
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
.body-1 {
	font-family: Montserrat, Lato, "Open Sans", Calibri, sans-serif;
	font-size: 16pt;
	line-height: 1.5;
	color: #333;
}
</style>
