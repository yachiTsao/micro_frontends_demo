<template>
  <v-toolbar color="#003A70" height="60">
    <v-toolbar-title class="v-text-h3">
      <span class="font-weight-bold">Micro Frontends</span>
    </v-toolbar-title>
    <UserMenu />
  </v-toolbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const UserMenu = defineAsyncComponent(() => import("userMenu/Component"));
</script>

<style lang="scss" scoped>
.v-toolbar-title {
  display: flex;
  align-items: center;
}
</style>
