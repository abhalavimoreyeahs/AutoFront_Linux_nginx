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
    selector: 'app-agentToManager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
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
      this.service.getManagerDetails().subscribe((data)=>{
          console.log(data);
          this.ManagerData = data['data'];
          this.dataSource = new MatTableDataSource(this.ManagerData);
          // Assign the paginator *after* dataSource is set
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      })
    }
    assignAgent(managerId){
        
       this.service.getAvailabelAgent().subscribe((data)=>{
           console.log('available agent', data);
           this.AvailableAgent = data;
       }) 
       this.service.getSingleManagerDetails(managerId).subscribe((data)=>{
           console.log('manager Details',data);
           this.ManagerDetails = data;
           if(this.ManagerDetails.success == true){
            let running=0;
            let queue=0;
            let stop=0;
            let completed=0;
            let idle =0;
            let managerName;
            let managerEmail;
            let managerId;
              if(this.ManagerDetails.getManager){
                if(this.ManagerDetails.getManager[0].users){
                managerName = `${this.ManagerDetails.getManager[0].users.firstName}  ${this.ManagerDetails.getManager[0].users.lastName}`;
                managerEmail = this.ManagerDetails.getManager[0].users.email;
                managerId = this.ManagerDetails.getManager[0]._id;
                }
              }
              debugger;
              if(this.ManagerDetails.campaignDetails.length > 0){
                for(let i=0; i < this.ManagerDetails.campaignDetails.length; i++){
                  if(this.ManagerDetails.campaignDetails[i].campingStatus != undefined){ //ManagerHistory
                         if(this.ManagerDetails.campaignDetails[i].campingStatus.status == 1){
                         running++;
                         }else if(this.ManagerDetails.campaignDetails[i].campingStatus.status == 2){
                          queue++;
                         }else if(this.ManagerDetails.campaignDetails[i].campingStatus.status == 3){
                          stop++;
                         }else if(this.ManagerDetails.campaignDetails[i].campingStatus.status == 4){
                          completed++
                         }
                  }
                  else{
                    idle++;
                  }
                }
              }
                // obj
                this.ManagerHistory={
                  ManagerName: managerName,
                  ManagerEmail: managerEmail,
                  managerId:managerId,
                  Running: running,
                  Queue: queue,
                  Stop: stop,
                  Completed: completed,
                  Idle: idle
                }
              //}
              this.openDialog(this.AvailableAgent, this.ManagerHistory);
           }
         //  this.openDialog(this.AvailableAgent, this.ManagerHistory)
       });
    }

    openDialog(agent, manager): void {
        const dialogRef = this.dialog.open(AssignAgentComponent, {
          width: '650px',
          data: {Agent:agent, Manager:manager}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          if(result){
          if(result['agentId'] && result['managerId']){
            this.service.assignAgentToManager(result).subscribe((data)=>{
              console.log(data);
            })
          }
          }
        });
      }
}


export interface DialogData {
    Agent: [];
    name: string;
    number: string;
    duration: string;
    notes: string;
  }

// assign Agent to manager dialog Box
@Component({
    selector: 'assignAgent',
    templateUrl: 'assignAgent.component.html',
  })
  export class AssignAgentComponent {
 
    constructor(public dialogRef: MatDialogRef<AssignAgentComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log('feedback details', data);
      data['managerId'] = data['Manager']['managerId'];
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
    cancel() {
 
    }
    ok() {
      this.dialogRef.close("can pass string");
      //save the doc
    }
  


  }