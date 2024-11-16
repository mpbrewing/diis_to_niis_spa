import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TroubleshootComponent } from './troubleshoot/troubleshoot.component';
import { HistoryComponent } from './history/history.component';
import { OperationsComponent } from './operations/operations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DialogComponent} from "./operations/dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {ValidateComponent} from "./validate/validate.component";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatChipsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) */

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HistoryComponent,
    OperationsComponent,
    TroubleshootComponent,
    ValidateComponent,
    DialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

/*
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
*/
