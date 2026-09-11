import { ref } from 'vue';

// Stato UI condiviso tra layout e viste: il drawer del menu mobile
// (AppBar) viene letto anche dal logo grande della home (FullScreenLanding),
// che deve nascondersi quando il menu e' aperto.
export const drawerOpen = ref(false);
