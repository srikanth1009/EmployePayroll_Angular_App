import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee/add-employee.component';
import {HeaderComponent} from "./component/header/header.component"
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {path:'', component:DashBoardComponent},
  {path: 'dashboard' , component: DashBoardComponent},
  {path:'addemployee', component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }