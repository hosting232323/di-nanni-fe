<template>
  <v-app-bar v-if="isMobile" elevation="0" class="custom-appbar">
    <v-container class="d-flex align-center justify-space-between">
      <v-btn icon @click="drawer = !drawer" style="color: #fff !important;">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="" height="45" />
      </router-link>
    </v-container>
  </v-app-bar>
  <v-app-bar v-else elevation="0" class="custom-appbar">
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
import { ref } from 'vue';
import mobile from '@/utils/mobile';

const drawer = ref(false);
const isMobile = mobile.setupMobileUtils();
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
  background: linear-gradient(to right, #f8d4d9 0%, #f8d4d9 20%, #7d2636 50%, #7d2636 100%) !important;
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
}

.nav-item:hover {
  text-decoration: underline;
}

.logo-link {
  text-decoration: none;
  position: relative;
  padding: 10px;
}
.mobile-drawer {
  background-color: #7D2636 !important;
}

.menu-container {
  text-align: center;
}

.submenu-list {
  background-color: #7D2636 !important;
}

.submenu-item {
  font-size: 14px;
  font-style: italic;
  color: white !important;
}

.submenu-item:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
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
}

:deep(.v-list-item) {
  color: white !important;
}

:deep(.v-list-item:hover) {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

:deep(.v-list-group__items) {
  background-color: rgba(255, 255, 255, 0.1) !important;
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
    background: linear-gradient(to left, #f8d4d9 0%, #f8d4d9 20%, #7d2636 50%, #7d2636 100%) !important;
  }
}
</style>
