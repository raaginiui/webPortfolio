import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{routing} from './app.route';
 import {HttpModule} from '@angular/http';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MdButtonModule, 
  MdCheckboxModule,
  
  MdCardModule,
MdToolbarModule,
MdDatepickerModule,
MdInputModule,
MdNativeDateModule,
MdGridListModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
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
   MdButtonModule, 
  MdCheckboxModule,
 MdSidenavModule,
  MdCardModule,
  MdGridListModule,
MdToolbarModule,
MdDatepickerModule,
MdInputModule,
MdNativeDateModule
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
