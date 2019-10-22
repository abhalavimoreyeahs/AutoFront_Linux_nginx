import { Component, OnInit, ViewChild } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
//For Mat table
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';

@Component({
    selector: 'app-viewCampaign',
    templateUrl: './viewCampaign.component.html',
    styleUrls: ['./viewCampaign.component.css']
})

export class ViewCampaignComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


    //displayDummyData = [ 'S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'campingmembers','campaignStatus']
    displayDummyData = [ 'S No', 'campaignName', 'startdate', 'createdByAdmin', 'assignToManager', 'campaignMembers','status']

    ViewCompaignboolean = false;
    AllCompaign=[];
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService) {
    
    }

    ngOnInit() {
        this.service.campaignAssignedToManager().subscribe((data)=>{
            if(data['success']=== true){
              this.ViewCompaignboolean = true;
              this.AllCompaign = data['message'];
              // this.CallDetailsData = data['CallDetails'];
              this.dataSource = new MatTableDataSource(this.AllCompaign);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
            console.log(data);
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

     // dummyData = this.service.getDummyData();
     dummyData =   this.AllCompaign ;
}
