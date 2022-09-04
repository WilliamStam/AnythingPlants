import {createWebHistory, createRouter} from "vue-router";


// import Error from "@/routes/error.routes";


const routes = [


    {
        path: "/",
        name: "home",
        meta: {
            title: "Welcome to AnythingPlants"
        },
         component: () =>
                    import('../views/HomeView.vue'),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "error.404",
        meta: {
            title: "Not Found"
        },
        component: () => import("../views/errors/404View.vue"),
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const title = to.meta && to.meta.title ? to.meta.title : '';
    const titlePrefix = to.meta && to.meta.titlePrefix ? to.meta.titlePrefix + " - " : '';
    (window as any).document.title = titlePrefix + title;

})

export default router;