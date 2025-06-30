import { Injectable } from '@angular/core';
    
@Injectable()
export class SeasonDataService {
    getSeasonTeamRecords() {
        return [
            {
                id: '1000',
                name: 'Makos',
                image: '',
                rating: .5,
                record: '1-1',
                ranking: '1st',
                captain: 'Reuben',
                nextGame: 'vs. Legions'
            },
            {
                id: '1000',
                name: 'Chlorine Crocs',
                image: '',
                rating: .5,
                record: '1-1',
                ranking: '2nd',
                captain: 'Sage',
                nextGame: 'vs. Carp'
            },
        ];
    }

    getOverallPlayerStats() {
        return [
            {
                id: '1000',
                name: 'Reuben',
                team: 'Makos',
                goals: 1,
                steals: 0,
                assist: 1,
                blocks:2,
                turnOvers:1,
                ranking: '--',
            },
            {
                id: '1000',
                name: 'Sage',
                team: 'Chlorine Crocs',
                goals: 2,
                steals: 2,
                assist: 0,
                blocks:0,
                turnOvers:1,
                ranking: '--',
            },
        ];
    }    
};