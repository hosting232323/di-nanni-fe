import { createHttpClient } from 'generic-module';
import router from '@/plugins/router';


const hostname = import.meta.env.VITE_HOSTNAME;


const client = createHttpClient({
  hostname,
  authHeader: 'Authorization',
  router,
  getToken: () => localStorage.getItem('token'),
  onSessionExpired: () => {
    alert('Sessione scaduta');
    router.push('/');
  }
});


export default {
  ...client
};
