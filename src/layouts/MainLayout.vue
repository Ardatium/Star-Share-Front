<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleDashboardDrawer"
          />
          <q-btn dense flat icon="home" round @click="goHome()" />
          <q-btn
            dense
            flat
            icon="search"
            label="Rechercher astres"
            round
            @click="goToSearch()"
          />
        </div>
        <q-toolbar-title> Star Share </q-toolbar-title>
        <!--<div>Quasar v{{ $q.version }}</div>-->
        <q-btn
          flat
          dense
          round
          icon="person"
          aria-label="Account"
          @click="toggleUserDialog"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="dashboardDrawerOpen" show-if-above bordered>
      <DashboardDrawer />
    </q-drawer>

    <q-dialog v-model="userDialogOpen">
      <UserSignInDialog />
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DashboardDrawer from "src/components/dashboard-drawer/DashboardDrawer.vue";
import UserSignInDialog from "src/components/user-dialog/UserSignInDialog.vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const dashboardDrawerOpen = ref(false);
    const userDialogOpen = ref(false);
    const route = useRoute();
    const router = useRouter();
    return {
      dashboardDrawerOpen,
      userDialogOpen,
      toggleDashboardDrawer() {
        dashboardDrawerOpen.value = !dashboardDrawerOpen.value;
      },
      toggleUserDialog() {
        userDialogOpen.value = !userDialogOpen.value;
      },
      goToSearch() {
        console.log("Going to search");
        router.replace(`/search`);
      },
      goHome() {
        console.log("Going home");
        router.replace(`/`);
      },
    };
  },
  components: { DashboardDrawer, UserSignInDialog },
});
</script>
