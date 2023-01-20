import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserSession, createSession } from "src/services/StarShareSession";

export const useSessionStore = defineStore("session-store", {
  state: () => ({
    userSessions: ref(),
    sessions: ref(),
  }),
  actions: {
    async storeUserSession(id) {
      try {
        const { data } = await getUserSession(id);
        this.userSessions = data;
      } catch (e) {}
    },
    async storeSession() {
      try {
        const { data } = await getAllSession();
        this.equipments = data;
      } catch (e) {}
    },
  },
});
