import { defineStore } from "pinia";
import { getUserEquipement } from "src/services/StarShareEquipment";
import { ref } from "vue";

export const useEquipmentStore = defineStore("equipment-store", {
  state: () => ({
    userEquipment: ref(),
    equipments: ref(),
  }),
  actions: {
    async storeUserEquipement(id) {
      try {
        const { data } = await getUserEquipement(id);
        this.userEquipment = data;
      } catch (e) {}
    },
    async storeEquipement() {
      try {
        const { data } = await getUserEquipement();
        this.equipments = data;
      } catch (e) {}
    },
  },
});
