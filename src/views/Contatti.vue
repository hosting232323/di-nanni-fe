<template>
  <Contacts />
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Contacts from '@/components/Contacts.vue';

useHead({
  title: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari",
  meta: [
    {
      name: "description",
      content:
        "Contatta Doriana Di Nanni per informazioni sui trattamenti olistici, come agopuntura e fitoterapia, a Bari. Puoi inviare un messaggio, richiedere un appuntamento o fare domande sul nostro servizio."
    },
    {
      name: "keywords",
      content:
        "contatti, agopuntura, fitoterapia, aromaterapia, tecniche olistiche, richieste, appuntamento, Bari, Puglia, medicina tradizionale cinese"
    },
    { name: "author", content: "Doriana Di Nanni" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari" },
    {
      property: "og:description",
      content:
        "Contatta Doriana Di Nanni a Bari per richieste di appuntamenti o domande sui trattamenti di agopuntura, fitoterapia e altre tecniche olistiche."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dorianadinanni.it/contatti" },
    { property: "og:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { property: "og:locale", content: "it_IT" },
    { property: "og:site_name", content: "Doriana Di Nanni" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Contatti - Doriana Di Nanni - Agopuntura, Fitoterapia e Tecniche Olistiche a Bari"
    },
    {
      name: "twitter:description",
      content:
        "Contatta Doriana Di Nanni per richiedere appuntamenti o fare domande su trattamenti olistici e complementari a Bari."
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
