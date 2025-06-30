import { Component, OnInit } from '@angular/core';
import { SeasonDataService } from '../../service/seasondataservice';
import { ImportsModule } from '../../imports';
import { WeekGameStats } from '../../models/weekgamestats';
import { PlayerHighlights } from '../../models/playerhighlights';

@Component({
    selector: 'app-game-stats',
    standalone: true,
    templateUrl: './gamestats.html',
    imports: [ImportsModule],
    providers: [SeasonDataService]
})
export class GameStats implements OnInit {
    gameStats: WeekGameStats[] = [];
    playerStats: PlayerHighlights[] = [];
    currentWeek?: string;
    homeTeam?: string;
    awayTeam?: string;
    winner?:string;

    constructor(private seasonDataService: SeasonDataService) {}

    ngOnInit() {
        this.gameStats = this.seasonDataService.getGameStats();
        this.playerStats = this.seasonDataService.getHighlights();
        this.homeTeam = this.gameStats[0].homeTeam;
        this.awayTeam = this.gameStats[0].awayTeam;
        this.winner = this.gameStats[0].weekWinner;
        this.currentWeek = '2';
    }
}
