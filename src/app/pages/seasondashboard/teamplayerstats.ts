import { Component } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { ImportsModule } from '../../imports';
import { LayoutService } from '../../layout/service/layout.service';

@Component({
    selector: 'app-team-player-stats',
    standalone: true,
    imports: [ImportsModule],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Empty Page</div>
        <p>Team Player Works!</p>

        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 xl:col-span-6">
            SK
                    <p-chart type="radar" [data]="radarData" [options]="radarOptions" width="350" height="250"></p-chart>
            </div>
            <div class="col-span-12 xl:col-span-6">
            Lesley
                <p-chart type="radar" [data]="radarData2" [options]="radarOptions" width="350" height="250"></p-chart>
            </div>
        </div>
    </div>`
})
export class TeamPlayerStats {
    lineData: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    lineOptions: any;

    barOptions: any;

    pieOptions: any;

    polarOptions: any;

    radarOptions: any;
    radarData2: any;

    subscription: Subscription;
    constructor(private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initCharts();
        });
    }

    ngOnInit() {
        this.initCharts();
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.barOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--p-indigo-400'), documentStyle.getPropertyValue('--p-purple-400'), documentStyle.getPropertyValue('--p-teal-400')]
                }
            ]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    tension: 0.4
                }
            ]
        };

        this.lineOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        this.polarData = {
            datasets: [
                {
                    data: [11, 16, 7, 3],
                    backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500'), documentStyle.getPropertyValue('--p-orange-500')],
                    label: 'My dataset'
                }
            ],
            labels: ['Indigo', 'Purple', 'Teal', 'Orange']
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder,
                    },
                    ticks: {
                        display: false,
                        color: textColorSecondary
                    },
                },
            },
        };

        this.radarData = {
            labels: ['Goals', 'Assist', 'Steals', 'Blocks', 'Turn Overs'],
            datasets: [
                {
                    label: 'Week 1',
                    borderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    data: [5, 4, 6, 4, 2]
                },
                {
                    label: 'Week 2',
                    borderColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-red-400'),
                    data: [4, 8, 5, 2, 3]
                }
            ]
        };

        this.radarData2 = {
            labels: ['Goals', 'Assist', 'Steals', 'Blocks', 'Turn Overs'],
            datasets: [
                {
                    label: 'Week 1',
                    borderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    data: [8, 3, 2, 2, 4]
                },
                {
                    label: 'Week 2',
                    borderColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-red-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-red-400'),
                    data: [6, 5, 4, 1, 2]
                }
            ]
        };

        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        color: textColor
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    
}
