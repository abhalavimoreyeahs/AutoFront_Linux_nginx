import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AgentService } from '../../shared/services/agent';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/services/user.service';
//Dialog Box
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-agentfeedback',
    templateUrl: './agentfeedback.component.html',
    styleUrls: ['./agentfeedback.component.css']
})
export class AgentFeedbackComponent implements OnInit {
  formGroup: FormGroup;
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AgentService,  public userService: UserService) {

    }
   
    ngOnInit() {
    //   this.service.getAgentFeedbackData().subscribe((data)=>{
    //       console.log(data);
    //       this.AgentData = data['message'];
    //       this.dataSource = new MatTableDataSource(this.AgentData);
    //       Assign the paginator *after* dataSource is set
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //   })

    this.formGroup = this.formBuilder.group({
      'title': [null, [Validators.required, Validators.minLength(4)]],
      'note': [null, [Validators.required, Validators.minLength(4)] ],
    });
    }

    getErrorTitle() {
      return this.formGroup.get('title').hasError('required') ? 'Field is required' : this.formGroup.get('title').hasError('minlength')? 'title must be at least 4 characters':''; 
    }
    // getErrorNote() {
    //   return this.formGroup.get('note').hasError('required') ? 'Field is required' : this.formGroup.get('note').hasError('minLength')? 'Its too short': ''; 
    // }

    getErrorNote() {
      return this.formGroup.get('note').hasError('required') ? 'Field is required' : this.formGroup.get('note').hasError('minlength')? 'title must be at least 4 characters':''; 
    }

          //notification
   showToaster(){
      this.toastrService.success('Data Saved Successfully');
    }
    ErrorSuccess(){
      this.toastrService.error('Failed to save Data');
    }
    infoSuccess(){
      this.toastrService.info('info msg','Info!');
    }
    warningSuccess(){
      this.toastrService.warning('warning : Duplicate Data');
    }

    onSubmit() {
      //this.submitted = true;

      // stop here if form is invalid
      if (this.formGroup.invalid) {
        this.getErrorTitle();
        this.getErrorNote();
          return;
      }
      this.userService.employeeFeedback(this.formGroup.value).subscribe((data)=>{
        debugger;
       console.log(data);
       this.showToaster();
      },(err) => {
        debugger
        console.log(err)
      })

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))
  }

}

