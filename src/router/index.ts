import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  //   {
  //     path: "/",
  //     redirect: "/tabs/tab1",
  //   },

  {
    path: "/start",
    component: () => import("@/views/Start.vue"),
    name: "Start",
  },
  {
    path: "/tabs/:id",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
        name: "Tab1",
      },
      {
        path: "tab1/view1",
        component: () => import("@/views/Tab1PageView1.vue"),
        name: "Tab1View1",
      },
      {
        path: "tab1/view2",
        component: () => import("@/views/Tab1PageView2.vue"),
        name: "Tab1View2",
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
        name: "Tab2",
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
        name: "Tab3",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
