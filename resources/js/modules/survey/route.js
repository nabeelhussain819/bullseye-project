// import lib
import { lazy } from "react";

export default [
    {
        path: "/survey",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/list")),
    },
    {
        path: "/survey/claims/:id",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/view")),
    },
    {
        path: "/survey/create",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/upsert")),
    },
];
