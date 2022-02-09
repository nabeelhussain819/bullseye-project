// import lib
import { lazy } from "react";

export default [
    {
        path: "/survey",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/list")),
    },
];
