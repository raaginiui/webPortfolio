import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';
import{DetailsComponent} from './detail.component';
import{DashboardComponent} from './dashboard.component';
import{ResumeComponent} from './resume.component'

export const routes:Routes = [
     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent,
      
    },
    {
          path:'resume',
        component: ResumeComponent,

    },
    {
        path:'portfolio',
        component: DashboardComponent,
children:[
            { 
                path:'',
                component:PortfolioComponent,
            },
            {
                path:':id',
                component:DetailsComponent,
            },
           
        ]
      
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
