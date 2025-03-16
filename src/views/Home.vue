<template>
  <div>
    <FullScreenLanding next-section-id="treatments" />
    <Treatments />
    <Contacts />
    </div>
</template>

<script setup>
import FullScreenLanding from '@/components/FullScreenLanding.vue'
import Contacts from '@/components/Contacts.vue';
import Treatments from '../components/Treatments.vue';
</script>
