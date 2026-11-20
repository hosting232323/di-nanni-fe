import { ref, onMounted, onBeforeUnmount } from 'vue';


// Valore corretto gia' al primo render: evita di montare (e scaricare) le immagini desktop su mobile.
const isMobile = ref(typeof window !== 'undefined' && window.innerWidth < 600);


const checkMobile = () => {
  isMobile.value = window.innerWidth < 600;
};


const setupMobileUtils = () => {
  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile);
  });
  return isMobile;
};


export default {
  setupMobileUtils
};
