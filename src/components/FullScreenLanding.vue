<template>
  <div class="fullscreen-container">
    <div class="background-gradient"></div>

    <img src="@/assets/scheletro.png" alt="Sfondo anatomico" class="background-blurred" v-if="!isMobile" />


    <div class="foreground-content">


      <div class="logo-section" :style="{
        zIndex: isMobile ? 3 : 2
      }">
        <img src="@/assets/logo.png" alt="Logo Di Nanni" class="logo-image" :style="{
          width: isMobile ? '40%' : '80%',
          height: isMobile ? '40%' : '80%',
        }" />
      </div>


      <div :class="['doctor-image', { 'doctor-image-mobile': isMobile }]">
        <img src="@/assets/doriana.png" alt="Dott.ssa Di Nanni" :class="{ 'doctor-image-mobile-img': isMobile }" />
      </div>

      <div class="info-box" v-if="!isMobile" style="width: 280px;">
        <strong>Indirizzo:</strong> Via Corfu, 13 70123 Bari <br />
        <strong>Orario studio:</strong> dal lunedì al sabato<br />solo su appuntamento
      </div>
      <div class="info-box" v-else>
        <strong>Indirizzo:</strong> Via Corfu, 13<br />70123 Bari<br>
        <strong>Orario studio:</strong><br />dal lunedì al sabato<br />solo su appuntamento
      </div>

    </div>
  </div>
</template>

<script setup>
import mobile from "@/utils/mobile.js";

const isMobile = mobile.setupMobileUtils();

</script>

<style scoped>
.fullscreen-container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 64px);
  overflow: hidden;
}

.background-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #f9dce5, #f5c4d2);
  z-index: 0;
}

.background-blurred {
  position: absolute;
  left: 15%;
  width: 40%;
  opacity: 0.8;
  filter: blur(3px);
  z-index: 1;
}

.foreground-content {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.logo-section {
  position: absolute;
  top: 30px;
  left: 40px;
}

.logo-image {
  width: 250px;
}

.specializzazione {
  font-size: 16px;
  color: #69324d;
  font-style: italic;
}

.doctor-image {
  position: absolute;
  bottom: 0;
  right: -15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: visible;
}

.doctor-image img {
  height: 110%;
  width: auto;
  object-fit: contain;
  object-position: bottom right;
  max-width: none;
  transform: scale(1.1);
}

.doctor-image-mobile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 78vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.doctor-image-mobile-img {
  height: 100%;
  width: auto;
  object-fit: contain;
  object-position: bottom center;
  margin-bottom: -2px;
}

.info-box {
  position: absolute;
  bottom: 40px;
  left: 40px;
  font-size: 16px;
  color: #4a2c38;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
