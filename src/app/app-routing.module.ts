import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./component/header/header.component"
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {path:'empheader', component:HeaderComponent},
  {path: 'dashbord' , component: DashBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
