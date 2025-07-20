import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

export interface SeasonData {
    roster: any[];
}
export class Season1Data {
    
}

    
@Injectable({ providedIn: 'root'})
export class SeasonDataService {

    // BehaviorSubject holds the latest array of Player data
    private seasonData = new BehaviorSubject<SeasonData>({roster: []});
    public readonly seasonData$: Observable<SeasonData> = this.seasonData.asObservable();
    
    season1Ranking: any[] = [];
    public data: any[]=[];
    jsonData: any[] = [];

    constructor(private http: HttpClient) {
        this.loadExcelFromAssets('assets/UTL Season 1 Stats.xlsx');
    }

    private loadExcelFromAssets(url: string): void {
    this.http
        .get(url, { responseType: 'blob' })
        .subscribe(blob => this.parseExcel(blob));
    }

    private parseExcel(blobOrFile: Blob | File): void {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Read file into workbook
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
        //   console.log(workbook)
    
          // Pick the first sheet
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName]

          const json = worksheet ?  XLSX.utils.sheet_to_json(worksheet, {
            header: 0       // 1 = array of arrays; omit or set header:0 for objects
          }) : [];

          // Push into the stream
          this.seasonData.next({roster: json});
        };
    
        // Read as ArrayBuffer for blobs/files
        reader.readAsArrayBuffer(blobOrFile);
      }
    
    



    readExcelFile() {
        const filePath = 'assets/UTL Season 1 Stats.xlsx'; // Replace with your file name
  
        this.http.get(filePath, { responseType: 'blob' }).subscribe((data: Blob) => {
          const reader = new FileReader();
  
          reader.onload = (e: any) => {
            const binaryString: string = e.target.result;
            const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
            this.readSheet(0,workbook);
            this.readSheet(2,workbook);
            this.readSheet(3,workbook);
            this.readSheet(4,workbook);
          };
  
          reader.readAsBinaryString(data);
        });
    }

    readSheet(index: number, workbook: XLSX.WorkBook) {
        // Assuming you want to read the first sheet
        const sheetName: string = workbook.SheetNames[index];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
  
        // Convert sheet data to JSON or other desired format
        const excelData = XLSX.utils.sheet_to_json(worksheet);
        console.log(excelData);

        if (index == 0) {
        //     const roster: SeasonData[]= [];
        //     roster.push(new SeasonData(excelData));
            
        
        //   this.seasonData.next(roster);
        }
    }

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

    

   
    getTeamRankings() {
        // this.season1Ranking = this.parseData(0);
        // console.log(this.readFile(this.filePath))
    }
}