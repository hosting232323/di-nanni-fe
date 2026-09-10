<template>
  <v-app class="app-background">
    <AppBar />
    <v-main>
      <router-view  />
    </v-main>
    <Footer />
  </v-app>
  <ChattyBot
    :hostname="http.hostname"
    :bot-data="botLanding"
  />
  <MiodottoreFab />
</template>

<script setup>
import AppBar from './AppBar.vue';
import Footer from './Footer.vue';
import MiodottoreFab from '@/components/MiodottoreFab.vue';
import { ChattyBot } from 'generic-module';

import http from '@/utils/http';

const botLanding = {
  botId: 6,
  message: 'Ciao, come posso aiutarti.',
  name: 'dott. ssa Doriana Di Nanni',
  image: '/logo.png',
  faq: [
    {
      'name': 'Fa male? 😌',
      'value': 'L\'agopuntura è dolorosa?'
    },
    {
      'name': 'Quante sedute servono? ⏳',
      'value': 'Di quante sedute ho bisogno per vedere risultati?'
    },
    {
      'name': 'È sicura? 🌿',
      'value': 'L\'uso delle piante medicinali può avere effetti indesiderati?'
    }
  ],
  color: {
    theme_color: '#7d2636',
    theme_color_hover: '#a6344c',
    fab_hover: '#912c3f',
    fab_shadow: '#b35a6b',
    fab_border: '#a6344c'
  },
  stream: true
};
</script>

<style>
.app-background {
	background: #f8d4d9 !important;
}

/* Solleva il FAB del chatbot (componente ChattyBot di generic-module)
   per fare spazio, sotto, al FAB di prenotazione Miodottore */
.fab {
	margin-bottom: 110px !important;
}

@media screen and (max-width: 768px) {
	.fab {
		margin-bottom: 85px !important;
	}
}
</style>
