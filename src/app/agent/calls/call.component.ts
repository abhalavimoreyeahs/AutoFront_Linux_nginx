import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
// import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { AutoDialService } from '../../autoDialer.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CallDialogComponent } from '../call-dialog/call-dialog.component';

@Component({
 
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit{
  selection = new SelectionModel(true, []);
  constructor(private breakpointObserver: BreakpointObserver, private service: AutoDialService, public dialog: MatDialog) {}

  CustomerDetails;
  dataSource; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  ngOnInit() {
    // this.service.getAllCustomer().subscribe((data)=>{
    //   console.log('data:',data);
    //   this.CustomerDetails = data['message'];
    //   //this.dataSource =this.CustomerDetails;
    //   this.dataSource = new MatTableDataSource(this.CustomerDetails);
    //    // Assign the paginator *after* dataSource is set
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // })
  }

  title = 'calender';
  public currentDate: Date = new Date(2018, 10, 30);
  public newViewMode: View = 'Month';

    // dummyData = this.service.getDummyData();
    // displayDummyData = [  'Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City']
   // data = this.service.getUsers();
 // dataSource = new MatTableDataSource(this.CustomerDetails);
  // displayedColumns = ['select','name','email','phone', 'details','edit', 'delete'];
  displayedColumns = ['select','Image','Name','Mobile','Age', 'City','Domicile', 'Details'];

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
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    //--------------------------------------------------------------Bussiness Logic -------------------------------------------------------
    payload;
    redirectToDetails(Name, Mobile){
     // alert(Id);
      this.payload = {
        message: 'Login Error',
        error: 'error',
        name: Name,
        mobile: Mobile,
        image: 'image_url'
      }
      this.openDialog(this.payload );
    }

    openDialog(payload): void {
      console.log(payload);
      const dialogRef = this.dialog.open(CallDialogComponent, {
        width: '550px',
        data: { message: payload.message,error: payload.error,
                name:payload.name, mobile: payload.mobile, image: payload.image
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });

    }
  
}
