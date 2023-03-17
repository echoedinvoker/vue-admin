import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutVue from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "", component: LayoutVue },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
