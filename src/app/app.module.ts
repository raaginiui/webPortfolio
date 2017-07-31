import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{routing} from './app.route';
 import {HttpModule} from '@angular/http'


import { AppComponent }  from './app.component';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';
import{CoursesService} from './course.service'



@NgModule({
  imports:     
   [
    BrowserModule,
    RouterModule,
    HttpModule, 
    routing 
  ],

  declarations: 
  [ 
  AppComponent,
  HomeComponent,
PortfolioComponent
 ],
providers:[CoursesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
