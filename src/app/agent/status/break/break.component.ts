import { Component, Inject} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AutoDialService } from '../../../autoDialer.service';
import { AgentService } from '../../../shared/services/agent';
//Dialog Box
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent {
  /** Based on the screen size, switch from standard to one column per row */

Call;
Number;
  constructor(private agentService: AgentService,private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private service : AutoDialService) {
    this.openReasonDialog();
    let agentId =  localStorage.getItem('PlivoUserId');
    agentId = agentId.concat('@phone.plivo.com');
     let Ojb = {status:"break",
     currentstatus: "notOnCall",
     sipendpoint: agentId,
     reason:null
   }

   
  //  let statusChange = {status: "break"}
  //  this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
  //      console.log(data);
       
  //  })

  this.service.sendAgentStatus(Ojb).subscribe((data)=>{
    console.log(data);
  })
    // this.service.sendAgentStatus(Ojb).subscribe((data)=>{
    //   console.log(data);
    // })
  }

   //Dialog function
 openDialog(): void {
  console.log(this.Call);
const dialogRef = this.dialog.open(BreakDialogComponent, {
  width: '550px',
  data: { number: this.Number},
  disableClose: true 
});

dialogRef.afterClosed().subscribe(result => {
  debugger;
  console.log('The dialog was closed');

});

}

//Break Reason
  //Dialog function
  openReasonDialog(): void {
    console.log(this.Call);
  const dialogRef = this.dialog.open(BreakReasonComponent, {
    width: '550px',
    data: { number: this.Number},
    disableClose: true 
  });
  
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    let agentId =  localStorage.getItem('PlivoUserId');
    agentId = agentId.concat('@phone.plivo.com');
     let Ojb = {status:"break",
     currentstatus: "notOnCall",
     sipendpoint: agentId,
     reason: result['reason']
   }
    this.service.sendAgentStatus(Ojb).subscribe((data)=>{
      console.log(data);
    })
   // this.openDialog();
  });
 
  }
}


//Dialog Box
//dialog box 2
@Component({
  selector: 'breakReason',
  templateUrl: 'break-reason.html',
})
export class BreakReasonComponent {
  select;
  constructor(
    public dialogRef: MatDialogRef<BreakReasonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    //alert('alert called noclick');
    this.dialogRef.close();
  }
  cancel(){
    //alert('alert called cancel');
  }
  ok(){
  
    if(this.data['reason']!= null){
      this.dialogRef.close(this.data);
      }else{
       alert('Please select reaon');
      }
    //save the doc
  }

  Break = [
    {value:0, name: "regular break"},
    {value:1, name: "meeting with customer"},
    {value:2, name: "training"},
    {value:3, name: "occasional break"}
   
   ]


}

//Dialog Box
//dialog box 2
@Component({
  selector: 'breakDialog',
  templateUrl: 'break-dialogBox.html',
})
export class BreakDialogComponent {
  select;
  constructor(
    public dialogRef: MatDialogRef<BreakDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    alert('alert called');
    this.dialogRef.close();
  }

  cancel(){
    alert('alert called');
  }
  ok(){
    if(this.data['reason']){
    this.dialogRef.close("can pass string");
    }else{
     alert('Please select reaon');
    }
    //save the doc
  }

  Break = [
    {value:0, name: "regular break"},
    {value:1, name: "meeting with customer"},
    {value:2, name: "training"},
    {value:3, name: "occasional break"}
   
   ]


}