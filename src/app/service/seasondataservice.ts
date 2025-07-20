import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as XLSX from 'xlsx';
    
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

    getGameStats() {
        return [
            {
                id: '1000',
                homeTeam: 'Crocs',
                awayTeam: 'Makos',
                score: '5-3',
                weekWinner: 'Makos',
                match:1,
                gameLinks:'https://app.box.com/s/0m47wjjipzh7vy9g5f9xvpyb8zvz3au4',
                teamStats: [
                    {
                        goals: 'Makos:5 | Crocs: 4',
                        steals: 'Makos:5 | Crocs: 4',
                        assist: 'Makos:1 | Crocs: 1',
                        blocks:'Makos:6 | Crocs: 5',
                        turnOvers:'Makos:7 | Crocs: 9'
                    }
                ],
                clips: [
                    {
                        goals: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        steals: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        assist: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        blocks:'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        turnOvers:'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302'
                    }
                ]
            },
            {
                id: '1001',
                homeTeam: 'Crocs',
                awayTeam: 'Makos',
                score: '5-0',
                weekWinner: 'Makos',
                match:2,
                gameLinks:'https://app.box.com/s/0m47wjjipzh7vy9g5f9xvpyb8zvz3au4',
                teamStats: [
                    {
                        goals: 'Makos:1 | Crocs: 6',
                        steals: 'Makos:6 | Crocs: 4',
                        assist: 'Makos:1 | Crocs: 1',
                        blocks:'Makos:1 | Crocs: 4',
                        turnOvers:'Makos:7 | Crocs: 0'
                    }
                ],
                clips: [
                    {
                        goals: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        steals: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        assist: 'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        blocks:'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302',
                        turnOvers:'TO:GX010311, TO:GX010310, TO:GX010300, Stl:GX010301, Ast:GX010302'
                    }
                ]
            },
        ];
    }

    getHighlights() {
        return [
            {
                id: '1000',
                name: 'Reuben',
                team: 'Makos',
                goals: '1',
                steals: '0',
                assist: '1',
                blocks:'2',
                turnOvers:'1',
                week: '2',
            },
            {
                id: '1000',
                name: 'Sage',
                team: 'Crocs',
                goals: '1',
                steals: '0',
                assist: '1',
                blocks:'2',
                turnOvers:'1',
                week: '2',
            },
        ];
    }
    //TODO: Rankings
    //TODO: Player overall stats
    //TODO: Match data
    constructor(private http: HttpClient) {}

    season1Ranking: any[] = [];
    public data: any[]=[];
    filePath = './assets/season1Data.xlsx'; 
   
    getTeamRankings() {
        // this.season1Ranking = this.parseData(0);
        // console.log(this.readFile(this.filePath))
    }
};