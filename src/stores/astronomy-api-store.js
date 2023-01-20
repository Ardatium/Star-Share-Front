import { defineStore } from "pinia";
import { celestialSearch } from "src/services/AstronomyApiCall";
import { ref } from "vue";

export const useAstronomyStore = defineStore("celestial-search", {
  state: () => ({
    celestialList: ref(),
  }),

  actions: {
    async celestialSearch(term) {
      try {
        const { data } = await celestialSearch(term);
        this.celestialList = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
