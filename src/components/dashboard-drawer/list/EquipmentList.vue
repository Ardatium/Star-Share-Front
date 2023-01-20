<template>
  <div class="body">
    <div class="content">
      <EquipmentItem v-for="index in equipementsList" :key="index" />
    </div>
  </div>
</template>

<script setup>
import { useEquipmentStore } from "src/stores/star-share-equipment-store";
import { computed } from "vue";
import { useApplicationStore } from "src/stores/application-store";

const applicationStore = useApplicationStore();
const loggedUser = computed(() => applicationStore.userInformation);

const equipmentStore = useEquipmentStore();
equipmentStore.storeUserEquipement(loggedUser);
equipmentStore.storeEquipement();
const userEquipement = computed(() => equipmentStore.userEquipment);

const equipementList = computed(() => equipmentStore.equipments);
</script>
<style scoped>
.body {
  border: 1px solid #dddddd;
  background-color: #dddddd;

  border-radius: 10px;

  margin: 10px;
  padding: 10px;
}
</style>
