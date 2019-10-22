import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//Dialog Box
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-feedbackDetails',
    templateUrl: './feedbackDetails.component.html',
    styleUrls: ['./feedbackDetails.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
    dataSource;
    AgentData;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayDummyData = ['S No','customerName','customerMobNo', 'callDuration', 'registered','callType', 'descrptionOnCall','createdAt','agent']
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AdminService,  public dialog: MatDialog) {

    }
   
    ngOnInit() {
      this.service.getCallbackScheduledByAgent().subscribe((data)=>{
          console.log(data);
          this.AgentData = data['message'];
          this.dataSource = new MatTableDataSource(this.AgentData);
          // Assign the paginator *after* dataSource is set
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
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

}

