import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { setTime } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
 CallerName;
 CallerNumber;
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      debugger;
 console.log('Number:',this.data.number,'Name:',this.data.name);
 this.CallerName = data.name;
 this.CallerNumber = data.number;
     }

  ngOnInit() {
    setTimeout(() => {
    this.ok();
    }, 30000);

  }
  cancel(){
   
  }
  ok(){
    this.dialogRef.close("can pass string");
    //save the doc
 
  }

}
