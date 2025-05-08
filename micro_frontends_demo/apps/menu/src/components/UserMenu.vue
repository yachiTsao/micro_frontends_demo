<template>
  <v-menu
    :value="localMenuOpen"
    :close-on-content-click="false"
    location="bottom"
    :offset="16"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        density="comfortable"
        class="px-2 mr-4"
        @click="localMenuOpen = !localMenuOpen"
      >
        {{ userStore.name }}
      </v-btn>
    </template>
    <v-sheet color="#627D97">
      <v-list-item>
        <a href="/user-setting" class="menu-link">
          <v-icon>mdi-account-cog-outline</v-icon>
          <span class="ps-2">User Setting</span>
        </a>
      </v-list-item>
      <v-list-item>
        <a href="/notice" class="menu-link">
          <v-icon>mdi-bell-outline</v-icon>
          <span class="ps-2">Notice</span>
        </a>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <a href="/" class="menu-link">
          <v-icon>mdi-logout-variant</v-icon>
          <span class="ps-2">Logout</span>
        </a>
      </v-list-item>
    </v-sheet>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useUserStore } from "@shared/store/user";

const userStore = useUserStore();
const localMenuOpen = ref(true); // 本地菜單開關狀態
</script>

<style scoped>
.menu-link {
  text-decoration: none;
  color: inherit;
}
</style>
