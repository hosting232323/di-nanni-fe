<template>
  <router-link v-if="post" :to="`/agenda/${post.id}`" class="link">
    <v-img :src="post.cover" :style="getStyle()" />
    <p class="red truncate-title mt-5" style="font-size: x-large;">{{ post.title }}</p>
    <p class="truncate-text">{{ post.content }}</p>
  </router-link>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();

const props = defineProps({
  post: Object,
  height: Number
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
</script>

<style scoped>
.truncate-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  max-height: 4.5em;
  line-height: 1.5em;
}

.truncate-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  max-height: 4.5em;
  line-height: 1.1em;
}
</style>
