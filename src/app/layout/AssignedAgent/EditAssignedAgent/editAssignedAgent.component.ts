import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import { AutoDialService } from '../../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

//For Mat table
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-editAssignedAgent',
    templateUrl: './editAssignedAgent.component.html',
    styleUrls: ['./editAssignedAgent.component.css']
})
export class EditAssignedAgentComponent implements OnInit {
    dataSource;
    Manager;
    managerId;   
    object;

     // Flags that control the expansion panel
  f_firstPanel = false;
  M_firstPanel = false;
  f_secondPanel = false;
  
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService,  public router: Router) {
       
    }
        ngOnInit(){
            this.service.getAllManagers().subscribe((data)=>{
              this.Manager= data['message'];
            })
             this.M_firstPanel = true;
             this.f_firstPanel = true;
        }

        displayedColumns = ['S No', 'img','firstName','lastName', 'email'];

        getAgent(){
          this.dataSource=[];
          if(this.managerId){
            this.object = { managerid : this.managerId }
            this.service.getAssaignedAgentToManager(this.object).subscribe((data)=>{
                this.dataSource = new MatTableDataSource(data['message']);
           
                this.f_secondPanel = true;
            })
          }
        }

      //-------------------------------------------------------------------------------
      editTrainer() {
        // this.selectedTrainer = trainer; 
        this.f_firstPanel = false;
        this.f_secondPanel = true;
      }
      cancelEdit() {
        this.f_firstPanel = true;
        this.f_secondPanel = false;

      }
      finishEdit() {
        this.f_firstPanel = true;
        this.f_secondPanel = false;
      }
      
}
