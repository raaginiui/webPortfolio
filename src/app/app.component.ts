import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {HomeComponent} from './home.component';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
})
export class AppComponent  { name = 'Angular'; }
