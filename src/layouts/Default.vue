<template>
  <v-app class="app-background">
    <AppBar />
    <v-main>
      <router-view  />
    </v-main>
    <Footer />
  </v-app>
  <ChattyBot 
    :hostname="viteHostnameChattyBe"
    :bot-data="botLanding"
  />
</template>

<script setup>
import AppBar from './AppBar.vue';
import Footer from './Footer.vue';

import { ChattyBot } from 'generic-module';
import { botLanding } from '@/utils/chatty';

const viteHostnameChattyBe = import.meta.env.VITE_HOSTNAME_CHATTY_BE;
</script>

<style>
.app-background {
	background: #f8d4d9 !important;
}
</style>
