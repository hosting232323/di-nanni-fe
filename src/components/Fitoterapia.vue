<template>
  <div class="section">
    <video autoplay loop muted src="@/assets/fitoterapia.mp4" class="media" />

    <div class="overlay">
      <h1 class="title">La Fitoterapia</h1>
      <p class="body-1">
        I medicinali fitoterapici sono definiti tali se il principio attivo è una sostanza vegetale; sono formati da una
        miscela di sostanze vegetali biologicamente attive.
        Sono utilizzati <strong><span style="color: #7d2b3b;">per fini terapeutici e preventivi</span></strong>.<br>
        Non sono sostanze innocue ma bisogna tenere in considerazione eventuali interazioni con farmaci che si assumono
        con regolarità ed eventuali effetti indesiderati.<br>
        I fitoterapici possono essere assunti comunemente sotto forma di <strong><span style="color: #7d2b3b;">compresse
            o capsule, oppure gocce</span></strong>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  height: calc(100vh - 64px);
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
  /* padding: 0 100px; */
}
</style>
