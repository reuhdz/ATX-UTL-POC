import { Routes } from '@angular/router';

import { ActivePlayers } from './activeplayers';


export default [
    { path: 'activeplayers', data: { breadcrumb: 'ActivePlayers' }, component: ActivePlayers },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
