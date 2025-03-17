<template>
    <v-container style="padding-top: 0px;">
      <p :class="{red: true, 'margin-desktop': !isMobile}">
        {{ post.title }}
      </p>
      <v-breadcrumbs :items="breadcrumbs" style="padding: 0px; margin-top: 20px;" />
      <v-img v-if="post.cover" width="800" :src="post.cover" />
      <br><VueMarkdown v-if="post.content" :source="post.content" /><br>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import http from '@/utils/http';
  import mobile from '@/utils/mobile';
  import { useRoute } from 'vue-router';
  
  import VueMarkdown from 'vue-markdown-render';
  
  const post = ref({});
  const route = useRoute();
  const breadcrumbs = ref([]);
  const isMobile = mobile.setupMobileUtils();
  
  http.getRequest(`post/${route.params.id}`, {
    project: 'dorianadinanni.it'
  }, function (data) {
    post.value = data.post;
    breadcrumbs.value = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    }, {
      title: 'Agenda',
      disabled: false,
      href: '/agenda'
    }, {
      title: data.post.title,
      disabled: true
    }
  ];
  });
  </script>
  
  <style scoped>
  .margin-desktop {
    margin-right: 500px;
  }
  </style>
  