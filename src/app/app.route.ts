import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';



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
        path:'portfolio',
        component: PortfolioComponent,
      
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
