import Vue from "vue";
import VueRouter from "vue-router";
import NavBar from "@/components/NavBar.vue";
import StudioNavBar from "@/components/StudioNavBar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      NavBar,
      default: () => import("../views/Home.vue")
    }
  },
  {
    path: "/subscriptions",
    name: "Subscription",
    components: {
      NavBar,
      default: () => import("../views/Subscription.vue")
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/liked-videos",
    name: "LikedVideos",
    components: {
      NavBar,
      default: () => import("../views/LikedVideo.vue")
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/Auth/SignIn.vue"),
    meta: { requiresVisitor: true }
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/Auth/SignUp.vue"),
    meta: { requiresVisitor: true }
  },
  {
    path: "/trending",
    name: "Trending",
    components: {
      NavBar,
      default: () => import("../views/Trending.vue")
    }
  },
  {
    path: "/studio",
    components: {
      StudioNavBar,
      default: () => import("../views/Studio/Index.vue")
    },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Studio/Dashboard.vue")
      },
      {
        path: "videos",
        name: "Video",
        component: () => import("../views/Studio/Video.vue")
      },
      {
        path: "details/:id",
        name: "Detail",
        component: () => import("../views/Studio/Details.vue")
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: "/channels/:id",
    components: {
      NavBar,
      default: () => import("../views/Channel/Index.vue")
    },
    children: [
      {
        path: "/",
        name: "ChannelHome",
        component: () => import("../views/Channel/Home.vue")
      }
    ]
  },
  {
    path: "/watch/:id",
    name: "Watch",
    components: {
      NavBar,
      default: () => import("../views/Watch.vue")
    }
  },
  {
    path: "/history",
    name: "History",
    components: {
      NavBar,
      default: () => import("../views/History.vue")
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/search",
    name: "Search",
    components: {
      NavBar,
      default: () => import("../views/Search.vue")
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else if (
    to.matched.some(record => record.meta.requiresVisitor) &&
    loggedIn
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
