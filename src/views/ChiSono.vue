<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 class="text-h3 font-weight-bold text-primary">Chi Sono</h1>
            <p class="font-weight-medium text-muted mt-4">
              Sono la Dott.ssa Doriana Di Nanni, laureata in Medicina e Chirurgia presso
              l'Università di Bari nel 2014 e specializzata in Anatomia Patologica a Bologna nel 2020.
              Integro la medicina tradizionale con tecniche complementari per offrire un approccio completo
              alla salute. Credo in un percorso di cura personalizzato, che tenga conto delle esigenze
              specifiche di ogni paziente. La mia missione è migliorare la qualità della vita attraverso un
              approccio scientifico e umano.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center">
          <v-img 
            src="../assets/Doriana_LaMiaStoria.jpg" 
            alt="Dott.ssa Doriana Di Nanni" 
            class="dinanni-img"
            :style="{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }"
          ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img 
              src="../assets/Doriana_ComeProcedo.jpg" 
              alt="Metodo di lavoro" 
              class="dinanni-img"
              :style="{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="text-h4 font-weight-bold text-primary">Come Procedo</h2>
            <p class="font-weight-medium text-muted mt-4">
              Il mio approccio terapeutico combina la medicina tradizionale con metodologie integrate.
              Durante la prima visita, effettuo un'analisi approfondita dello stato di salute del paziente,
              valutando sintomi, stile di vita e abitudini alimentari. Dopo aver raccolto tutte le informazioni
              necessarie, propongo un piano terapeutico personalizzato, che può includere trattamenti di medicina
              convenzionale e tecniche complementari come agopuntura e fitoterapia.
              Nel video di presentazione spiego come l'empatia e l'ascolto siano fondamentali nel mio metodo,
              per creare una relazione di fiducia con i pazienti e accompagnarli nel loro percorso di benessere.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <v-row align="center">
          <v-col cols="12" md="6" order="2" order-md="1">
            <h2 class="text-h4 font-weight-bold text-primary">La Mia Storia</h2>
            <p class="font-weight-medium text-muted mt-4">
              Fin da bambina ho avuto una grande passione per la medicina e il benessere delle persone.
              Dopo anni di studi e specializzazioni, ho deciso di integrare le conoscenze tradizionali con metodologie
              naturali e complementari per un approccio più completo e umano alla salute. Oggi esercito a Bari, dedicandomi
              alla cura dei pazienti con un metodo che valorizza sia la medicina scientifica sia le terapie alternative,
              cercando sempre il miglior equilibrio tra corpo e mente. Il mio percorso di formazione e le esperienze
              professionali mi hanno portato a sviluppare una visione olistica della medicina, che metto in pratica ogni
              giorno per aiutare i miei pazienti.
            </p>
          </v-col>
          <v-col cols="12" md="6" order="1" order-md="2" class="d-flex justify-center">
            <v-img 
              src="../assets/Doriana_Chisono.jpg" 
              alt="La Mia Storia" 
              class="dinanni-img"
              :style="{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img 
              src="../assets/Olismo_Integrazione.jpg" 
              alt="Integrazione e Olismo" 
              class="dinanni-img"
              :style="{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="text-h4 font-weight-bold text-primary">Integrazione e Olismo</h2>
            <p class="font-weight-medium text-muted mt-4">
              Sono convinta che il benessere sia il risultato di un equilibrio tra corpo e mente. L'integrazione di
              tecniche tradizionali e moderne è fondamentale per un approccio olistico e completo alla salute.
              Le mie terapie non sono solo per curare le malattie, ma anche per prevenire e mantenere il benessere.
              Utilizzo l'agopuntura, la fitoterapia e altre metodologie naturali come validi strumenti di cura,
              complementando le terapie convenzionali per un percorso terapeutico più completo. Se desideri un percorso
              personalizzato che prenda in considerazione le tue esigenze, contattami per scoprire insieme come posso aiutarti.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'ChiSono',
};

useHead({
  title: "Chi è Doriana Di Nanni - Medico e Terapie Olistiche a Bari",
  meta: [
    {
      name: "description",
      content:
        "Conosci la Dott.ssa Doriana Di Nanni, medico chirurgo specializzato in anatomia patologica e pratiche olistiche come agopuntura e fitoterapia a Bari. Scopri il suo approccio terapeutico integrato e la sua filosofia di cura personalizzata."
    },
    {
      name: "keywords",
      content:
        "Doriana Di Nanni, medico olistico Bari, medicina integrata, agopuntura Bari, fitoterapia, approccio olistico, medicina complementare, benessere corpo mente, chi sono"
    },
    { name: "author", content: "Doriana Di Nanni" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Chi è Doriana Di Nanni - Medico e Terapie Olistiche a Bari" },
    {
      property: "og:description",
      content:
        "Scopri il percorso personale e professionale della Dott.ssa Doriana Di Nanni, esperta in medicina e tecniche olistiche a Bari. Un metodo terapeutico che unisce scienza ed empatia per migliorare il benessere."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dorianadinanni.it/chi-sono" },
    { property: "og:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { property: "og:locale", content: "it_IT" },
    { property: "og:site_name", content: "Doriana Di Nanni" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Chi è Doriana Di Nanni - Medico e Terapie Olistiche a Bari"
    },
    {
      name: "twitter:description",
      content:
        "Dott.ssa Doriana Di Nanni, medico e specialista in pratiche olistiche a Bari. Conosci il suo metodo terapeutico e il suo percorso professionale."
    },
    { name: "twitter:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { name: "twitter:site", content: "@dorianadinanni" },
    { name: "geo.region", content: "IT-BA" },
    { name: "geo.placename", content: "Bari" },
    { name: "geo.position", content: "41.106006;16.862826" },
    { name: "ICBM", content: "41.106006, 16.862826" },
    { name: "business:contact_data:street_address", content: "Via Corfù, 13" },
    { name: "business:contact_data:locality", content: "Bari" },
    { name: "business:contact_data:region", content: "BA" },
    { name: "business:contact_data:postal_code", content: "70121" },
    { name: "business:contact_data:country_name", content: "Italy" },
    { name: "business:contact_data:email", content: "d.dinanni@gmail.com" },
    { name: "business:contact_data:phone_number", content: "+39 379 218 5146" },
    { name: "business:contact_data:website", content: "https://dorianadinanni.it" }
  ]
});
</script>

<style scoped>
h1, h2 {
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
}

.dinanni-img {
  width: 100%;
  height: auto;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #7d2636 !important;
}

.font-weight-medium {
  font-weight: 500;
}

.font-weight-bold {
  font-weight: 700;
}

.mt-4 {
  margin-top: 1rem;
}

.text-muted {
  color: #6c757d;
}

@media (max-width: 600px) {
  .dinanni-img {
    width: 100%;
  }
}
</style>
