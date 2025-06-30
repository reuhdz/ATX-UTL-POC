// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { SeasonDataService } from './service/seasondataservice';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
   TableModule
  ],
  exports: [
    TableModule
  ],
  providers: [SeasonDataService],
})
export class ImportsModule {}
