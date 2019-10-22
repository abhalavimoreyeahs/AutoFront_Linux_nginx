import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
//import { AutoDialService } from '../../autoDialer.service';
import { AdminService } from '../../shared/services/admin.service';
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
    selector: 'app-assignedAgent',
    templateUrl: './assignedAgent.component.html',
    styleUrls: ['./assignedAgent.component.css']
})
export class AssignedAgentComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
    Manager;
    managerId;   
    object;
    AllAssignedAgents;
     // Flags that control the expansion panel
  f_firstPanel = false;
  M_firstPanel = false;
  f_secondPanel = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AdminService,  public router: Router) {
       
    }
        ngOnInit(){
          this.service.getAllAssignedAgent().subscribe((data)=>{
            this.AllAssignedAgents = data['message'];
            this.dataSource = new MatTableDataSource(this.AllAssignedAgents);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
        })
            this.service.getAllManagers().subscribe((data)=>{
              this.Manager= data['message'];
            })
             this.M_firstPanel = true;
             this.f_firstPanel = true;

        }

        displayedColumns = [ 'S No', 'assignToManager','agent', 'assignedByadmin', 'createdAt', 'remark'];

        applyFilter(filterValue: string) {
          filterValue = filterValue.trim(); // Remove whitespace
          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
          this.dataSource.filter = filterValue;
        }
      

        getAgent(){
        
          //this.dataSource=[];
          if(this.managerId){
           // this.object = { managerid : this.managerId }
            // this.service.getAllAssignedAgent(this.object).subscribe((data)=>{
            //     this.dataSource = new MatTableDataSource(data['message']);
            //     this.f_secondPanel = true;
            // })
          }
        }

       //-------------------------------------------------------------------
       manager(){
         alert('manager calling');
         this.router.navigate(['/admin/manager']);
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

    /** Whether the number of selected elements matches the total number of rows. */
    // isAllSelected() {
    //   const numSelected = this.selection.selected.length;
    //   const numRows = this.dataSource.data.length;
    //   return numSelected === numRows;
    // }

          /** The label for the checkbox on the passed row */
    // checkboxLabel(row?): string {
    //   if (!row) {
    //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    //   }
    //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    // }
      
}
