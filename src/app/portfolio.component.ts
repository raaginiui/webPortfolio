

import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {HomeComponent} from './home.component';
import{CoursesService} from './course.service'

@Component({
  selector: 'port-app',
  templateUrl:'./portfolio.component.html',
  styleUrls:['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit

{ 

  showup=true;
  showdown=false;
  

  courses:any=[];
constructor(private service:CoursesService){

}

ngOnInit(){

  this.service.getcourses().subscribe(courses=>this.courses=courses);

}

hideshow(){

  this.showdown = !this.showdown;
  this.showup = !this.showup;
  

}


}