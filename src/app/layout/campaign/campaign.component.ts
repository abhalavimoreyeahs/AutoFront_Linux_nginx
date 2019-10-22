import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'ts-xlsx';

// hit all campaign 
import { interval } from 'rxjs';
const observable = interval(100000);

//Dialog Box
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Campaigns = {};
  startdate;
  campingname;
  assignedto;
  campingmembers;
  campingid;
  customerIds;

  Display = 'Save';

  CampaignData;
  ManagerData;
  CustomerData;
  DeleteCampaign;

  dataToEdit;
  dataToDelete;
  spans = [];

  f_firstPanel = false;
  f_secondPanel = true;

  uploadForm: FormGroup;

  file: File;

  selectedFile = '';

  arrayBuffer: any;
  ExcelArray;



  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }
  constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service: AutoDialService, public router: Router, public dialog: MatDialog) {
    this.hitAPI();
  }

  ngOnInit() {
    this.f_firstPanel = true;
    this.service.getAllCampaign().subscribe((data) => {
      console.log(data);
      this.CampaignData = data['message'];
      this.dataSource = new MatTableDataSource(this.CampaignData);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.service.getAllCustomer().subscribe((data) => {
      this.CustomerData = data['message'];
    });

    this.service.getAllManagers().subscribe((data) => {
      this.ManagerData = data['message'];
      console.log(data['message']);
    });


  }

 hitAPI(){
  const subscription = observable.subscribe((x) => {
    console.log('x:', x)
    this.service.getAllCampaign().subscribe((data) => {
      console.log(data);
      this.CampaignData = data['message'];
      this.dataSource = new MatTableDataSource(this.CampaignData);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  });
 }

  addCampaignBoolean = false;
  addCampaign() {
    this.addCampaignBoolean = !this.addCampaignBoolean;

  }

  editCampaign(id) {
    this.service.setEditId(id);
    this.router.navigate(['/admin/editCampaign']);
  }

  deleteCampaign(campingId) {
    this.DeleteCampaign = campingId;
    this.openDialog();
    // this.dataToDelete= { campingname:campingName }  
    // this.service.deleteCampaign(this.dataToDelete).subscribe((data)=>{             
    //     this.ngOnInit();
    // })

  }

  Cancel() {
    this.Campaigns = {};
    this.startdate = '';
    this.campingname = '';
    this.assignedto = '';
    this.campingmembers = '';
    this.addCampaignBoolean = false;
  }

  Manager = [
    { id: 12, name: 'Manager 1' },
    { id: 112, name: 'Manager 2' },
    { id: 19, name: 'Manager 3' },
    { id: 151, name: 'Manager 4' },
  ]

  toppings = new FormControl();
  toppingList: string[] = ['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4'];

  incomingfile(event) {

    this.file = event.target.files[0];
    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      this.selectedFile = this.uploadForm.get('profile').value.name
      console.log(this.uploadForm.get('profile').value);
    }
  }

  Upload() {
    this.selectedFile = '';
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.ExcelArray = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      // this.SaveAndEdit(this.ExcelArray);
    }
    fileReader.readAsArrayBuffer(this.file);
  }


  SaveAndEdit(data) {
    debugger;
    this.addCampaignBoolean = !this.addCampaignBoolean; //hiding campaign reg box
    this.Campaigns = {}; //clearing data
    if (data == null || data == undefined || !data) {
      this.startdate;
      console.log(new Date(this.startdate).getTime());
      if (this.ExcelArray != null && this.ExcelArray != undefined) {
        this.Campaigns = {
          startdate: new Date(this.startdate).getTime(),
          campingname: this.campingname,
          assignedto: this.assignedto,
          campingmembers: this.campingmembers,
          CustomerData: this.ExcelArray,
          excelupload: true
        }
      }
      else {
        this.Campaigns = {
          startdate: new Date(this.startdate).getTime(),
          campingname: this.campingname,
          customerIds: this.customerIds,
          assignedto: this.assignedto,
          campingmembers: this.campingmembers,
          CustomerData: this.ExcelArray,
          excelupload: false
        }
      }

      this.service.createCampaign(this.Campaigns).subscribe((data) => {
        console.log(data);
        if (data.sucess == true) {
          this.showToaster();
          this.ngOnInit();
        } else {
          this.ErrorSuccess();
        }
      });
    } else if (data) {
      debugger;
      this.Campaigns = {
        startdate: new Date(this.startdate).getTime(),
        campingname: this.campingname,
        assignedto: this.assignedto,
        campingmembers: this.campingmembers,
        campingid: this.campingid,
        excelupload: false
      }
      this.service.editCampaign(this.Campaigns).subscribe((data) => {
        alert('Edit successfully');
        console.log(data);
        this.ngOnInit();
      })
    }
  }

  dummyData = this.service.getDummyData();
  displayDummyData = ['Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City']

  try = this.service.getDummyCampaign();
  tryData = ['S No', 'campigname', 'createdAt', 'getCreatedByname', 'assignedtoByname', 'startdate', 'campingmembers', 'status', 'action', 'edit', 'delete'];
  tryData1 = ['select', 'S No', 'campigname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers', 'edit', 'delete']


  // dataSource = this.service.getAllCustomer();
  applyFilter(filterValue: string) {
    alert('working');
    this.dataSource.data.filter = filterValue.trim().toLowerCase();

  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
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


  //notification
  showToaster() {
    this.toastrService.success('Campaign Saved Successful');
  }
  ErrorSuccess() {
    this.toastrService.error('Failed: Unable to Save Campaign');
  }
  infoSuccess() {
    this.toastrService.info('info msg', 'Info!');
  }
  warningSuccess() {
    this.toastrService.warning('this is warning');
  }
  showSuccessfullyDeletedCampaign(){
    this.toastrService.success('Campaign Deleted Successfully');
  }

  //Dialog function
  openDialog(): void {
    console.log();
    const dialogRef = this.dialog.open(CampingDialogBox, {
      width: '450px',
      //data: { data: 'ok'},
      data: { message: 'Do you really want to delete this records? This process cannot be undone.', button: "Delete" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.dataToDelete = { campingId: this.DeleteCampaign }
        this.service.deleteCampaign(this.dataToDelete).subscribe((data) => {
          debugger;
          console.log(data);
          this.showSuccessfullyDeletedCampaign();
          this.ngOnInit();
        })
      }
    });

  }



  // Run A Campaign
  RunCampaign(campaignId, campaignStatus) {
    let camping = { campingId: campaignId, status: campaignStatus }
    this.service.run_Campaign(camping).subscribe((data) => {
      console.log(data);
      this.toastrService.success('Campaign Running Successfully');
      this.ngOnInit();
    });

  }
  // Stop A Campaign
  StopCampaign(campaignId, campaignStatus) {
    let camping = { campingId: campaignId, status: campaignStatus }
    this.service.stop_Campaign(camping).subscribe((data) => {
      console.log(data);
      this.toastrService.success('Campaign Stopped Successfully');
      this.ngOnInit();
    });
  }

  //Stop All campaign
  stopAllCampaign() {

    this.DialogToStopAllCampaign();
    // let camping={campingId:'allCamping'};
    // this.service.stop_All_Campaign(camping).subscribe((data)=>{
    //   console.log(data)
    // })
  }

  //Dialog function
  DialogToStopAllCampaign(): void {
    console.log();
    const dialogRef = this.dialog.open(CampingDialogBox, {
      width: '450px',
      //data: { data: 'ok'},
      data: { alert: 'Warning !!', message: 'Do you really want to stop all Running Campaign and Campaign in Queue? This process cannot be undone.', button: 'STOP' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        let camping = { campingId: 'allCamping' };
        this.service.stop_All_Campaign(camping).subscribe((data) => {
          console.log(data);
          this.toastrService.success('All Campaign stopped successfully');
          this.ngOnInit();
        })
      }
    });

  }

}


//Draggable Dialog code
@Component({
  selector: 'deleteCampaignDialogBox',
  templateUrl: './deleteCampaignDialogBox.html',
})
export class CampingDialogBox {

  constructor(
    public dialogRef: MatDialogRef<CampingDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}