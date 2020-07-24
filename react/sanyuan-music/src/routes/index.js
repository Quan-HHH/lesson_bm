import React, { lazy, Suspense, Component } from 'react';
import { Redirect } from 'react-router-dom'
import Singer from '../application/Singers'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'
const RecommendComponent = lazy(() => import('../application/Recommend'))
const SingersComponent = lazy(() => import('../application/Singers'))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [
    {
        component: BlankLayout,
        routes: [
            {
                path: '/',
                component: HomeLayout,
                routes: [
                    {
                        path: '/',
                        exact: true,
                        render: () => <Redirect to={'/recommend'} />
                    }, 
                    {
                        path: '/recommend',
                        component: SuspenseComponent(RecommendComponent)
                    }, 
                    {
                        path: '/singers',
                        component: SuspenseComponent(SingersComponent),
                        key: "singers"
                    }, 
                //     {
                //         path: '/rank',
                //         component: RankComponent
                //     }
                ]
            }
        ]
    }
]