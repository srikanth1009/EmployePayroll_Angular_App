//import { employee } from 'src/app/service/employee';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  [x: string]: any;

    Day=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    Month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    Year=["2016","2017","2018","2019","2020","2021","2022"];
    Salary=[10000,15000,20000,25000,30000,35000,40000];
    

    name: String="";
    gender: String="";
    department:any="";
    salary: String="";
    day:String="";
    month:String="";
    year:String="";
    note: String="";
    profilePic:String="";
    // startDate :string="";
    // department: [] = [];
    
    signupForm: any;

    constructor(private formBuilder:FormBuilder, private EmployeeService:EmployeeService ){
      this.signupForm=formBuilder.group({
        name:new FormControl(),
        gender: new FormControl(),
        department:new FormControl(),
        salary:new FormControl(),
        day:new FormControl(),
        month:new FormControl(),
        year:new FormControl(),
        note:new FormControl(),
        profilePic:new FormControl(),
      });  
    }

    startDate=`${this.day} ${this.month} ${this.year}`;
      
    ngOnInit(): void {
      
    }
  
    
    PostData(signupForm : any){
      console.log(signupForm.controls);
      console.log(this.startDate);
      // signupForm=JSON.stringify(signupForm.value);
      // console.log(signupForm);
      // console.log(this.startDate)
    }

     
    addNewEmployee(){
      
      const newformData={
        name: this.signupForm.controls.name.value,
        gender:this.signupForm.controls.gender.value,
        department:this.signupForm.controls.department.value, 
        salary: this.signupForm.controls.salary.value,
        startDate: this.signupForm.controls.day.value+" "+this.signupForm.controls.month.value+" "+this.signupForm.controls.year.value,
        note :this.signupForm.controls.note.value,
        profilePic:this.signupForm.controls.profilePic.value
    }
    this.EmployeeService.createContact(newformData).subscribe((data: any) =>
      console.log(JSON.stringify(data))
      );
      alert("Form is submitted Successfully");
    }
}