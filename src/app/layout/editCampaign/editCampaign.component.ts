import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
//import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-editCampaign',
    templateUrl: './editCampaign.component.html',
    styleUrls: ['./editCampaign.component.css']
})
export class EditCampaignComponent implements OnInit {
    Campaigns ={    };
    startdate;
    campingname;
    assignedto;
    campingmembers;
    campingid;
    customerId=[];
  //  displayAssaignedManager;

    EditId;
    data;

    ManagerData;
    CustomerData;

    constructor( private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService, private router: Router) {
     this.EditId = this.service.getEditId();
     console.log('Edit Id:',this.EditId);
     if(this.EditId){
    //    this.service.getAllManagers().subscribe((data)=>{
       this.data ={
           campingId: this.EditId
       }
       this.service.getSingleCampaign(this.data).subscribe((data)=>{
         debugger
           console.log('data:',data);
           this.startdate = new Date(data['message'][0]['startdate']);
           this.campingname = data['message'][0]['campingname'];
           this.assignedto = data['message'][0]['assignedto']['_id'];
           //this.campingmembers = data['message'][0]['campingmembers'];
           if(data['message'][0]['customerId']){
            for(let i =0; i< data['message'][0]['customerId'].length;i++ ){
              this.customerId.push(data['message'][0]['customerId'][i]['_id']);
            }
           }
          console.log('customerId',this.customerId)
          
           this.campingid = data['message'][0]['_id'];
           //this.displayAssaignedManager = data['message'][0]['assignedtoByname'];
          // this.startdate = data['message']['startdate'];

       })
     }
    }

    ngOnInit() {
        this.service.getAllManagers().subscribe((data)=>{
            this.ManagerData = data['message'];
            console.log(data['message']);
        })
        this.service.getAllCustomer().subscribe((data)=>{
            this.CustomerData = data['message'];
        });

    }

    Edit(){
      debugger
        this.Campaigns={
            startdate: new Date(this.startdate).getTime(),
            campingname: this.campingname,
            assignedto: this.assignedto,
            customerId: this.customerId,
            campingid: this.campingid 
        }
        this.service.editCampaign(this.Campaigns).subscribe((data)=>{
            console.log(data);
            if(data['success']== true){
                this.showToaster();
              this.router.navigate(['/admin/campaign']);
            }else{
                this.ErrorSuccess();
             //   alert('sth went wrong');
            }

        })
    }
    Cancel(){
        this.Campaigns={};
        this.router.navigate(['/admin/campaign']);
    }

      //notification
   showToaster(){
    this.toastrService.success('Campaign Edited Successful');
  }
  ErrorSuccess(){
    this.toastrService.error('Failed: Unable to Save');
  }
  infoSuccess(){
    this.toastrService.info('info msg','Info!');
  }
  warningSuccess(){
    this.toastrService.warning('this is warning');
  }

 
 
}
