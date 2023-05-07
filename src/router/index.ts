import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ActiveView from "../views/ActiveView.vue";
import ClearView from "../views/ClearView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "active",
    component: ActiveView,
  },
  {
    path: "/clear",
    name: "clear",
    component: ClearView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
