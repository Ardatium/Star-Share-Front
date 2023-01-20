import { defineStore } from "pinia";
import { login } from "src/services/StarShareUsers";
import { ref } from "vue";

export const useApplicationStore = defineStore("application-store", {
  state: () => ({
    userInformation: ref(),
  }),
  actions: {
    async connectUser(email, pw) {
      try {
        const { data } = await login(email, pw);
        this.userInformation = data;
      } catch (e) {
        console.log(e);
      }
    },
    async logout() {
      this.userInformation = ref();
    },
  },
});
