import { Routes } from '@angular/router';

import { GameStats } from './gamestats';
import { Rankings } from './rankings';
import { TeamPlayerStats } from './teamplayerstats';


export default [
    { path: 'rankings', data: { breadcrumb: 'Rankings' }, component: Rankings },
    { path: 'gamestats', data: { breadcrumb: 'GameStats' }, component: GameStats },
    { path: 'teamplayerstats', data: { breadcrumb: 'TeamPlayerStats' },component: TeamPlayerStats },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
