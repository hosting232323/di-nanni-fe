<template>
  <v-app class="app-background">
    <AppBar />
    <v-main>
      <router-view  />
    </v-main>
    <Footer />
  </v-app>
  <ChattyBot
    :hostname="hostname"
    :bot-data="botLanding"
  />
  <MiodottoreFab />
</template>

<script setup>
import AppBar from './AppBar.vue';
import Footer from './Footer.vue';
import MiodottoreFab from '@/components/MiodottoreFab.vue';
import { defineAsyncComponent } from 'vue';

// Il chatbot (bundle molto pesante) non serve al primo render: parte alla prima interazione
// dell'utente o, in mancanza, dopo qualche secondo.
const ChattyBot = defineAsyncComponent(() => new Promise((resolve) => {
  const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'];
  let started = false;
  const load = () => {
    if (started) return;
    started = true;
    events.forEach(event => window.removeEventListener(event, load));
    resolve(import('generic-module').then(module => module.ChattyBot));
  };
  events.forEach(event => window.addEventListener(event, load, { passive: true }));
  setTimeout(load, 12000);
}));

const hostname = import.meta.env.VITE_HOSTNAME;

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
