import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/contact", component: () => import("@/views/Contact.vue") },
  { path: "/user-setting", component: () => import("@/views/UserSetting.vue") },
  { path: "/notice", component: () => import("@/views/Notice.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
