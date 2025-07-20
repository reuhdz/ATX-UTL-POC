import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../imports';
import { Season1Data } from '../../constants/season1data';
import { SeasonDataService } from '../../service/seasondataservice';

@Component({
    selector: 'app-active-players',
    standalone: true,
    templateUrl: './activeplayers.html',
    imports: [ImportsModule],
    providers: [SeasonDataService]
})
export class ActivePlayers implements OnInit {
    constructor(private seasonDataService: SeasonDataService){}
    activePlayers: any [] = [];
    ngOnInit() {
        // this.activePlayers = Season1Data.playerRoster;

        this.seasonDataService.seasonData$
        .subscribe(data => {
          this.activePlayers = data.roster;
        })
    }
}
