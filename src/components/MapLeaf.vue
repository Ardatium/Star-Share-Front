<template>
  <l-map ref="map" style="height: 50vh">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from "vue";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  setup() {
    const map = ref(null); // access ref...important

    onMounted(async () => {
      const { marker } = await import("leaflet/dist/leaflet-src.esm"); // import example
      // create a marker and add to map Object usin
      marker([0, 0]).addTo(map.value.leafletObject); // access leaflet object and use some properties
    });

    return { map }; // expose map ref
  },
};
</script>

<style>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
