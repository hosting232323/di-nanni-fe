<template>
  <div class="section">
    <v-img src="@/assets/sobada.jpg" alt="Aromaterapia" cover class="media" />

    <div class="overlay">
      <h1 class="title">La sobada</h1>
      <p class="body-1">
        La sobada è un <strong><span style="color: #7d2b3b;">massaggio addominale e uterino</span></strong> della cultura Maya, che ristabilisce 
        l’equilibrio del corpo e i problemi dell’apparato riproduttivo della donna e dell’uomo. Utile in 
        <strong><span style="color: #7d2b3b;">disturbi del ciclo, di fertilità, di sessualità e nel post-parto</span></strong>.
      </p>
    </div>
  </div>
</template>


<style scoped>
.section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.6);
}

.overlay {
  position: relative;
  z-index: 2;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
  background: rgba(0, 0, 0, 0.35);
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
}

.title {
  font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
}

.body-1 {
  font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #fff;
  width: 100%;
}
</style>
