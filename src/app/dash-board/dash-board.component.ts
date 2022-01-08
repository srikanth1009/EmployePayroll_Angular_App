import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../service/user-details';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  user:any;
  empDataList:UserDetails[]=[];

 constructor(private employee: EmployeeService ){}
 ngOnInit(){
  this.employee.getUser().subscribe( data => { 
    this.user=data;
    this.empDataList=this.user.data;
      console.log(this.empDataList);
    //  console.log(this.user.employeeId);

       });
  }

}
