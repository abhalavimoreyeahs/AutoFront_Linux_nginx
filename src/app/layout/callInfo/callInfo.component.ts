import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import { CallInfoService } from '../../shared/services/callInfo.service';
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
    selector: 'app-callInfo',
    templateUrl: './callInfo.component.html',
    styleUrls: ['./callInfo.component.css']
})
export class CallInfoComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  CallDetailsData;
     // Flags that control the expansion panel

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  CallInfoService,  public router: Router) {
       
    }
        ngOnInit(){
           let data={}
            this.service.getCallInfo(data).subscribe((data)=>{
              console.log(data);
              this.CallDetailsData = data['CallDetails'];
              this.dataSource = new MatTableDataSource(this.CallDetailsData);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })
 
        }

        displayedColumns = [ 'S No', 'Campaign Name', 'AgentId', 'Customer Mob No', 'Created At', 'isCallPIckedUp', 'DialBLegHangupSource', 'CallDurationwithCustomer'];

      
}
