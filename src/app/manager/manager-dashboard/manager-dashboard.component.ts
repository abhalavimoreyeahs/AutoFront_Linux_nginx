import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
//import { FarmService } from '../../farm.service';
import { AutoDialService } from '../../autoDialer.service';
import { ManagerService } from '../../shared/services/manager.service';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'chart.js'; 

import * as Chartist from 'chartist';

import { ChartEvent, ChartType } from 'ng-chartist';


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
    selector: 'app-managerDashboard',
    templateUrl: './manager-dashboard.component.html',
    styleUrls: ['./manager-dashboard.component.css']
})

export class ManagerDashboardComponent implements OnInit {
  BarChart = []; 
  stackedBar=[];
  public Chart: Chart[];
  CallToday=[0,0,0,0,0]

  // CallDetails
  agentActiveOnCall = 0;
  agentWatitingForCall = 0;
  successfullCall = 0;
  callFailed = 0;
  noAnswer = 0;
  TodayScheduledCall = 0;

  callAttended =0;

  Status = ['Introduction Calls', 'Follow up Calls', 'Deals done','Not Interested', 'Call Back', 'Voice mail', 'call answered'];  
  data = [8, 5, 1, 3, 2, 0, 0];  
  Color = ['rgb(0, 227, 150)','rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887', 'black']
    constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AutoDialService, private managerService: ManagerService) {
        this.callApi();
    }
 
    AgentStatus;
    campaign;
    campaignInQueue =[];
    QueueCount= 0;
    RunningCampaign={name:'None', customers:0};
    CallInfoType=[0,0,0,0,0,0,0,0,0];
    // this.RunningCampaign.name =<any>'None';
    // this.

    // callType
    ngOnInit() {
      
             //Bar Graph
    
     this.BarChart = new Chart('barGraph', {
      type: 'horizontalBar',
      data: {
          labels: [  
            "Dealdone",
            "Introductioncalls",
            "Followupcalls",
            "Callback",
            "Voicemail",
            "Blacklist",
            "Numberdoesnotmatch",
            "Underage",
            "Duplicate"],
          datasets: [{
              label: 'calls',
              data: this.CallInfoType,//[12, 19, 3, 5, 2, 3, 0, 0],
              backgroundColor: [
                  'rgb(0, 227, 150)',
                  'rgb(0, 143, 251)',
                  'rgb(254, 176, 25)',
                  'rgb(255, 69, 96)',
                  'rgb(119, 93, 208)',
                  '#DEB887'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  gridLines: {
                    display: false,
                  }
              }],
              xAxes: [{
                gridLines: {
                  display: false,
                },
              }],
          }
      }
  });

    // second chart
      this.stackedBar = new Chart('tryBar', {
      type: 'doughnut',
      data: {
          labels: ['SuccessFul Call', 'No Answer', 'call Failed', 'Wrong Number', 'NumberBusy'],
          datasets: [{
              label: '# call Info',
              data: this.CallToday,//[12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgb(0, 227, 150)',
                  'rgb(0, 143, 251)',
                  'rgb(254, 176, 25)',
                  'rgb(255, 69, 96)',
                  'rgb(119, 93, 208)',
                  '#DEB887'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {  display: false, position: 'right',
      labels: {fontColor: 'rgb(0,0,0)'}
     },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  gridLines: {
                    display: false,
                  }
              }],
              xAxes: [{
                ticks: {
                  display: false
              },
                gridLines: {
                  display: false,
                },
              }],
          }
      }
  });

    }

    callApi(){
      debugger;
      this.managerService.getCampaignDetails().subscribe((data)=>{
        console.log(data);
        if(data['success'] == true){
          this.campaign = data['campaignStatus'];
          for(let i=0; i<data['campaignStatus'].length; i++){
            if(data['campaignStatus'][i]['status'] == 1){
             this.RunningCampaign.name = data['campaignStatus'][i]['campingname'],
             this.RunningCampaign.customers = data['campaignStatus'][i]['customers']
            }else if(data['campaignStatus'][i]['status'] == 2){
              this.QueueCount ++;
             this.campaignInQueue.push({ queueStatus: data['campaignStatus'][i]['queueStatus'],
                                         campaignName: data['campaignStatus'][i]['campingname'],
                                        customers: data['campaignStatus'][i]['customers']
            })
            }
          }
        }
      })

       this.managerService.getAgentStatus().subscribe((data)=>{
         console.log(data);
         if(data['success'] == true){
           this.AgentStatus = data['statusObj'];
         }
       })
       this.managerService.getCallInfo().subscribe((data)=>{
         console.log(data);
         if(data['success']== true){
          this.CallInfoType[0] = data['message']['Dealdone'],
          this.CallInfoType[1] = data['message']['Introductioncalls'],
          this.CallInfoType[2] = data['message']['Followupcalls'],
          this.CallInfoType[3] = data['message']['Callback'],
          this.CallInfoType[4] = data['message']['Voicemail'],
          this.CallInfoType[5] = data['message']['Blacklist'],
          this.CallInfoType[6] = data['message']['Numberdoesnotmatch'],
          this.CallInfoType[7] = data['message']['Underage'],
          this.CallInfoType[8] = data['message']['Duplicate']

          this.ngOnInit();
         }
       })

       this.managerService.getCallDetailsForBadges().subscribe((data)=>{
         console.log(data);
         if(data['success'] ==  true){
           if(data['message']){
            this.agentActiveOnCall = data['message']['agentActiveOnCall'];
            this.agentWatitingForCall = data['message']['agentWatitingForCall'];
       this.CallToday[0] = this.successfullCall = data['message']['successfullCall'];
       this.CallToday[2] =  this.callFailed = data['message']['callFailed'];;
            this.CallToday[1] = this.noAnswer = data['message']['noAnswer'];
            this.TodayScheduledCall = data['message']['TodayScheduledCall'];

            this.callAttended =  data['message']['noAnswer'] + data['message']['successfullCall'] + data['message']['callFailed'];
            this.ngOnInit();
           }
         }
       })
    }
        //notification
   showToaster(){
    this.toastrService.success('Data Saved Successfully');
  }
  ErrorSuccess(){
    this.toastrService.error('Failed to save Data');
  }
  infoSuccess(){
    this.toastrService.info('info msg','Info!');
  }
  warningSuccess(){
    this.toastrService.warning('warning : Duplicate Data');
  }


}
