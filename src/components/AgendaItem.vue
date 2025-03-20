<template>

  <v-container v-if="isFeatured" class="featured-post">
    <v-row class="relative-container">
      <!-- Sezione immagini -->
      <v-col cols="12" md="7" class="image-container">
        <div class="post-image">
          <v-img :src="post.cover" class="featured-image" max-height="400px" />
        </div>
      </v-col>

      <!-- Sezione testo sovrapposta -->
      <v-col cols="12" md="5" class="text-container">
        <div class="text-box">
          <p class="topic-date">{{ formatTopics(post.topics) }} {{ formatDate(post.updated_at) }}</p>
          <p class="reading-time">{{ calculateReadingTime(post.content) }}</p>
          <h2 class="truncate-title">{{ post.title }}</h2>
          <p class="truncate-text">{{ post.content }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="d-flex mt-4 mb-4">
    <router-link :to="`/agenda/${post.id}`">
      <v-img :src="post.cover" width="200px" max-height="225px"/>
    </router-link>

    <div style="margin-left: 15px;">
      <p class="topic-date">{{ formatTopics(post.topics) }} {{ formatDate(post.updated_at) }}</p>
      <p class="reading-time">{{ calculateReadingTime(post.content) }}</p>

      <router-link :to="`/agenda/${post.id}`" style="text-decoration: none;">
        <h2 class="truncate-title">{{ post.title }}</h2>
      </router-link>

      <p v-if="post" class="truncate-text">{{ post.content }}</p>
    </div>
  </v-container>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();

const props = defineProps({
  post: Object,
  height: Number,
  isFeatured: Boolean
});

const getStyle = () => {
  let styleValue = 'px';
  if (props.height)
    styleValue = props.height + styleValue;
  else
    styleValue = '400' + styleValue;
  return isMobile.value ? {
    maxHeight: styleValue
  } : {
    height: styleValue
  };
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
</script>


<style scoped>
/* Contenitore principale */
.featured-post {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

/* Sezione immagine */
.image-container {
  position: relative;
}

.featured-image {
  width: 100%;
  max-height: 225px;
  object-fit: cover;
}

/* Sezione testo sovrapposta */
.text-container {
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  /* border-radius: 8px; */
  /* max-width: 400px; */
}

/* Stili del testo */
.truncate-title {
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #7d2636;
}

.truncate-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-height: 4.5em;
  line-height: 1.5em;
}

.topic-date,
.reading-time {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
}

/* Responsività */
@media (max-width: 960px) {
  .text-container {
    left: 50%;
    max-width: 80%;
    padding: 15px;
  }

  .truncate-title {
    font-size: 20px;
  }
}
</style>
