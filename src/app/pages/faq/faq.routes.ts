import { Routes } from '@angular/router';

import { RookieLeague } from './rookieleague';
import { GenUtlRules} from './genutlrules';
import { ProLeague } from './proleague';
import { LeagueNights } from './leaguenights';
import { UtlFootage } from './utlfootage';


export default [
    { path: 'generalutlrules', data: { breadcrumb: 'GeneralUtlRules' }, component: GenUtlRules },
    { path: 'leaguenights', data: { breadcrumb: 'LeagueNights' }, component: LeagueNights },
    { path: 'proleague', data: { breadcrumb: 'ProLeague' },component: ProLeague },
    { path: 'rookieleague', data: { breadcrumb: 'RookieLeague' },component: RookieLeague },
    { path: 'utlfootage', data: { breadcrumb: 'UtlFootage' },component: UtlFootage },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
