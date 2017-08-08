

import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';

import{CoursesService} from './course.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'detail-app',
  template:`
  <div style="margin-top:75px;">
  <ul *ngFor="let course of courses" >
   
      <li>{{course}}</li>
     
     </ul>
     </div>`,
 
})
export class DetailsComponent implements OnInit

{ 

  
  

  courses:any=[];
constructor(private service:CoursesService,private route:ActivatedRoute){

}

ngOnInit(){
  let id = this.route.snapshot.params['id'];

  this.service.getcatag(id).subscribe(courses=>this.courses=courses);

}



}