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
    
    expandedRows = {};
    visible: boolean = false;
    game1Link?: string;

    seasonData: SeasonData = {roster: []};
    weekData: any[] = [];
    scrollableTabs: any[] = [];

    constructor(private seasonDataService: SeasonDataService,
      private http: HttpClient) {}

    ngOnInit() {
        this.seasonDataService.seasonData$
        .subscribe(data => {
          this.seasonData = data;
          this.scrollableTabs = this.populateTabs();
          console.log(this.scrollableTabs)
        })


        // this.gameStats = this.seasonDataService.getGameStats();
        // this.playerStats = this.seasonDataService.getHighlights();
        // this.homeTeam = this.gameStats[0].homeTeam;
        // this.awayTeam = this.gameStats[0].awayTeam;
        // this.winner = this.gameStats[0].weekWinner;
        this.currentWeek = 'Week 5';
        
        // console.log(this.scrollableTabs)
    }

    populateTabs(): any[]{
      if (this.seasonData.overallWeek){
        let weekNum = 1;
        this.gameStats = this.getWeekNightData(weekNum -1,0,0);
        for (const weekData of this.seasonData.overallWeek) {
          // console.log(weekData);
          this.scrollableTabs.push({title:'Week ' + weekNum++,
                                    night1: this.gameStats,
                                    })
        }
      }
      console.log(this.scrollableTabs)
       
      return this.scrollableTabs;
    }

    getWeekNightData(weekNightIndex: number, matchNumber: number, night: number) {
      this.weekData = [];
      this.weekData = this.seasonData.overallWeek ? this.seasonData.overallWeek[weekNightIndex] : [];
      let nightSplitIndex = this.weekData.findIndex((data: { Player: string; }) => data.Player === 'Player'); //REVIEW
      let secondPart = this.weekData.splice(nightSplitIndex); // Removes elements from splitIndex to the end and returns them
      let firstPart = this.weekData;
      let game1 = this.getMatchStats(firstPart)

      return game1;
    }

    getMatchStats(matchData: any[]): WeekGameStats[]{
      let gameStats: WeekGameStats[] = [];
      const matchTeams = [...new Set(matchData.map(item => item.Team))];
      const matchWinner = matchData.find(stat => stat.Winner !== 'Winner' && stat.Winner != 0)
      const game1Stats = this.getGameStats(1, matchData);
      const game2Stats = this.getGameStats(2, matchData);
      const game3Stats = this.getGameStats(3, matchData);
      const gameLinkAndClips = this.getGameLinkAndClips(matchData);
  
      //Form teamStats
      gameStats = [{
        id: '1',
        homeTeam: matchTeams[0],
        awayTeam: matchTeams[1],
        matchWinner: matchWinner.Winner,
        gameScore: game1Stats[0],
        gameWinner: game1Stats[1],
        overallGamesStats: this.getOverallGameStats(game1Stats,1),
        teamStats: [],
        clips: [gameLinkAndClips[1]]
      },{
        id: '2',
        homeTeam: matchTeams[0],
        awayTeam: matchTeams[1],
        matchWinner: matchWinner,
        gameScore: game2Stats[0],
        gameWinner: game2Stats[1],
        overallGamesStats: this.getOverallGameStats(game2Stats,2),
        teamStats: [],
        clips: [gameLinkAndClips[1]]
      },{
        id: '3',
        homeTeam: matchTeams[0],
        awayTeam: matchTeams[1],
        matchWinner: matchWinner,
        gameScore: game3Stats[0],
        gameWinner: game3Stats[1],
        overallGamesStats: this.getOverallGameStats(game3Stats,3),
        teamStats: [],
        clips: [gameLinkAndClips[1]]
      }]
      //Form OverAll info
      console.log(gameStats)
      return gameStats;
    }

    getGameStats(gameNum: number, matchData: any[]){
      const key = 'Game' + gameNum;
      const gameStats: any[] = [];
      console.log(matchData)
      matchData.forEach(stats => {
        if (stats[key] != 0) {
         
          gameStats.push(stats[key].split(':')[0]);
          gameStats.push(stats[key].split(':')[1] ? stats[key].split(':')[1] : '');
        } 
      })
      console.log(gameStats)
      return gameStats;
    }

    getGameLinkAndClips(matchData: any[]) {
      const gameStats: any[] = [];
      matchData.forEach(stats => {
        if (stats.GameTape != 0 ) {
          gameStats.push(stats.GameTape);
        } 
        if (stats.Clip != 0) {
          gameStats.push(stats.Clip);
        }
      })

      return gameStats
    }

    getOverallGameStats(gameStats: any[], gameNum: number) {
      // goals,assist,steals,blocks,to
      const key = 'Game' + gameNum;
      const teamA: any = {
        team: gameStats[2].split(' ')[2] ? gameStats[2].split(' ')[2] : 'N/A',
        goals: gameStats[2].split(' ')[0],
        assist: gameStats[4].split(' ')[0],
        steals: gameStats[6].split(' ')[0],
        blocks: gameStats[8].split(' ')[0],
        to: gameStats[10].split(' ')[0],
      };
      const teamB: any = {
        team: gameStats[3].split(' ')[2],
        goals: gameStats[3].split(' ')[0],
        assist: gameStats[5].split(' ')[0],
        steals: gameStats[7].split(' ')[0],
        blocks: gameStats[9].split(' ')[0],
        to: gameStats[11].split(' ')[0],
      };
      
      return [teamA, teamB] 
    }


    toggleDataTable( event: any) {
      // op.toggle(event); op: Popover,
      this.visible = true;
    }
}
