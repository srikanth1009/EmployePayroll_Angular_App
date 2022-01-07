import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employepayroll-app';
  constructor(private employee: EmployeeService){}

  ngOnInit(){

    this.employee.getUser()
    .subscribe( data => console.log(data)  );
  }
}
