import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-pro-league',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Pro League</div>
        <div class="font-semibold text-xl mb-4"></div>
                        <p-accordion>
                            <p-accordion-panel value="0">
                                <p-accordion-header><b>Pro Days</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Pro Days take place Sundays from 8:15 AM to 10:00 AM CST (alongside rookie play) and Friday nights from 7:45 PM to 9:00 PM CST.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header><b>Cali Screener</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    This screener is for pro players aiming to make the ATX Cali Tournament pro team(s). More information on the screener will be available soon.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                        </p-accordion>
    </div>`
})
export class ProLeague {}
