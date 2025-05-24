<template>
    <v-container>
      <v-card elevation="10" class="pa-4">
      <v-row>
        <v-col cols="12" md="4">
            <h3>Informazioni</h3>
            <p><strong>Indirizzo:</strong> Via Roma 123, Bari</p>
            <p><strong>Giornate di lavoro:</strong> Lun-Ven, 9:00 - 18:00</p>
            <p><strong>Telefono:</strong> +39 080 1234567</p>
        </v-col>
        <v-col cols="12" md="8">
            <div ref="mapContainer" style="width: 500px; height: 500px;" />
        </v-col>
      </v-row>
        </v-card>
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
import { onMounted, ref, reactive } from 'vue';
import TileLayer from 'ol/layer/Tile';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

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
      src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      scale: 0.1
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
      zoom: 12
    })
  });
});
</script>
