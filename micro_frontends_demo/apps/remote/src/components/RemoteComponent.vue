<template>
  <v-navigation-drawer :width="220">
    <v-list-item :title="userStore.name"></v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <a href="/" class="menu-link">Home</a>
    </v-list-item>
    <v-list-item>
      <a href="/contact" class="menu-link">Contact</a>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useUserStore } from "@shared/store/user";
const userStore = useUserStore();
</script>

<style scoped>
.remote-drawer {
  height: calc(100vh - 60px); /* 假設 Header 高度為 64px */
  position: absolute;
  top: 60px; /* 與 Header 高度一致 */
  left: 0;
  background-color: #fff;
  border-right: 1px solid #ddd;
  z-index: 1;
}
.menu-link {
  text-decoration: none;
  color: inherit;
}
</style>
