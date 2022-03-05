// import lib
import { lazy } from "react";

export default [
    {
        path: "/consumers",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/list")),
    },
    {
        path: "/consumer/view/:id",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/view")),
    },
    {
        path: "/consumers/create",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/add")),
    },
];
