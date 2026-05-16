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
</template>

<script setup>
import AppBar from './AppBar.vue';
import Footer from './Footer.vue';
import { ChattyBot } from 'generic-module';

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
</style>
