import { Component, OnInit } from '@angular/core';
import { SeasonTeamRecords } from '../../models/seasonteamrecords';
import { SeasonDataService } from '../../service/seasondataservice';
import { ImportsModule } from '../../imports';
import { OverallPlayerStats } from '../../models/overallplayerstats';
import { Season1Data } from '../../constants/season1data';
import {Popover } from 'primeng/popover';

@Component({
    selector: 'app-rankings',
    standalone: true,
    templateUrl: './rankings.html',
    imports: [ImportsModule],
    providers: [SeasonDataService]
})
export class Rankings implements OnInit {
    constructor() {}
    overallPlayerData: any[][] = [];
    playerSet: Map<string, OverallPlayerStats> = new Map();
    teamRecords: SeasonTeamRecords[] = [];
    overallPlayerStats: any[] = [];

    ngOnInit() {
      this.overallPlayerData = [Season1Data.playerStatsWeek1, 
                                Season1Data.playerStatsWeek2, 
                                Season1Data.playerStatsWeek3];

      this.getSeasonRecords();
      this.getOverallPlayerRecords();

    }

    getSeasonRecords() {
      Season1Data.season1Rank.forEach( (element) => {
        let team: SeasonTeamRecords = {};
        team.captain = element.Captain;
        team.name = element.Team;
        team.record = element.Record;
        team.ranking = element.Rank;
        team.nextGame = element['Next Game'];

        this.teamRecords.push(team);

    });
    }

    getOverallPlayerRecords() {
      this.overallPlayerData.forEach( element => {
        element.forEach ( weekStats => {
          let key = weekStats.Player;
          if(this.playerSet.has(key)) {
            let player = this.playerSet.get(key);
            if(player !== undefined) {
              player.goals = player.goals + Number(weekStats.Goal);
              player.assist = player.assist + Number(weekStats.Assist);
              player.steals = player.steals + Number(weekStats.Steals);
              player.blocks = player.blocks + Number(weekStats.Blocks);
              player.turnOvers = player.turnOvers + Number(weekStats.Turnovers);
              player.gamesPlayed = player.gamesPlayed + 1;
              this.playerSet.set(key, player);
            }
            

          } else {
            const overallPlayer: OverallPlayerStats = {
              name: weekStats.Player,
              goals: Number(weekStats.Goal),
              steals: Number(weekStats.Assist),
              assist: Number(weekStats.Steals),
              blocks: Number(weekStats.Blocks),
              turnOvers: Number(weekStats.Turnovers),
              gamesPlayed: 1,
              team: this.findPlayerTeam(weekStats.Player)
            };
            this.playerSet.set(key, overallPlayer)
          }
        })
      });
      this.overallPlayerStats = Array.from(this.playerSet.values()); 
      this.generateRating();
    }

    generateRating(){
      // (Points +  Assists + Steals + Blocks - Turnovers) / Games Played
      this.overallPlayerStats.forEach( player => {
        player.rating = (player.goals + player.assist + player.steals + player.blocks - player.turnOvers) / player.gamesPlayed;
      })
    }

    findPlayerTeam(playerName: string): string {
      let player = Season1Data.playerRoster.filter(player => player.Player == playerName);
      let playerTeam = "--"
      player.forEach(item => {
        playerTeam = item.LeagueTeam;
      })
      return playerTeam;
    }

    toggleDataTable(op: Popover, event: any) {
      op.toggle(event);
    }
   
}