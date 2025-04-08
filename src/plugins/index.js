import head from './head';
import pinia from './pinia';
import router from './router';
import vuetify from './vuetify';


export function registerPlugins(app) {
  app.
    use(head).
    use(vuetify).
    use(router).
    use(pinia);
}
