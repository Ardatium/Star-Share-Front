<template>
  <q-page class="flex flex-center">
    <!--<img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >-->
    <div class="container">
      <MapLeaf />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MapLeaf from "src/components/MapLeaf.vue";
export default defineComponent({
  name: "IndexPage",
});
</script>
<style scoped>
.container {
  display: block;
  min-height: 90vh;
  min-width: 90vh;
}
</style>
