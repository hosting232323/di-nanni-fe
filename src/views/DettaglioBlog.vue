<template>
  <v-container>
    <img v-if="post.files?.find(p => p.type == 'cover')" :src="post.files?.find(p => p.type == 'cover')?.preview"
      class="post-image">
    <div class="container-header" :class="{ 'mobile-layout': isMobile }">
      <div>
        <p class="topic-date" v-if="post.topics && post.updated_at">{{ formatTopics(post.topics) }} {{
          formatDate(post.updated_at) }}</p>
        <p class="reading-time">{{ calculateReadingTime(post.content) }}</p>
      </div>
      <hr class="mobile-separator" v-if="isMobile">
      <div class="share-buttons">
        <a :href="shareUrl('facebook')" target="_blank" class="share-button"><span class="mdi mdi-facebook"
            style="color: #1877f2;"></span></a>
        <a :href="shareUrl('twitter')" target="_blank" class="share-button"><span class="mdi mdi-twitter"
            style="color: #1da1f2;"></span></a>
        <a :href="shareUrl('whatsapp')" target="_blank" class="share-button"><span class="mdi mdi-whatsapp"
            style="color: #2eb943;"></span></a>
        <a :href="shareUrl('linkedin')" target="_blank" class="share-button"><span class="mdi mdi-linkedin"
            style="color: #007ebb;"></span></a>
        <a :href="shareUrl('email')" target="_blank" class="share-button"><span class="mdi mdi-email"
            style="color: #000;"></span></a>
      </div>
      <hr class="mobile-separator" v-if="isMobile">
    </div>
    <hr v-if="!isMobile" style="border: none; height: 1px; background-color: #767677;">
    <h1 class="post-title">{{ post.title }}</h1>
    <div v-html="renderedContent" class="markdown-content"></div>
    <!-- ── Video section ── -->
    <div v-if="post.files?.find(p => p.type == 'dinanni')" class="post-video-wrapper">
      <div class="post-video-label">
        <span class="mdi mdi-play-circle-outline"></span>
        Video
      </div>
      <div class="post-video-card" @mouseenter="showControls = true" @mouseleave="showControls = false">
        <video ref="videoRef" preload="metadata" class="post-video" @timeupdate="onTimeUpdate" @play="isPlaying = true"
          @pause="isPlaying = false" @click="togglePlay">
          <source :src="post.files?.find(p => p.type == 'dinanni').preview" type="video/mp4" />
          Il tuo browser non supporta il video.
        </video>

        <!-- Big play overlay -->
        <div class="vp-overlay" v-show="!isPlaying" @click="togglePlay">
          <div class="vp-big-play">
            <span class="mdi mdi-play" style="font-size: 34px; color: #fff; margin-left: 3px;"></span>
          </div>
        </div>

        <!-- Controls bar -->
        <div class="vp-controls" :class="{ visible: !isPlaying || showControls }">
          <!-- Progress bar -->
          <div class="vp-progress-bar" @click="seek">
            <div class="vp-progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="vp-bottom">
            <!-- Play/Pause -->
            <button class="vp-btn" @click="togglePlay">
              <span :class="isPlaying ? 'mdi mdi-pause' : 'mdi mdi-play'"></span>
            </button>
            <!-- Volume -->
            <button class="vp-btn" @click="toggleMute">
              <span :class="isMuted ? 'mdi mdi-volume-off' : 'mdi mdi-volume-high'"></span>
            </button>
            <input type="range" class="vp-vol-slider" min="0" max="1" step="0.05" v-model="volume" @input="setVolume" />
            <!-- Time -->
            <span class="vp-time">{{ currentTimeFormatted }} / {{ durationFormatted }}</span>
            <!-- Fullscreen -->
            <button class="vp-btn" @click="toggleFullscreen">
              <span class="mdi mdi-fullscreen"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { marked } from 'marked';
import { ref, computed } from 'vue';
import http from '@/utils/http';
import mobile from '@/utils/mobile';
import { useRoute } from 'vue-router';

const post = ref({});
const route = useRoute();
const breadcrumbs = ref([]);
const isMobile = mobile.setupMobileUtils();

const renderedContent = ref('');

const videoRef = ref(null);
const isPlaying = ref(false);
const showControls = ref(false);
const isMuted = ref(false);
const volume = ref(1);
const currentTime = ref(0);
const duration = ref(0);

const fmt = (s) => {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
};

const progress = computed(() => duration.value ? (currentTime.value / duration.value) * 100 : 0);
const currentTimeFormatted = computed(() => fmt(currentTime.value));
const durationFormatted = computed(() => fmt(duration.value));

const togglePlay = () => videoRef.value?.paused ? videoRef.value.play() : videoRef.value.pause();
const toggleMute = () => { isMuted.value = !isMuted.value; videoRef.value.muted = isMuted.value; };
const setVolume = () => { videoRef.value.volume = volume.value; };
const onTimeUpdate = () => {
  currentTime.value = videoRef.value?.currentTime ?? 0;
  duration.value = videoRef.value?.duration ?? 0;
};

const seek = (e) => {
  const bar = e.currentTarget;
  const pct = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
  videoRef.value.currentTime = pct * duration.value;
};

const toggleFullscreen = () => {
  const el = videoRef.value?.closest('.post-video-card');
  document.fullscreenElement ? document.exitFullscreen() : el?.requestFullscreen();
};

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

const formatDate = (dateString) => {
  const months = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  const [day, month, year] = dateString.split(" ")[0].split("/");
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
};

const formatTopics = (topics = []) => {
  if (topics.length) return `${topics.join(' - ')} / `;
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

/* ── Video section ── */
.post-video-wrapper {
  margin: 36px 0 12px;
}

.post-video-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: #7d2636;
  margin-bottom: 12px;
}

.post-video-label .mdi {
  font-size: 18px;
}

.post-video-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #0d0d0d;
  line-height: 0;
  box-shadow: 0 4px 20px rgba(125, 38, 54, 0.12);
}

.post-video {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: contain;
  cursor: pointer;
}

/* Big play overlay */
.vp-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.vp-big-play {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(125, 38, 54, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .15s, background .15s;
}

.vp-big-play:hover {
  background: #7d2636;
  transform: scale(1.08);
}

.vp-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.72));
  padding: 28px 12px 10px;
  opacity: 0;
  transition: opacity .25s;
}

.vp-controls.visible {
  opacity: 1;
}

.vp-progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 14px;
  position: relative;
}

.vp-progress-fill {
  height: 100%;
  background: #7d2636;
  border-radius: 2px;
  position: relative;
}

.vp-progress-fill::after {
  content: '';
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  width: 12px;
  height: 12px;
  background: #7d2636;
  border-radius: 50%;
  transition: transform .15s;
}

.vp-progress-bar:hover .vp-progress-fill::after {
  transform: translateY(-50%) scale(1);
}

.vp-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.vp-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  opacity: .9;
  transition: opacity .15s;
  display: flex;
  align-items: center;
}

.vp-btn:hover {
  opacity: 1;
}

.vp-time {
  color: #fff;
  font-size: 13px;
  flex: 1;
}

.vp-vol-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 64px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.vp-vol-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}

.vp-vol-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  border: none;
}

@media (max-width: 960px) {
  .post-video {
    max-height: 260px;
  }
}
</style>
