<template>
  <a
    class="booking-fab"
    href="https://www.miodottore.it/profilo/doriana-donatella-di-nanni?utm_source=widget-null&utm_medium=link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Prenota una visita su Miodottore"
  >
    <span class="booking-fab-label">Prenota una visita</span>
    <span class="booking-fab-icon">
      <span class="mdi mdi-calendar-check"></span>
    </span>
  </a>
</template>

<style scoped>
.booking-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 98;
  display: flex;
  align-items: center;
  height: 64px;
  background: #ffffff;
  color: #7d2636;
  border: 1px solid rgba(125, 38, 54, 0.28);
  border-radius: 999px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(125, 38, 54, 0.35);
  transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  animation: booking-pulse 4s ease infinite;
}

.booking-fab:hover,
.booking-fab:focus-visible {
  background: #7d2636;
  color: #fff;
  box-shadow: 0 8px 26px rgba(125, 38, 54, 0.45);
  animation: none;
}

.booking-fab-label {
  display: inline-block;
  max-width: 0;
  margin-left: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  font-style: italic;
  letter-spacing: 0.3px;
  transition: max-width 0.35s ease, margin-left 0.35s ease, opacity 0.3s ease;
}

.booking-fab:hover .booking-fab-label,
.booking-fab:focus-visible .booking-fab-label {
  max-width: 200px;
  margin-left: 14px;
  opacity: 1;
}

.booking-fab-icon {
  flex: 0 0 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking-fab-icon .mdi {
  font-size: 28px;
}

@keyframes booking-pulse {
  0%, 100% {
    box-shadow: 0 5px 20px rgba(125, 38, 54, 0.35), 0 0 0 0 rgba(125, 38, 54, 0.35);
  }
  50% {
    box-shadow: 0 5px 20px rgba(125, 38, 54, 0.35), 0 0 0 14px rgba(125, 38, 54, 0);
  }
}

@media screen and (max-width: 768px) {
  .booking-fab {
    bottom: 15px;
    right: 15px;
    height: 60px;
  }

  .booking-fab-icon {
    flex: 0 0 60px;
    height: 60px;
  }

  .booking-fab-icon .mdi {
    font-size: 26px;
  }

  .booking-fab-label {
    display: none;
  }
}
</style>
