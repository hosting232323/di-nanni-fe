<template>
  <FullScreenLanding next-section-id="treatments" />
  <Cit :text="'La mano che cura tocca più del corpo: risveglia l\'energia, ristora l\'anima'" />
  <HomeChiSono />
  <Treatments />
  <Cit :text="'Il corpo umano è il tempio dell’anima, e come tale va curato e rispettato'" />
  <HomeBlog />
  <Recensioni />
  <HomeContacts />
</template>

<script setup>
import FullScreenLanding from '@/components/FullScreenLanding.vue'
import Treatments from '../components/Treatments.vue';
import { useHead } from '@vueuse/head';
import Recensioni from '../components/Recensioni.vue';
import HomeBlog from '../components/HomeBlog.vue';
import HomeContacts from '../components/HomeContacts.vue';
import HomeChiSono from '../components/HomeChiSono.vue';
import Cit from '../components/Cit.vue';

useHead({
  title: "Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari",
  meta: [
    {
      name: "description",
      content:
        "Doriana Di Nanni offre trattamenti olistici e complementari, compresi agopuntura, fitoterapia, aromaterapia, tecniche di massaggio e molto altro a Bari. Scopri come possiamo aiutarti ad affrontare problemi fisici, gestire lo stress e migliorare il benessere generale."
    },
    {
      name: "keywords",
      content:
        "agopuntura, fitoterapia, aromaterapia, tecniche olistiche, medicina tradizionale cinese, trattamenti complementari, Bari, Puglia, Italia, benessere, relax, stress"
    },
    { name: "author", content: "Doriana Di Nanni" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari" },
    {
      property: "og:description",
      content:
        "Doriana Di Nanni offre trattamenti olistici e complementari a Bari, tra cui agopuntura, fitoterapia, aromaterapia e molto altro. Scopri come possiamo aiutarti a migliorare il benessere fisico e mentale."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dorianadinanni.it" },
    { property: "og:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { property: "og:locale", content: "it_IT" },
    { property: "og:site_name", content: "Doriana Di Nanni" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari"
    },
    {
      name: "twitter:description",
      content:
        "Scopri i trattamenti olistici e complementari offerti da Doriana Di Nanni a Bari, tra cui agopuntura, fitoterapia, aromaterapia e tecniche di massaggio. Migliora il tuo benessere generale con noi."
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
