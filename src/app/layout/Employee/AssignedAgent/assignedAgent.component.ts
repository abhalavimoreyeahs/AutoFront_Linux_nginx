import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

//For Mat table
import { MaterialModule } from '../../../material/material.module';
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

    dataSource; 
    AgentsDetails;
    ManagerDetails;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService,  public router: Router) {
       
    }
        ngOnInit(){
            this.service.getAllAgents().subscribe((data)=>{
                console.log('data:',data);
                this.AgentsDetails = data['message'];
                //this.dataSource =this.CustomerDetails;
            //     this.dataSource = new MatTableDataSource(this.AgentsDetails);
            //      // Assign the paginator *after* dataSource is set
            //   this.dataSource.paginator = this.paginator;
            //   this.dataSource.sort = this.sort;
              })

            this.service.getAllManagers().subscribe((data)=>{
                console.log(data);
              this.ManagerDetails= data['message'];
              this.dataSource = new MatTableDataSource(this.ManagerDetails);
              // Assign the paginator *after* dataSource is set
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
            })

        }

         // mat table
 // displayedColumns = ['S No','firstName','lastName','email','details','edit', 'delete'];
 displayedColumns = ['S No','email','details','edit', 'delete'];
  
  // dataSource = this.service.getAllCustomer();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
  }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
   //--------------------------------------------------------------------------------------------------------
   object
   getManagerDetails(managerId){
       this.object = { managerid : managerId }
      this.service.getAssaignedAgentToManager(this.object).subscribe((data)=>{
          console.log(data);
      })
   }

      
}
