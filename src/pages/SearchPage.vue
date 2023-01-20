<template>
  <div class="q-pa-md">
    <q-input
      v-model="term"
      label="Trouvez un astre"
      placeholder="Rechercher..."
    >
      <template v-slot:append>
        <q-icon
          v-if="term !== ''"
          name="close"
          @click="term = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" @click="searchCelestialBodies(term)" />
      </template>
    </q-input>
    <SearchItem
      v-for="(object, index) in result"
      :key="index"
      :type="object.type.name"
      :name="object.name"
    ></SearchItem>
  </div>
</template>

<script setup>
import SearchItem from "components/astronomy-api/SearchItem.vue";
import { useAstronomyStore } from "src/stores/astronomy-api-store";
import { ref, computed } from "vue";

const celestialStore = useAstronomyStore();
const result = computed(() => celestialStore.celestialList);

function searchCelestialBodies(term) {
  celestialStore.celestialSearch(term);
}
</script>
<style>
q-input {
  margin: 5px;
}
</style>
