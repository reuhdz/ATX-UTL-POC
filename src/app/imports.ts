// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { SeasonDataService } from './service/seasondataservice';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
   TableModule,
   AccordionModule,
   ChartModule,
   FluidModule,
   CommonModule,
   HttpClientModule,
   TooltipModule
  ],
  exports: [
    TableModule,
    AccordionModule,
    ChartModule,
    FluidModule,
    CommonModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [SeasonDataService],
})
export class ImportsModule {}
