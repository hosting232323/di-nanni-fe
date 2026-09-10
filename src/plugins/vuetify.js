import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#7d2636',
          secondary: '#f8d4d9',
          accent: '#a6344c',
          background: '#faeef1'
        }
      }
    }
  },
  defaults: {
    VBtn: { rounded: 'pill' }
  }
});
