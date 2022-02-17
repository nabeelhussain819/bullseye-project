// import lib
import { lazy } from "react";

export default [
    {
        path: "/claims",
        exact: true,
        auth: true,
        component: lazy(() => import("./pages/list")),
    },
];
