// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { SeasonDataService } from './service/seasondataservice';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
   TableModule,
   AccordionModule,
   ChartModule,
   FluidModule,
   CommonModule
  ],
  exports: [
    TableModule,
    AccordionModule,
    ChartModule,
    FluidModule,
    CommonModule
  ],
  providers: [SeasonDataService],
})
export class ImportsModule {}
