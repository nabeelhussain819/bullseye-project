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
        path: "/survey/create",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/upsert")),
    },
];
