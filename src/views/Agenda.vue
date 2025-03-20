<template>
  <v-container >
    <h1 style="font-family: 'Montserrat', sans-serif; text-transform: uppercase; margin: 10px 0;">Ultimi post</h1>
    <div v-for="(post, index) in posts" :key="post.id">
      <AgendaItem :post="post" :isFeatured="index === 0"/>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import http from '@/utils/http';
import mobile from '@/utils/mobile';

import AgendaItem from '@/components/AgendaItem';

const posts = ref([]);
const isMobile = mobile.setupMobileUtils();

http.getRequest('blog/post', {
  project: 'dorianadinanni.it'
}, function (data) {
  posts.value = data.posts.reverse();
});
</script>

<style scoped>
.dotted-hr {
  border: 3px dotted;
  border-top: none;
  height: 0;
  margin: 20px 0;
  width: 100%;
}
</style>
