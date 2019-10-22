import { Component, OnInit,ViewChild } from '@angular/core';
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

import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';

@Component({
    selector: 'app-allmanager',
    templateUrl: './allmanager.component.html',
    styleUrls: ['./allmanager.component.css']
})
export class AllManagerComponent implements OnInit {
    selection = new SelectionModel(true, []);
    dataSource

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ManagerData;
    displayData = [ 'S No', 'FirstName', 'LastName', 'Email', 'Created At'];

    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService,  public router: Router) {
       
    }
        ngOnInit(){
        this.service.getAllManagerDetails().subscribe((data)=>{
            console.log(data);
            this.ManagerData = data['message'];
            this.dataSource = new MatTableDataSource(this.ManagerData);
            // Assign the paginator *after* dataSource is set
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        })

        }


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
   

      
}
