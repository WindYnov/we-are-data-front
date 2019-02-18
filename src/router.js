import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Styleguide from "./views/Styleguide.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Sales from "./views/Sales.vue";
import Clients from "./views/Clients.vue";
import PersonalSettings from './views/PersonalSettings.vue';
import Stats from './views/Stats.vue';
import Simulateur from './views/Simulateur.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/styleguide",
      name: "styleguide",
      component: Styleguide
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.weAreDataSession) {
          next('/dashboard/stats');
        }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/dashboard/sales",
      name: "sales",
      component: Sales
    },
    {
      path: "/dashboard/clients",
      name: "clients",
      component: Clients
    },
    {
      path: "/dashboard/personalsettings",
      name: "personalsettings",
      component: PersonalSettings
    },
    {
      path: "/dashboard/stats",
      name: "stats",
      component: Stats
    },
    {
      path: "/dashboard/simulateur",
      name: "simulateur",
      component: Simulateur
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/' && !localStorage.weAreDataSession) {
    next('/');
    return;
  }

  next();
});

export default router;