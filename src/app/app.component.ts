import { Component } from '@angular/core';
// import { EmployeeService } from './service/employee.service';
// import { UserDetails } from './service/user-details';
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employepayroll-app';
  // user:any;
  //  empDataList:UserDetails[]=[];
  // constructor(private employee: EmployeeService){}

  // ngOnInit(){
  //   this.employee.getUser().subscribe( data => { 
  //     this.user=data;
  //     this.empDataList=this.user.employeePayrollDataList;
  //       console.log(this.empDataList);
  //   });
  // }
}
