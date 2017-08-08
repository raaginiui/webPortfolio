import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {HomeComponent} from './home.component';


@Component({
  selector: 'my-app',
  template:`
  <router-outlet></router-outlet>
  `,
})
export class DashboardComponent  { name = 'Angular'; }