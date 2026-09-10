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
        <v-btn
          to="/contatti"
          class="cta-btn"
          :size="isMobile ? 'small' : 'large'"
          elevation="4"
        >
          Prenota una visita
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </div>


      <div :class="['doctor-image', { 'doctor-image-mobile': isMobile }]">
        <img src="@/assets/doriana.png" alt="Dott.ssa Di Nanni" :class="{ 'doctor-image-mobile-img': isMobile }" />
      </div>

      <div class="info-box" v-if="!isMobile" style="width: 280px;">
        <strong>Indirizzo:</strong> Via Corfù, 13 70121 Bari <br />
        <strong>Orario studio:</strong> dal lunedì al sabato<br />solo su appuntamento
      </div>
      <div class="info-box" v-else>
        <strong>Indirizzo:</strong> Via Corfù, 13<br />70121 Bari<br>
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
  animation: fade-slide-in 0.9s ease both;
}

.logo-image {
  width: 250px;
}

.cta-btn {
  display: inline-flex;
  margin-top: 28px;
  background: linear-gradient(120deg, #7d2636, #a33a4d);
  color: #fff;
  font-style: italic;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(125, 38, 54, 0.35) !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(125, 38, 54, 0.45) !important;
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  line-height: 1.55;
  color: #4a2c38;
  background-color: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.65);
  padding: 14px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(125, 38, 54, 0.14);
}

@media (max-width: 600px) {
  .logo-section {
    left: 20px;
  }

  .info-box {
    left: 20px;
    right: 90px;
    bottom: 20px;
    font-size: 14px;
    padding: 12px 16px;
  }
}
</style>
