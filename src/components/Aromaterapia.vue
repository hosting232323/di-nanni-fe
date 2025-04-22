<template>
  <div class="section">
    <v-img src="@/assets/aromaterapia.png" alt="Aromaterapia" cover class="media" />

    <div class="overlay">
      <h1 class="title">L'Aromaterapia</h1>
      <p class="body-1">
        L’aromaterapia è una forma di fitoterapia che utilizza gli
        <strong><span style="color: #7d2b3b;">oli essenziali</span></strong> ricavati da diversi metodi di estrazione di
        determinate componenti delle piante (fiori, corteccia, radici, foglie, frutti etc).<br>
        Possono essere assunti
        <strong><span style="color: #7d2b3b;">per via inalatoria, orale o cutanea</span></strong>.<br>
        La sua funzione è estremamente eterogenea ma molto efficace e combinabile con altre forme di terapia e
        prevenzione.
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
  padding: 2rem;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
  background: rgba(0, 0, 0, 0.35);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.body-1 {
  font-family: Montserrat, Lato, 'Open Sans', Calibri, sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #fff;
}
</style>