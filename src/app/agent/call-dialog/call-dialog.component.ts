import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.css']
})
export class CallDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CallDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) {

     }

  ngOnInit() {
  }
  cancel(){
   
  }
  ok(){
    this.dialogRef.close("can pass string");
    //save the doc
  }

}
