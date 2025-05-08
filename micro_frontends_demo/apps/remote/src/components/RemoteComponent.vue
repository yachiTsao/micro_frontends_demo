<template>
  <v-navigation-drawer :width="220" color="#F0F0F0">
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
.menu-link {
  text-decoration: none;
  color: inherit;
}
</style>
