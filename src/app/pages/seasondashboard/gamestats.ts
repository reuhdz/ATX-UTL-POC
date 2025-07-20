import { Component, OnInit } from '@angular/core';
import { SeasonData, SeasonDataService } from '../../service/seasondataservice';
import { ImportsModule } from '../../imports';
import { WeekGameStats } from '../../models/weekgamestats';
import { PlayerHighlights } from '../../models/playerhighlights';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-game-stats',
    standalone: true,
    templateUrl: './gamestats.html',
    imports: [ImportsModule],
    providers: [SeasonDataService]
})
export class GameStats implements OnInit {
    activeIndex: number = 0;

    gameStats: WeekGameStats[] = [];
    playerStats: PlayerHighlights[] = [];
    currentWeek?: string;
    homeTeam?: string;
    awayTeam?: string;
    winner?:string;
    scrollableTabs: any[] = [];
    expandedRows = {};
    visible: boolean = false;
    game1Link?: string;

    seasonData: SeasonData = {roster: []};

    constructor(private seasonDataService: SeasonDataService,
      private http: HttpClient) {}


    // data = [
    //     {
    //       "Player": "Reuben",
    //       "Goal": "5",
    //       "Assist": "2",
    //       "Steals": "5",
    //       "Blocks": "",
    //       "Turnovers": "2",
    //       "Clip": "Stl:GX010312,Goal:GX010312,Stl:GX010310,Ast:GX010310,Stl:GX010309,TO:GX010308,Goal:GX010308,Goal:GX010298,Stl:GX010300,Goal:GX010300,Stl:GX010301,TO:GX010302,Ast:GX010305,Goal:GX010307",
    //       "Team ": "Makos",
    //       "Match 1": "5-3 | Makos",
    //       "Match 2 ": "5-0 | Makos",
    //       "Match 3": "N/A",
    //       "Winner ": "Makos",
    //       "Game tape": "https://app.box.com/s/gclsfr53u02xyjsqiho9gcdvbtiv4fsw"
    //     },
    //     {
    //       "Player": "James E",
    //       "Goal": "1",
    //       "Assist": "2",
    //       "Steals": "",
    //       "Blocks": "1",
    //       "Turnovers": "1",
    //       "Clip": "blk:GX010310,Ast:GX010308,TO:GX010300,Goal:GX010304,Ast:GX010307",
    //       "Team ": "Makos",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Lesley ",
    //       "Goal": "4",
    //       "Assist": "2",
    //       "Steals": "1",
    //       "Blocks": "",
    //       "Turnovers": "2",
    //       "Clip": "Ast:GX010312,Goal:GX010311,TO:GX010310,Goal:GX010310,Goal:GX010309,Ast:GX010300,TO:GX010303,Goal:GX010305,Stl:GX010307",
    //       "Team ": "Makos",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Shaneye",
    //       "Goal": "",
    //       "Assist": "1",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "Ast:GX010298",
    //       "Team ": "Makos",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Manny *",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "1",
    //       "Clip": "TO:GX010301",
    //       "Team ": "Makos",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Travis *",
    //       "Goal": "",
    //       "Assist": "2",
    //       "Steals": "1",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "Stl:GX010311,Ast:GX010311,Ast:GX010309",
    //       "Team ": "Makos",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Sage",
    //       "Goal": "1",
    //       "Assist": "",
    //       "Steals": "1",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "Goal:GX010302,Stl:GX010303",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Eddy",
    //       "Goal": "",
    //       "Assist": "1",
    //       "Steals": "1",
    //       "Blocks": "1",
    //       "Turnovers": "2",
    //       "Clip": "TO:GX010310,Stl:GX010300,Ast:GX010301,Blk:GX010302,TO:GX010307",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Vivian",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "1",
    //       "Clip": "TO:GX010301",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Glenn",
    //       "Goal": "2",
    //       "Assist": "",
    //       "Steals": "2",
    //       "Blocks": "",
    //       "Turnovers": "2",
    //       "Clip": "TO:GX010312,Stl:GX010310,TO:GX010309,Stl:GX010308,Goal:GX010301,Goal:GX010303",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Allie",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Justin *",
    //       "Goal": "",
    //       "Assist": "1",
    //       "Steals": "1",
    //       "Blocks": "",
    //       "Turnovers": "3",
    //       "Clip": "TO:GX010311,TO:GX010310,TO:GX010300,Stl:GX010301,Ast:GX010302",
    //       "Team ": "Crocs",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Player",
    //       "Goal": "Goal",
    //       "Assist": "Assist",
    //       "Steals": "Steals",
    //       "Blocks": "Blocks",
    //       "Turnovers": "Turnovers",
    //       "Clip": "Clip",
    //       "Team ": "Team",
    //       "Match 1": "Match 1",
    //       "Match 2 ": "Match 2 ",
    //       "Match 3": "Match 3",
    //       "Winner ": "Winner ",
    //       "Game tape": "Game tape"
    //     },
    //     {
    //       "Player": "Max",
    //       "Goal": "2",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "5-1 | Legion",
    //       "Match 2 ": "5-4 | Carp",
    //       "Match 3": "N/A",
    //       "Winner ": "Draw",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "George",
    //       "Goal": "3",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Kellie",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Manny",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Shae",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Eddy *",
    //       "Goal": "1",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Carp",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "SK",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Legion",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Diana",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Legion",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Rachel",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Legion",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Trevor",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Legion",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     },
    //     {
    //       "Player": "Justin *",
    //       "Goal": "",
    //       "Assist": "",
    //       "Steals": "",
    //       "Blocks": "",
    //       "Turnovers": "",
    //       "Clip": "",
    //       "Team ": "Legion",
    //       "Match 1": "",
    //       "Match 2 ": "",
    //       "Match 3": "",
    //       "Winner ": "",
    //       "Game tape": ""
    //     }
    //         ];

    ngOnInit() {
        this.seasonDataService.seasonData$
        .subscribe(data => {
          this.seasonData = data;
        })
        this.gameStats = this.seasonDataService.getGameStats();
        this.playerStats = this.seasonDataService.getHighlights();
        this.homeTeam = this.gameStats[0].homeTeam;
        this.awayTeam = this.gameStats[0].awayTeam;
        this.winner = this.gameStats[0].weekWinner;
        this.currentWeek = 'Week 5';
        this.scrollableTabs = Array.from({ length: 5 }, (_, i) => ({
          title: 'Week ' + (i+1) ,
          night1: this.gameStats,
          night2: this.gameStats
        }));
        // this.readExcelFile()
    }

    toggleDataTable( event: any) {
      // op.toggle(event); op: Popover,
      this.visible = true;
    }

    // readExcelFile() {
    //   const filePath = 'assets/UTL Season 1 Stats.xlsx'; // Replace with your file name

    //   this.http.get(filePath, { responseType: 'blob' }).subscribe((data: Blob) => {
    //     const reader = new FileReader();

    //     reader.onload = (e: any) => {
    //       const binaryString: string = e.target.result;
    //       const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
    //       this.readSheet(0,workbook);
    //       this.readSheet(2,workbook);
    //       this.readSheet(3,workbook);
    //       this.readSheet(4,workbook);
    //     };

    //     reader.readAsBinaryString(data);
    //   });
    // }

    // readSheet(index: number, workbook: XLSX.WorkBook) {
    //   // Assuming you want to read the first sheet
    //   const sheetName: string = workbook.SheetNames[index];
    //   const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    //   // Convert sheet data to JSON or other desired format
    //   const excelData = XLSX.utils.sheet_to_json(worksheet);
    //   console.log(excelData);
    // }
}
