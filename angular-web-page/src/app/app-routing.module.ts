import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  { path: 'home', 
    component: MainPageComponent
  },
  { path: 'about', 
    component: AboutComponent 
  },
  { path: 'courses', 
    component: CoursesComponent 
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
