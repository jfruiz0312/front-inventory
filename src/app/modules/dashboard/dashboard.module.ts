import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module'; // Importar el routing module
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardComponent,
    HomeComponent,
    RouterModule,
    DashboardRoutingModule // Agregar aquí
  ]
})
export class DashboardModule { }