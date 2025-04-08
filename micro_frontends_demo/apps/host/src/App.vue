<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
</script>
<!-- <style lang="scss" src="./styles/App.scss"></style> -->