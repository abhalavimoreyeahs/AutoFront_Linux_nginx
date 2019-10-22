import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
// import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { AutoDialService } from '../../../autoDialer.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatSnackBar } from '@angular/material';


@Component({
 
  selector: 'app-dialler',
  templateUrl: './dialler.component.html',
  styleUrls: ['./dialler.component.css']
})
export class DiallerComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver, private service: AutoDialService, public dialog: MatDialog) {}



  ngOnInit() {
  
  }
    
  //For Mobile Number
  MobileNumber='';
  pushNumbers(number){
    this.MobileNumber = this.MobileNumber.concat(number);
  }
  removeNumber(){
    this.MobileNumber = this.MobileNumber.slice(0, -1);
  }

  call(){
    alert(this.MobileNumber);
    console.log(this.MobileNumber);
  }



  
}
