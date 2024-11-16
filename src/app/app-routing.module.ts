import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TroubleshootComponent } from './troubleshoot/troubleshoot.component';
import { HistoryComponent } from './history/history.component';
import { OperationsComponent } from './operations/operations.component';
import {ValidateComponent} from "./validate/validate.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'troubleshoot', component: TroubleshootComponent },
  { path: 'validate', component: ValidateComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*
{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
*/
