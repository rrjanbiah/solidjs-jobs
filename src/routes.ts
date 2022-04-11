import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from './pages/home';
import Jobs from './pages/jobs';
import Developers from './pages/developers';
import Error404 from './pages/error404';

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/jobs',
        component: Jobs,
    },
    {
        path: '/developers',
        component: Developers,
    },
    {
        path: '/*',
        component: Error404,
    },
];