<template>
  <v-container class="padding-fix">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="4" md="4" :class="['d-flex', 'justify-center', 'flex-column', { 'align-center': isMobile }]">
          <p class="d-flex align-center" style="margin-bottom: 20px; width: 250px;">
            <span class="mdi mdi-map-marker-outline icon"></span>
            Via Curzio 13, 70123 Bari
          </p>
          <p class="d-flex align-center" style="margin-bottom: 20px; width: 250px;">
            <span class="mdi mdi-calendar-blank-outline icon"></span>
            <span>Dal <strong>lunedì</strong> al <strong>sabato</strong><br><i>solo su appuntamento</i></span>
          </p>
          <div style="width: 250px;">
            <p class="d-flex align-center">
              <span class="mdi mdi-information-outline icon"></span>
              Per info e prenotazioni:
            </p>
            <ul>
              <li>
                <span class="mdi mdi-phone-outline icon"></span><a href="tel:+390801234567"><i>Chiamami</i></a>
              </li>
              <li>
                <span class="mdi mdi-whatsapp icon"></span><a href=""><i>Scrivimi su Whatsapp</i></a>
              </li>
              <li>
                <span class="mdi mdi-pencil-outline icon"></span><a href=""><i>Compila il form</i></a>
              </li>
            </ul>
          </div>
          <div class="d-flex justify-center">
            <a href=""><span class="mdi mdi-instagram social"></span></a>
            <a href=""><span class="mdi mdi-facebook social"></span></a>
          </div>
      </v-col>
      <v-col cols="12" sm="6"  md="8">
        <v-card>
          <v-container style="padding: 6px;">
            <div ref="mapContainer" style="width: 100%; height: 400px;" />
              <div ref="popupContainer" class="ol-popup">
              <v-icon icon="mdi-window-close" class="popup-close-btn" @click="closePopup"/>
              <div ref="popupContent" class="d-flex flex-column align-start" >
                <v-img :src="logo" width="110" height="auto" object-fit style="margin-bottom: 10px;"/>
                <p style="font-size: 13px;" class="mb-1">Via Curzio 13, 70123 Bari</p>
                <a :href="link" target="_blank" rel="noopener noreferrer" class="nav" style="color: #7d2636;">
                  <v-icon icon="mdi-directions"  style="font-size: 16px;" class="mr-1"/>
                  Navigazione
                </a>
              </div>
              <div class="ol-popup-arrow"></div>
            </div>
          </v-container>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { onMounted, ref } from 'vue';
import TileLayer from 'ol/layer/Tile';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import mobile from '@/utils/mobile';
import Overlay from 'ol/Overlay';

import logo from '@/assets/logo.png';

const isMobile = mobile.setupMobileUtils();
const link = `https://www.google.com/maps/search/?api=1&query=41.1153,16.8683`

const mapContainer = ref(null);
let popupContainer = ref(null);
let overlay;
let map;

onMounted(() => {
  const iconFeature = new Feature({
    geometry: new Point(fromLonLat([16.8683, 41.1153]))
  });

  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 1],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: 'image.png',
      scale: 1
    })
  });

  iconFeature.setStyle(iconStyle);

  const vectorSource = new VectorSource({
    features: [iconFeature]
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource
  });

  map = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      vectorLayer
    ],
    view: new View({
      center: fromLonLat([16.8683, 41.1153]),
      zoom: 15
    })
  });

  overlay = new Overlay({
    element: popupContainer.value,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    },
    positioning: 'bottom-center',
    offset: [0, -175]
  });

  map.addOverlay(overlay);

  map.on('singleclick', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });

    if (feature === iconFeature) {
      const coordinate = feature.getGeometry().getCoordinates();
      overlay.setPosition(coordinate);
    } else {
      overlay.setPosition(undefined);
    }
  });
});


function closePopup() {
  overlay.setPosition(undefined);
}
</script>

<style scoped>
.icon {
  font-size: 24px; 
  margin-right: 10px;
}
.social{
  font-size: 50px;
  margin: 0 20px;
  color: #9a3548;
  transition: color 0.3s ease;
}
.social:hover {
  color: #ff3366;
}

ul {
  padding: 0 30px; 
  list-style: none;
}
ul li {
  margin-bottom: 5px;
}
ul li a {
  color: #9a3548;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
}
.ol-popup {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 8px 12px;
  min-width: 220px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, .2);
  pointer-events: auto;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 14px;
  text-align: center;
  user-select: none;
  z-index: 1000;
}

.ol-popup-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1));
  z-index: 1001;
}

.popup-close-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  color: #999;
  transition: color 0.2s;
  z-index: 1002;
}

.popup-close-btn:hover {
  color: #333;
}
</style>