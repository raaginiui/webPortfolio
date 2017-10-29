import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{routing} from './app.route';
 import {HttpModule} from '@angular/http';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatButtonModule, 
  MatCheckboxModule,
  
  MatCardModule,
MatToolbarModule,
MatDatepickerModule,
MatInputModule,
MatNativeDateModule,
MatGridListModule, MatSidenavModule} from '@angular/material';

import 'hammerjs';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';
import{CoursesService} from './course.service';
import{DetailsComponent} from './detail.component';
import{DashboardComponent} from './dashboard.component';
import{ResumeComponent} from './resume.component'



@NgModule({
  imports:     
   [
    BrowserModule,
    RouterModule,
    HttpModule, 
    routing,
    BrowserAnimationsModule,
   MatButtonModule, 
  MatCheckboxModule,
 MatSidenavModule,
  MatCardModule,
  MatGridListModule,
MatToolbarModule,
MatDatepickerModule,
MatInputModule,
MatNativeDateModule
  ],

  declarations: 
  [ 
  AppComponent,
  HomeComponent,
PortfolioComponent,
DashboardComponent,
DetailsComponent,
ResumeComponent
 ],
providers:[CoursesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
