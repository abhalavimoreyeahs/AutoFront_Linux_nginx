import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import { AgentService } from '../../shared/services/agent';
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
    selector: 'app-my-notes',
    templateUrl: './my-notes.component.html',
    styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  MyNotes;
     // Flags that control the expansion panel

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns = [ 'S No', 'customerName',  'customerMobNo', 'callType', 'createdAt', 'descrptionOnCall']; //, 'Start Time', 'End Time'

    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AgentService,  public router: Router) {
       
    }
        ngOnInit(){
           
            this.service.getMyAllNotes().subscribe((data)=>{
              console.log(data);
              this.MyNotes = data['message'];
              this.dataSource = new MatTableDataSource(this.MyNotes);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })
 
        }

        applyFilter(filterValue: string) {
            filterValue = filterValue.trim(); // Remove whitespace
            filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
            this.dataSource.filter = filterValue;
          }
      
}
