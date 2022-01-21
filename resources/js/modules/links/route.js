// import lib
import {lazy} from 'react'

export default [
    {
        path: '/links',
        exact: true,
        auth: true,
        component: lazy(() => import('./pages/list')),
    },

]
