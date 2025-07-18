import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-gen-utl-rules',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">General/UTL Rules</div>
        <div class="font-semibold text-xl mb-4"></div>
                        <p-accordion>
                            <p-accordion-panel value="0">
                                <p-accordion-header><b>UTL Handbook</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Download the latest UTL Handbook
                                        <BR>
                                        <a href="assets/docs/UTL-Handbook.pdf" style="color: blue; text-decoration: none; font-weight: bold;" download>
                                         UTL Handbook PDF
                                        </a>
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header><b>Swim Offs</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    When a surface (1v1, 2v1, or 2v2) occurs, the torpedo is immediately placed on the bottom at the site where it occurred. 
                                    The referee will position themselves above the torpedo with each of the two players one arm's length away on either side. 
                                    The signal to release the two players to swim off and try to gain possession of the torpedo will be: “Ready…Go.” 
                                    Other team members may also dive down but must not attack the torpedo immediately. 
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header><b>3 On 1</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    No more than four players are allowed to be involved in the scrap when fighting for control of the torpedo. Only two players from each team can be involved in a wrap-up. [Lockout Rule] Violation of the Lockout Rule will result in a penalty drop against the violating team.<br><br>
                                    In the event of a 3v1, all three players from the violating team will receive a penalty strike, and the fouled player will be awarded a penalty shot on an open goal. The violating team must fall back to their wall while the opposing team stages at the halfway point on the surface.<br><br>
                                    <b>Penalty Shot:</b> The shot is taken from between the third and fourth lines. It cannot be blocked or obstructed by any player. If the torpedo lands in the goal, it counts as a score for that team.<br><br>
                                    <b>Missing a Penalty Shot:</b> If the player misses, the torpedo becomes live and play continues. The team on the wall may retrieve the torpedo and attempt to score.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
    </div>`
})
export class GenUtlRules {}
