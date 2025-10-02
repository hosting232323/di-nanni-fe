<template>
  <v-container class="padding-fix">
    <h1 class="text-h3 font-weight-bold" style="color: #7d2636;">Ultimi post</h1>
    <Loading :home="true" v-if="loading"/>

    <div class="articles-wrapper mt-4" v-if="!loading">
      <div v-for="(post, index) in displayedPosts" :key="index" class="article-item">
        <img :src="post.cover" class="img" />
        <p class="title">{{ post.title }}</p>
        <p>{{ truncate(post.content) }}</p>
      </div>
    </div>
    <p v-if="!loading"><a href="/blog" class="more-posts">Scopri di più...</a></p>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import http from '@/utils/http';
import Loading from './Loading.vue';

const loading = ref(true);
const posts = ref([]);

http.getRequest('blog/post', {
  project: 'dorianadinanni.it'
}, function (data) {
  if(data.status == 'ok') {
    posts.value = data.posts.reverse();
    loading.value = false;
  }
});

const displayedPosts = computed(() => posts.value.slice(0, 3));

const truncate = (text) => {
  if (!text) return '';
  return text.length > 150 ? text.slice(0, 150) + '...' : text;
};
</script>

<style scoped>
.homeblog-title {
  color: #7d2636;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
}

.articles-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.article-item {
  width: 300px;
  border-radius: 8px;
}

.title {
  font-weight: 700;
  color: #7d2636;
}

.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
}

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
