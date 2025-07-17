import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-league-nights',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Empty Page</div>
        <p>League Nights Works!</p>
        <div class="font-semibold text-xl mb-4"></div>
                        <p-accordion value="0">
                            <p-accordion-panel value="0">
                                <p-accordion-header>Subs</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    If you can't commit to 6 weeks of league night game play, talk to leadership about becoming a sub! As a sub when you're available and based on team needs you can join a team for a game night as needed so you get to still experience the high level UTL Gameplay
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header>Sign Ups</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
 Sign up for Season 1 here: 
<BR>
Sign up by xx/xx/xxxx
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header>Game Night Schedule</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Monday nights will be from 8pm cst to 9 pm cst and Tuesday nights will be from 7pm cst to 8pm cst. Please arrive early to strategize with your team and warm up properly. All games will start 10 min past the start of the hour!
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
    </div>`
})
export class LeagueNights {}
