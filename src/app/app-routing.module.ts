import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DataComponent} from './components/data/data.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'data',component:DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
