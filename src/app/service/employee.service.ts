import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { employee } from './employee';
import { AddEmployeeComponent } from '../add-employee/add-employee/add-employee.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(  private httpClient: HttpClient ) { }
  //get call
  
  getUser(){
    return this.httpClient.get(environment.api_url+'/get');
  }

  //Post 
      url=environment.api_url+'/create';
  createContact(reourceBody: { name: string; gender: string; department: string[]; salary: string; startDate: string; note: string; profilePic: string; }){
    return this.httpClient.post(this.url,reourceBody)
  }
      //Delete 
  deleteEmp(employeeId: number){
    const deleteEndpoint=environment.api_url+'/delete/'+employeeId;
    return this.httpClient.delete(deleteEndpoint);
  }
      
  // //Update
  //  editContact(data:any,id:number){
  //    const editEndpoint='api_url/update'+id;
  //    this.httpClient.put(this.editEndpoint+id.data);
  //  }
}