<template>
  <Loading :home="false" v-if="loading"/>
  <v-container v-else>
    <h1 class="text-h3 font-weight-bold" style="color: #7d2636; margin: 10px 0;">Ultimi post</h1>
    <div v-for="(post, index) in displayedPosts" :key="post.id">
      <BlogItem :post="post" :isFeatured="index === 0"/>
    </div>
    <div v-if="displayedPosts.length < posts.length" class="mt-4">
      <a @click="loadMorePosts" class="more-posts">Mostra più articoli</a>
    </div>
    <div v-else class="mt-4">
      <a @click="removeMorePosts" class="more-posts">Mostra meno</a>
    </div>
  </v-container>
</template>

<script setup>
import BlogItem from '@/components/BlogItem';
import Loading from '@/components/Loading';

import { ref, computed } from 'vue';
import http from '@/utils/http';
import { useHead } from '@unhead/vue';
import { seoFor } from '@/utils/seo.routes';

const posts = ref([]);
const loading = ref(true);
const maxItems = 4;
const itemsToShow = ref(maxItems);

http.makeRequest('article', 'GET', {
  params: {
    project: 'dorianadinanni.it'
  }
}, function (data) {
  if(data.status == 'ok') {
    posts.value = data.data.map(a => ({ ...a, topics: a.category ? [a.category] : [] })).reverse();
    loading.value = false;
  }
});

const displayedPosts = computed(() => posts.value.slice(0, itemsToShow.value));

const loadMorePosts = () => {
  itemsToShow.value += 5;
};

const removeMorePosts = () => {
  itemsToShow.value = maxItems;
};

useHead(seoFor('/blog'));
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
  font-style: italic;
  color: #7d2636;
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
