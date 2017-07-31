import{Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';






@Injectable()

export class CoursesService{
    
    url:string="https://development-5978e.firebaseio.com/.json";
   

constructor(private http :Http){

}

  getcourses() {
    return this.http.get(this.url)
      .map(res =>res.json());

  }
    



}