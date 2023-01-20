<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Se connecter</div>
    </q-card-section>
    <q-card-section class="q-pt-none custom">
      <div>
        <input v-model="email" type="text" placeholder="example@email.com" />
      </div>
      <div>
        <input v-model="pw" stack-label type="password" label="Mot de passe" />
      </div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn color="primary" @click="login(email, pw)" v-close-popup>
        Connection
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { useApplicationStore } from "src/stores/application-store";
import { computed } from "vue";

export default {
  name: "UserSignInDialog",
  setup() {
    return {};
  },
  methods: {
    login(email, pw) {
      console.log(email, pw);
      const applicationStore = useApplicationStore();
      applicationStore.connectUser(email, pw);
    },
  },
};
</script>
<style>
.custom {
  display: block;
}
</style>
