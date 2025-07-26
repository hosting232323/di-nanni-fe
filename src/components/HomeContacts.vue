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

const isMobile = mobile.setupMobileUtils();

const mapContainer = ref(null);

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
});
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
</style>