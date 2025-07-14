import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../imports';
import { Season1Data } from '../../constants/season1data';

@Component({
    selector: 'app-active-players',
    standalone: true,
    templateUrl: './activeplayers.html',
    imports: [ImportsModule],
    providers: []
})
export class ActivePlayers implements OnInit {
    activePlayers: any [] = [];
    ngOnInit() {
        this.activePlayers = Season1Data.playerRoster;
    }
}
