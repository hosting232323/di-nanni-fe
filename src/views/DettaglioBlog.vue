<template>
  <v-container>
    <img v-if="post.files?.find(p => p.type == 'cover')" :src="post.files?.find(p => p.type == 'cover')?.preview" class="post-image">
    <div class="container-header" :class="{ 'mobile-layout': isMobile }">
      <div>
        <p class="topic-date" v-if="post.topics && post.updated_at">{{ formatTopics(post.topics) }} {{ formatDate(post.updated_at) }}</p>
        <p class="reading-time">{{ calculateReadingTime(post.content) }}</p>
      </div>
      <hr class="mobile-separator" v-if="isMobile">
      <div class="share-buttons">
        <a :href="shareUrl('facebook')" target="_blank" class="share-button"><span class="mdi mdi-facebook" style="color: #1877f2;"></span></a>
        <a :href="shareUrl('twitter')" target="_blank" class="share-button"><span class="mdi mdi-twitter" style="color: #1da1f2;"></span></a>
        <a :href="shareUrl('whatsapp')" target="_blank" class="share-button"><span class="mdi mdi-whatsapp" style="color: #2eb943;"></span></a>
        <a :href="shareUrl('linkedin')" target="_blank" class="share-button"><span class="mdi mdi-linkedin" style="color: #007ebb;"></span></a>
        <a :href="shareUrl('email')" target="_blank" class="share-button"><span class="mdi mdi-email" style="color: #000;"></span></a>
      </div>
      <hr class="mobile-separator" v-if="isMobile">
    </div>
    <hr v-if="!isMobile" style="border: none; height: 1px; background-color: #767677;">
    <h1 class="post-title">{{ post.title }}</h1>
    <div v-html="renderedContent" class="markdown-content"></div>
    <div
      v-if="post.files?.find(p => p.type == 'dinanni')"
      class="video-wrapper"
    >
      <div class="video-card" @click="playVideo">

        <video
          ref="videoRef"
          class="video-element"
          controls
          preload="metadata"
        >
          <source
            :src="post.files?.find(p => p.type == 'dinanni').preview"
            type="video/mp4"
          />
        </video>

        <div v-if="!isPlaying" class="video-overlay">
          <div class="play-button">▶</div>
          <p>Guarda il video</p>
        </div>

      </div>
    </div>
  </v-container>
</template>

<script setup>
import { marked } from 'marked';
import { ref } from 'vue';
import http from '@/utils/http';
import mobile from '@/utils/mobile';
import { useRoute } from 'vue-router';


const post = ref({});
const route = useRoute();
const videoRef = ref(null);
const breadcrumbs = ref([]);
const isPlaying = ref(false);
const isMobile = mobile.setupMobileUtils();

const renderedContent = ref('');

http.getRequest(`blog/post/${route.params.id}`, {
  project: 'dorianadinanni.it'
}, function (data) {
  post.value = data.post;
  renderedContent.value = marked(post.value.content);
  breadcrumbs.value = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    }, {
      title: 'Blog',
      disabled: false,
      href: '/blog'
    }, {
      title: data.post.title,
      disabled: true
    }
  ];
});

const playVideo = () => {
  if (!videoRef.value) return;

  videoRef.value.play();
  isPlaying.value = true;
};

const formatDate = (dateString) => {
  const months = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  const [day, month, year] = dateString.split(" ")[0].split("/");
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
};

const formatTopics = (topics = []) => {
  if(topics.length) return `${topics.join(' - ')} / `;
}

const calculateReadingTime = (content, wordsPerMinute = 200) => {
  if (!content) return "0 min"; 

  const wordCount = content.trim().split(/\s+/).length; // Conta le parole
  const minutes = Math.ceil(wordCount / wordsPerMinute); // Arrotonda per eccesso

  return `${minutes} min di lettura`;
};

const shareUrl = (platform) => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.value.title);
  
  switch (platform) {
    case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case 'twitter': return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    case 'whatsapp': return `https://api.whatsapp.com/send?text=${text} ${url}`;
    case 'linkedin': return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case 'email': return `mailto:?subject=${text}&body=${url}`;
    default: return '#';
  }
};
</script>

<style scoped>
.post-image {
  display: block;
  object-fit: cover;
  width: 100%;
  max-height: 450px;
  box-sizing: border-box;
}
.margin-desktop {
  margin-right: 500px;
}

.topic-date,
.reading-time {
  font-size: 15px;
  text-transform: uppercase;
}
.share-button {
  border-radius: 5px;
  text-decoration: none;
  font-size: 25px;
  margin: 0 5px;
}

.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.container-header.mobile-layout {
  flex-direction: column;
  align-items: flex-start;
}

.mobile-separator {
  width: 100%;
  height: 1px;
  background-color: #767677;
  margin: 10px 0;
  border: none;
}

.post-title {
  text-transform: uppercase;
  color: #7d2636;
  margin: 15px 0;
}

.video-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.video-card {
  position: relative;
  width: 100%;
  max-width: 950px;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 25px 60px rgba(0,0,0,0.35);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: scale(1.01);
}

.video-element {
  width: 100%;
  display: block;
  max-height: 520px;
  background: black;
}

.video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  gap: 12px;

  background: linear-gradient(
    to top,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.15)
  );

  backdrop-filter: blur(2px);
  transition: opacity 0.3s ease;
}

.play-button {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border: 1px solid rgba(255,255,255,0.25);
  transition: transform 0.2s ease, background 0.2s ease;
}

.video-card:hover .play-button {
  transform: scale(1.1);
  background: rgba(255,255,255,0.25);
}

.video-overlay p {
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.9;
}
</style>
