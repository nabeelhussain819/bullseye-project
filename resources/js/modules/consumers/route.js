// import lib
import {lazy} from 'react'

export default [
    {
        path: '/consumers',
        exact: true,
        auth: true,
        component: lazy(() => import('./pages/list')),
    },

]
