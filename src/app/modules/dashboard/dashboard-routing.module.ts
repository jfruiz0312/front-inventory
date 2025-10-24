import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', // ← Ruta base: /dashboard
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent }, // /dashboard
      { path: 'home', component: HomeComponent } // /dashboard/home
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }