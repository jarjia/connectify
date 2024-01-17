import { createRouter, createWebHashHistory } from "vue-router";
import { Login, Register } from "./pages";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: () => {
        return "register";
      },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
