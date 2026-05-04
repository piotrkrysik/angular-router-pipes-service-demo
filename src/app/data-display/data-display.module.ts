import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { DataDetailsComponent } from './data-details/data-details.component';



@NgModule({
  declarations: [
    DataListComponent,
    DataDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
],
  exports: [
    DataListComponent
  ]
})
export class DataDisplayModule { }
