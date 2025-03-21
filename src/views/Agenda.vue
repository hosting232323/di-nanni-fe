<template>
  <v-container>
    <h1 style="font-family: 'Montserrat', sans-serif; text-transform: uppercase; margin: 10px 0;">Ultimi post</h1>
    <div v-for="(post, index) in displayedPosts" :key="post.id">
      <AgendaItem :post="post" :isFeatured="index === 0"/>
    </div>
    <div v-if="displayedPosts.length < posts.length" class="text-center mt-4">
      <a @click="loadMorePosts" class="more-posts">Mostra più articoli</a>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import http from '@/utils/http';
import mobile from '@/utils/mobile';
import AgendaItem from '@/components/AgendaItem';

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
