

import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import{Router} from '@angular/router';
import {HomeComponent} from './home.component';
import{CoursesService} from './course.service';
import{DetailsComponent} from './detail.component';
import{MdSidenav} from '@angular/material'

@Component({
  selector: 'port-app',
  templateUrl:'./portfolio.component.html',
  styleUrls:['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit

{ 
 @ViewChild('sidenav') input: MdSidenav;
  showup=true;
  showdown=false;
  id;
  details:any=[];
  courses:any=[];
constructor(private service:CoursesService){

}

ngOnInit(){

  this.service.getcourses().subscribe(courses=>this.courses=courses);
 //this.service.getcatag(this.id).subscribe(courses=>this.details=courses);


}

side(ide){
this.details=ide;
this.input.open();
  
}

hideshow(){

  this.showdown = !this.showdown;
  this.showup = !this.showup;
  

}


}