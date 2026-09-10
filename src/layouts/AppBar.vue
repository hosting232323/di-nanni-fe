<template>
  <v-app-bar v-if="isMobile" elevation="0" :class="['custom-appbar', { 'appbar--fused': fused }]">
    <v-container class="d-flex align-center justify-space-between">
      <v-btn icon class="menu-btn" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="" height="45" />
      </router-link>
    </v-container>
  </v-app-bar>
  <v-app-bar v-else elevation="0" :class="['custom-appbar', { 'appbar--fused': fused }]">
    <div class="left-section d-flex align-center">
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="" height="55"/>
      </router-link>
    </div>
    <div class="right-section">
      <v-container class="d-flex align-center justify-space-between">
        <v-spacer />
        <nav class="nav-links">
          <v-menu
            v-for="item in menuItems"
            open-on-hover
            transition="slide-y-transition"
            class="menu-container"
          >
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" class="nav-item" :to="item.route">
                <i>{{ item.text }}</i>
                <v-icon v-if="item.submenu && item.submenu.length > 0" size="16">
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>
            <v-list v-if="item.submenu && item.submenu.length > 0" class="submenu-list">
              <v-list-item
                v-for="(subItem, subIndex) in item.submenu"
                :key="subIndex"
                :to="subItem.route"
                class="submenu-item"
              >
                <v-list-item-title>{{ subItem.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </nav>
      </v-container>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    app
    left
    temporary
    class="mobile-drawer"
  >
    <v-list>
      <template v-for="(item, index) in menuItems" :key="index">
        <v-list-item 
          v-if="!item.submenu?.length"
          :to="item.route"
          :value="item.text"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
        <v-list-group v-else :value="item.text">
          <template v-slot:activator="{ props }">
            <v-list-item 
              v-bind="props"
              :to="item.route"
              :value="item.text"
              link
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(subItem, subIndex) in item.submenu"
            :key="subIndex"
            :to="subItem.route"
            :value="subItem.text"
          >
            <v-list-item-title>{{ subItem.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import mobile from '@/utils/mobile';

const drawer = ref(false);
const isMobile = mobile.setupMobileUtils();
const route = useRoute();

const scrolled = ref(false);
const onScroll = () => { scrolled.value = window.scrollY > 40; };

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

// In home, prima dello scroll, il logo nella app bar e' nascosto
// (il logo grande e' gia' nell'hero); riappare solo quando si scrolla.
const fused = computed(() => route.path === '/' && !scrolled.value);
const menuItems = [
  {
    text: 'Trattamenti',
    submenu: [
      { text: 'Agopuntura', route: '/trattamenti/agopuntura' },
      { text: 'Fitoterapia e Aromaterapia', route: '/trattamenti/fitoterapia-aromaterapia' },
      { text: 'Taopatch', route: '/trattamenti/taopatch' },
      { text: 'Sobada e Rebozo', route: '/trattamenti/sobada-rebozo' },
      { text: 'Tecniche complementari', route: '/trattamenti/tecniche-complementari' }
    ]
  },
  {
    text: 'Scopri chi sono',
    route: '/chi-sono'
  },
  {
    text: 'Contattami',
    route: '/contatti'
  },
  /*
  {
    text: 'Blog',
    route: '/blog'
  }
  */
]
</script>

<style scoped>
.custom-appbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px !important;
  background: linear-gradient(62deg, #f8d4d9 0%, #f8d4d9 42%, #7d2636 46%, #7d2636 100%) !important;
  box-shadow: 0 2px 18px rgba(90, 27, 41, 0.22);
}

.custom-appbar .left-section {
  width: 30%;
  height: 100%;
  position: relative;
  padding: 64px;
}

.custom-appbar .right-section {
  width: 70%;
  height: 100%;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-right: 2rem;
}

.nav-item {
  color: white !important;
  font-size: 16px;
  font-style: italic;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: color 0.25s ease;
}

.menu-btn {
  color: #fff !important;
  transition: color 0.25s ease;
}

.nav-item i {
  position: relative;
  font-style: italic;
}

.nav-item i::after {
  content: '';
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: -5px;
  height: 2px;
  border-radius: 2px;
  background: #f8d4d9;
  transition: left 0.3s ease, right 0.3s ease;
}

.nav-item:hover i::after,
.nav-item.v-btn--active i::after {
  left: 0;
  right: 0;
}

.nav-item:hover,
.nav-item.v-btn--active {
  color: #f8d4d9 !important;
}

.logo-link {
  text-decoration: none;
  position: relative;
  padding: 10px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.logo-link img {
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.18));
  transition: transform 0.3s ease;
}

.logo-link:hover img {
  transform: scale(1.04);
}

.mobile-drawer {
  background-color: #7D2636 !important;
}

.menu-container {
  text-align: center;
}

.submenu-list {
  background-color: #7D2636 !important;
  border-radius: 14px !important;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22) !important;
  padding: 6px 0;
}

.submenu-item {
  font-size: 14px;
  font-style: italic;
  color: white !important;
  min-height: 42px;
  transition: background-color 0.2s ease, padding-left 0.2s ease;
}

.submenu-item:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  padding-left: 20px;
}

:deep(.v-list-item-title) {
  color: white !important;
}

.v-navigation-drawer {
  background-color: #7D2636 !important;
}

:deep(.v-list) {
  background-color: #7D2636 !important;
  color: white !important;
  padding: 10px 8px;
}

:deep(.v-list-item) {
  color: white !important;
  border-radius: 12px;
  margin-bottom: 4px;
  transition: background-color 0.2s ease;
}

:deep(.v-list-item:hover) {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

:deep(.v-list-group__items) {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px;
  margin-bottom: 4px;
}

:deep(.v-list-group__header) {
  color: white !important;
}

:deep(.v-list-item--active) {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

:deep(.v-list-group__header.v-list-item--active) {
  background-color: transparent !important;
}

@media screen and (max-width: 599px) {
  .custom-appbar {
    background: linear-gradient(300deg, #f8d4d9 0%, #f8d4d9 70%, #7d2636 76%, #7d2636 100%) !important;
  }
}

/* Solo home, prima dello scroll: logo nascosto (il logo grande
   e' gia' nell'hero). Sfondo e testi della app bar restano sempre scuri. */
.appbar--fused .logo-link {
  opacity: 0;
  transform: scale(0.92);
  pointer-events: none;
}
</style>
