<template>
  <EquipmentList />
  <SessionList />
  {{ loggedUser }}
</template>

<script setup>
import EquipmentList from "./list/EquipmentList.vue";
import SessionList from "./list/SessionList.vue";
import { useApplicationStore } from "src/stores/application-store";
import { computed } from "vue";

const applicationStore = useApplicationStore();
const loggedUser = computed(() => applicationStore.userInformation);
/*
export default {
  name: "DashboardDrawer",
  setup() {

    return {};
  },
  components: { EquipmentList, SessionList },
};
*/
</script>
