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
    selector: 'app-scheduledCall',
    templateUrl: './scheduledCall.component.html',
    styleUrls: ['./scheduledCall.component.css']
})
export class ScheduledCallComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  ScheduledCallData;
     // Flags that control the expansion panel

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AgentService,  public router: Router) {
       
    }
        ngOnInit(){
           
           let agentId = localStorage.getItem('PlivoUserId');
           agentId = agentId.concat('@phone.plivo.com');
           var data = { agentid: agentId };

            this.service.getScheduledCallForAgent(data).subscribe((data)=>{
              console.log(data);
              this.ScheduledCallData = data['message'];
              this.dataSource = new MatTableDataSource(this.ScheduledCallData);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })
 
        }

        displayedColumns = [ 'S No', 'Customer Name',  'Customer Mob No', 'Created At', 'Start Time', 'End Time', 'Note'];

      
}
