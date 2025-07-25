import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-rookie-league',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Rookie League FAQ</div>
        <div class="font-semibold text-xl mb-4"></div>
                        <p-accordion>
                            <p-accordion-panel value="0">
                                <p-accordion-header><b>Tips and Tricks</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Download our PDF for fun UTL drills and focus tips that will take your game to the next level!
                                    <br><br>
                                    <!-- Link or download a PDF -->
                                    <a href="assets/docs/Rookie League Tips Tricks.pdf" style="color: blue; text-decoration: none; font-weight: bold;" download>
                                      Rookie League Tips & Tricks PDF
                                    </a>
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header><b>Pro Screener</b> </p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Ready to level up to the Pro League—or getting prepped to? Download our PDF to get the inside scoop on the Pro League screener and grab some drills to sharpen your game!
                                    <br><br>
                                    <a href="assets/docs/UTL Beginner Instructional Sheet.pdf" style="color: blue; text-decoration: none; font-weight: bold;" download>
                                    UTL Beginner Instructional Sheet PDF
                                    </a>
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header><b>Rookie Practice Days</b></p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                    Sundays are rookie-league game days—pros and rookies swap in every other point. When League Nights aren't in play, Monday nights turn into open play!
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
    </div>`
})
export class RookieLeague {}
