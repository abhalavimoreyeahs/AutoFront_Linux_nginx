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
    selector: 'app-newCampaign',
    templateUrl: './newCampaign.component.html',
    styleUrls: ['./newCampaign.component.css']
})
export class NewCampaignComponent implements OnInit {
    dataSource;
    ManagerData;
    

    AvailableAgent;
    ManagerDetails;
    ManagerHistory;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    manager = ['S No','name', 'email', 'associatedCampaign','agents', 'assignAgent']
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AdminService,  public dialog: MatDialog) {

    }
   
    ngOnInit() {
  
    }



}

