<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue';

const script = document.createElement('script');
script.type = 'module';
script.src = 'https://chatty-be.replit.app/chat-file/js?file=inject&user_id=2';
document.body.appendChild(script);
</script>
