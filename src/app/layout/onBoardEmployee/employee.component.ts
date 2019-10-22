import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   
    constructor(private formBuilder: FormBuilder, private service:  AutoDialService) {
        this.myForm = this.formBuilder.group({
            password: ['', [Validators.required]],
            confirmPassword: ['']
          }, { validator: this.checkPasswords });
      
    }
    Employee = {};
    AgentBoolean: Boolean = false;

    ngOnInit() {
       
    }

    roles =[
        { id:1, name: 'Admin'},
        { id:2, name: 'Manager'},
        { id:3, name: 'Agent'},
        
    ]
    myForm: FormGroup;

    matcher = new MyErrorStateMatcher();
    selectRole(){
      debugger;
     if(this.Employee['role'] == 3){
       this.AgentBoolean = true;
     }else{
       this.AgentBoolean = false;
     }
    }
 
    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      let pass = group.controls.password.value;
      let confirmPass = group.controls.confirmPassword.value;
  
      return pass === confirmPass ? null : { notSame: true }
    }
    register(){
     this.service.saveEmployee(this.Employee).subscribe((data)=>{
         console.log(data);
         if(data.success === true){
           alert('data successfully saved');
         }
     })
        //console.log(this.Employee);
    }

}



export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
  
      return (invalidCtrl || invalidParent);
    }
  }