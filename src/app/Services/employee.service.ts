import { Injectable } from '@angular/core';
import { Employee} from './employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();


  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    return this.employeeList = this.firebase.list('employees');
  }


  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
     
    });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key)
  }
}
