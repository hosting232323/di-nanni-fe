<template>
  <FullScreenLanding next-section-id="treatments" />
  <Cit text="Non siamo né un sintomo né una malattia" />
  <HomeChiSono />
  <Treatments />
  <Cit text="Il corpo umano è il tempio dell’anima, e come tale va curato e rispettato" />
  <!--<HomeBlog />-->
  <Recensioni />
  <HomeContacts />
</template>

<script setup>
import FullScreenLanding from '@/components/FullScreenLanding.vue'
import Treatments from '../components/Treatments.vue';
import Recensioni from '../components/Recensioni.vue';
import HomeBlog from '../components/HomeBlog.vue';
import HomeContacts from '../components/HomeContacts.vue';
import HomeChiSono from '../components/HomeChiSono.vue';
import Cit from '../components/Cit.vue';

import { useHead } from '@unhead/vue';
import { seoFor } from '@/utils/seo.routes';

useHead(seoFor('/'));
</script>
