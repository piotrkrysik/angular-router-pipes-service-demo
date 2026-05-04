import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataListComponent } from './data-display/data-list/data-list.component';
import { DataDetailsComponent } from './data-display/data-details/data-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },               // Ścieżka dla strony głównej
  { path: 'about', component: AboutComponent },             // Ścieżka dla podstrony "O nas"
  { path: 'list', component: DataListComponent },            // Ścieżka dla Twojej listy z modułu
  { path: '', redirectTo: '/home', pathMatch: 'full' },      // Automatyczne przekierowanie na start
  { path: 'details/:id', component: DataDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
