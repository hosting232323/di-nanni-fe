<template>
  <v-container>
    <h1 class="text-h3 font-weight-bold" style="color: #7d2636; margin: 10px 0;">Ultimi post</h1>
    <div v-for="(post, index) in displayedPosts" :key="post.id">
      <AgendaItem :post="post" :isFeatured="index === 0"/>
    </div>
    <div v-if="displayedPosts.length < posts.length" class="mt-4">
      <a @click="loadMorePosts" class="more-posts">Mostra più articoli</a>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import http from '@/utils/http';
import mobile from '@/utils/mobile';
import AgendaItem from '@/components/AgendaItem';
import { useHead } from '@vueuse/head';

const posts = ref([]);
const isMobile = mobile.setupMobileUtils();
const itemsToShow = ref(3);

http.getRequest('blog/post', {
  project: 'dorianadinanni.it'
}, function (data) {
  posts.value = data.posts.reverse();
});

const displayedPosts = computed(() => posts.value.slice(0, itemsToShow.value));

const loadMorePosts = () => {
  itemsToShow.value += 5;
};

useHead({
  title: "Agenda - Doriana Di Nanni - Blog su Agopuntura, Fitoterapia e Tecniche Olistiche a Bari",
  meta: [
    {
      name: "description",
      content:
        "Scopri il blog di Doriana Di Nanni, dove condividiamo articoli su agopuntura, fitoterapia, aromaterapia e altre tecniche olistiche. Approfondisci temi legati al benessere fisico e mentale a Bari."
    },
    {
      name: "keywords",
      content:
        "blog, agenda, agopuntura, fitoterapia, aromaterapia, tecniche olistiche, medicina tradizionale cinese, trattamenti olistici, benessere, salute, Bari, Puglia"
    },
    { name: "author", content: "Doriana Di Nanni" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Agenda - Doriana Di Nanni - Blog su Agopuntura, Fitoterapia e Tecniche Olistiche a Bari" },
    {
      property: "og:description",
      content:
        "Visita l'Agenda di Doriana Di Nanni, un blog dedicato a temi di agopuntura, fitoterapia e altre tecniche olistiche. Approfondisci articoli sul benessere e la salute."
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dorianadinanni.it/agenda" },
    { property: "og:image", content: "https://dorianadinanni.it/assets/logo.png" },
    { property: "og:locale", content: "it_IT" },
    { property: "og:site_name", content: "Doriana Di Nanni" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Agenda - Doriana Di Nanni - Blog su Agopuntura, Fitoterapia e Tecniche Olistiche a Bari"
    },
    {
      name: "twitter:description",
      content:
        "Esplora il blog di Doriana Di Nanni, con articoli su agopuntura, fitoterapia, tecniche olistiche e benessere a Bari. Scopri consigli utili per migliorare la tua salute."
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
.more-posts {
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  display: inline-block;
  font-style: italic;
  color: #7d2636;
}

.more-posts::after {
  content: '';
  position: absolute;
  left: 0%;
  bottom: -2px;
  width: 50%;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease, left 0.3s ease;
}

.more-posts:hover::after {
  width: 100%;
  left: 0;
  transform: none;
}
</style>
