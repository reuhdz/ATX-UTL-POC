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
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { DialogModule } from 'primeng/dialog';
// import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
   TableModule,
   AccordionModule,
   ChartModule,
   FluidModule,
   CommonModule,
   HttpClientModule,
   TooltipModule,
   PopoverModule,
   ButtonModule,
   TabsModule,
   DialogModule
  ],
  exports: [
    TableModule,
    AccordionModule,
    ChartModule,
    FluidModule,
    CommonModule,
    HttpClientModule,
    TooltipModule,
    PopoverModule,
    ButtonModule,
    TabsModule,
    DialogModule
  ],
  providers: [SeasonDataService],
})
export class ImportsModule {}
