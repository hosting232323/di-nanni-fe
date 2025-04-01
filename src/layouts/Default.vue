<template>
  <v-app class="app-background">
    <!-- <AppBar /> -->
    <!-- <AppBar1 /> -->
    <!-- <AppBar2 /> -->
    <!-- <AppBar3 /> -->
    <v-main>
      <router-view  />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue';
import AppBar1 from './AppBar1.vue';
import AppBar2 from './AppBar2.vue';
import AppBar3 from './AppBar3.vue';
import Footer from './Footer.vue';

const script = document.createElement('script');
script.type = 'module';
script.src = 'https://chatty-be.replit.app/chat-file/js?file=inject&user_id=2';
document.body.appendChild(script);
</script>

<style>
.app-background {
	background: #f8d4d9 !important;
}
</style>
