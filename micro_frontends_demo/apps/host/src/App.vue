<template>
  <v-app>
    <Header />
    <v-layout>
      <RemoteComponent />
      <v-main class="main-content">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
import { defineAsyncComponent } from "vue";
import { useUserStore } from "@shared/store/user";
const userStore = useUserStore();
userStore.setUser({
  id: "E0873",
  name: "Ava Tsao",
});
const RemoteComponent = defineAsyncComponent(
  () => import("remote/RemoteComponent"),
);
</script>
<style lang="scss" scoped>
.main-content {
  margin-left: 220px; /* 與 RemoteComponent 的寬度一致 */
  padding: 16px;
  flex: 1;
}
</style>
