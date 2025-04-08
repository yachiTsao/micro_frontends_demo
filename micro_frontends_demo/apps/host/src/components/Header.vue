<template>
  <div>
    <v-toolbar color="primary" height="60">
      <v-toolbar-title class="v-text-h3">
        <div class="d-flex align-center">
          <v-img class="mr-4" aspect-ratio="16/9" inline cover></v-img>
          <span class="font-weight-bold"> {{ $t("general.title") }} </span>
        </div>
      </v-toolbar-title>
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab
          v-for="item in items"
          :key="item.value"
          :text="$t(item.title)"
          :value="item.value"
          class="v-text-h3"
        ></v-tab>
      </v-tabs>
      <div class="pr-2">
        <v-btn icon @click="toggleTheme">
          <v-icon>{{
            darkMode ? "mdi-weather-night" : "mdi-weather-sunny"
          }}</v-icon>
        </v-btn>
      </div>
      <div class="d-flex align-center justify-end custom-switch-language">
        <v-icon size="20" class="pr-2">mdi-web</v-icon>
        <v-select
          v-model="lang"
          :items="langOpts"
          item-title="title"
          item-value="value"
          variant="plain"
          density="compact"
          menu-icon=""
          flat
          hide-details
          class="language-list"
        >
          <template v-slot:item="{ props }">
            <v-list-item
              v-bind="props"
              active-class="bg-primary"
              rounded
            ></v-list-item>
          </template>
        </v-select>
      </div>
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, reactive, watch, onMounted } from "vue";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
let { locale } = useI18n();
let tab = ref(localStorage.getItem("tab") ?? "home");
const route = useRoute();
const items = [
  {
    title: "general.home",
    value: "home",
    path: "/home",
  },
  {
    title: "general.listTitle",
    value: "list",
    path: "/list",
  },
  {
    title: "general.overviewTitle",
    value: "overview",
    path: "/overview",
  },
  {
    title: "general.contactTitle",
    value: "contact",
    path: "/contact",
  },
];
const authStore = useAuthStore();
const { lang: authLang, theme: authTheme } = storeToRefs(authStore);
let lang = ref(authLang);
let theme = useTheme();
let themeMode = ref(authTheme);
let darkMode = themeMode.value === "Dark";
const langOpts = reactive([
  { value: "en-US", title: "English" },
  { value: "zh-TW", title: "中文(繁體)" },
  { value: "zh-CN", title: "中文(簡體)" },
]);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "lightTheme"
    : "darkTheme";
  darkMode = theme.global.name.value === "darkTheme";
  authTheme.value = darkMode ? "Dark" : "Light";
  localStorage.setItem("theme", darkMode ? "Dark" : "Light");
}
function initTab() {
  tab.value = localStorage.getItem("tab") ?? "home";
}
watch(
  lang,
  (newVal) => {
    authLang.value = newVal;
    localStorage.setItem("lang", newVal);
    locale.value = lang.value ? lang.value : newVal;
  },
  {
    immediate: true,
  },
);
watch(
  tab,
  (newVal) => {
    if (newVal && newVal !== "") {
      router.push(`/${newVal}`);
      localStorage.setItem("tab", newVal.toLowerCase());
    }
  },
  { immediate: true },
);
onMounted(() => {
  initTab();
  theme.global.name.value =
    themeMode.value === "Dark" ? "darkTheme" : "lightTheme";
});
</script>
<style lang="scss" scoped>
.language-list .v-field__input {
  padding: 0 0 0 4px;
}
.language-list .v-field {
  color: rgb(var(--v-theme-gray-20));
}
.language-list .v-field--appended {
  --v-field-padding-end: 0;
  padding-inline-end: 0;
}
.v-input--density-compact {
  --v-input-padding-top: 0 !important;
}
.custom-switch-language {
  min-width: 8vw;
}
.v-btn.v-btn--density-default {
  height: 48px;
}
</style>