import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-league-nights',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">League Nights</div>
        <div class="font-semibold text-xl mb-4"></div>
                        <p-accordion >
                            <p-accordion-panel value="0">
                                <p-accordion-header><b>Subs</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    If you can't commit to six weeks of league-night gameplay, talk to leadership about becoming a substitute! As a substitute, when you're available and based on team needs, you can join a team for a game night as needed, allowing you to experience high-level UTL gameplay.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header><b>Sign Ups</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Sign up for Season 1 is closed :( Season 2 sign ups coming soon....
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header><b>Game Night Schedule</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Monday nights run from 8:00 PM CST to 9:00 PM CST, and Tuesday nights run from 7:00 PM CST to 8:00 PM CST. Please arrive early to strategize with your team and warm up properly. All games will begin 10 minutes past the scheduled start time!
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
    </div>`
})
export class LeagueNights {}
