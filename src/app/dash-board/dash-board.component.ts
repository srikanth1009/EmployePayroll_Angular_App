import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../service/user-details';
import { EmployeeService } from '../service/employee.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;
  user:any;
  empDataList:UserDetails[]=[];

 constructor(private employee: EmployeeService ){}
 ngOnInit(){
   //get
   this.employee.getUser().subscribe( data => { 
     this.user=data;
     this.empDataList=this.user.data;
       console.log(this.empDataList);

        });
  }
    get f(){
    return this.registerForm.controls;
  }

    //delete
  delete(id:number){
    this.empDataList.slice(id);
    this.employee.deleteEmp(id).subscribe((result => {
        console.log(result)
    }))
    alert("Your data is Deleted succesfully");

  }
}