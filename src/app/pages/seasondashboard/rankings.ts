import { Component, OnInit } from '@angular/core';
import { SeasonTeamRecords } from '../../models/seasonteamrecords';
import { SeasonDataService } from '../../service/seasondataservice';
import { ImportsModule } from '../../imports';
import { OverallPlayerStats } from '../../models/overallplayerstats';

@Component({
    selector: 'app-rankings',
    standalone: true,
    templateUrl: './rankings.html',
    imports: [ImportsModule],
    providers: [SeasonDataService]
})
export class Rankings implements OnInit {
    teamRecords: SeasonTeamRecords[] = [];
    overallPlayerStats: OverallPlayerStats[] = [];
    constructor(private seasonDataService: SeasonDataService) {}

    ngOnInit() {
        this.teamRecords = this.seasonDataService.getSeasonTeamRecords();
        this.overallPlayerStats = this.seasonDataService.getOverallPlayerStats();
    }
}