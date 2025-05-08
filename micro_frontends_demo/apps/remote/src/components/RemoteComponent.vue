<template>
  <v-navigation-drawer :width="220" color="#F0F0F0">
    <v-list-item :title="userStore.name"></v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <a href="/" class="menu-link">
        <v-icon>mdi-home-outline</v-icon>
        <p class="ps-2 d-flex algin-center">Home</p>
      </a>
    </v-list-item>
    <v-list-item>
      <a href="/contact" class="menu-link">
        <v-icon>mdi-contacts-outline</v-icon>
        <p class="ps-2 d-flex algin-center">Contact</p>
      </a>
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
  display: flex;
}
</style>
