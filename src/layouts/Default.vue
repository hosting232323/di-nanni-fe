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
</template>

<script setup>
import http from '@/utils/http';
import AppBar from './AppBar.vue';
import Footer from './Footer.vue';

import { ChattyBot } from 'generic-module';
import { botLanding } from '@/utils/chatty';
</script>

<style>
.app-background {
	background: #f8d4d9 !important;
}
</style>
