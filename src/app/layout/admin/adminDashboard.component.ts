import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
//import { AutoDialService } from '../../autoDialer.service';
import { AdminService } from '../../shared/services/admin.service';
import { ManagerService } from '../../shared/services/manager.service';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as XLSX from 'ts-xlsx';

//For piechart
import { Chart } from 'chart.js';

@Component({
    selector: 'app-adminDashboard',
    templateUrl: './adminDashboard.component.html',
    styleUrls: ['./adminDashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

//dataSource = new UserDataSource(this.service);
dataSource = this.service.getUsers();
displayedColumns = ['name','email','phone', 'edit'];

dummyData = this.service.getDummyData();
displayData = [ 'S No', 'Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City']

agentOnBreak=0;
agentOnCall =0;
agentWaitingForCall =0;

hangupSourceAgent=0;
hangupSourceCustomer=0;
callPlacedSuccessfully=0;
callFailed=0;
callback=0;
callInfoLabel =[];
callInfoData =[];

//Today's Call Details: 

  TodayCallDisconnedtedByCustomer=0;
  TodayCallDisconnedtedByAgent=0;
  TodayCallDisconnedtedByPlivo =0;
  TodayCallFailed =0;
  TodaysuccessfullCall =0;
  TodayfeedbackSubmitted =0;

 
 customerOnCall=0;

//callInfo 
CallDisconnedtedByCustomer = 0;
CallDisconnedtedByAgent = 0;
CallDisconnedtedByPlivo =0;
CallFailed = 0;
successfullCall = 0;

//dashboard
AgentStatus =[0,0,0,0,0,0];
campaign;
campaignInQueue =[];
QueueCount= 0;
RunningCampaign={name:'None', customers:0};
RunningCampaignDetails = { };

// BarChart successful unsuccessful
BarChartlabel=[];

data1Success =[];
data2Unsuccess =[];
callTimeOut =[];
callBusy=[];


constructor(private toastrService: ToastrService, private formBuilder: FormBuilder, private service:  AdminService, private managerService: ManagerService) {

  this.callApi();

  this.service.getAgentDashboardDetails().subscribe((data)=>{
    console.log('agent Details:',data );
   // this.agentOnBreak = data['getBreak'];
   // this.agentWaitingForCall = data['getNotOnCall'];
    this.agentOnCall = data['getOnCalldata'];
    this.callback = data['callback'];
    this.hangupSourceAgent = data['hangupSourceAgnet'];
    this.hangupSourceCustomer = data['hangupSourceCustomer'];
    this.callFailed = data['notPickedUpFromCamping'];
    this.callPlacedSuccessfully= data['pickedUpCallFromCamping']; 
  });

 }

//  getCallInfo(){
//    let data ={ week: true}
//    this.service.getAdminDashboardCallInfo(data).subscribe((data)=>{
//      console.log('Dashboard:',data);
//      if(data['success'] == true){
//      for(let i= 0 ; i< data['ArrayData'].length ; i++){
//       this.callInfoLabel.push(data['ArrayData'][i]['day']);
//       this.callInfoData.push(data['ArrayData'][i]['count']);
//       //debugger;
//       }
//      }
//      console.log('Label:',this.callInfoLabel);
//      console.log('Data:',this.callInfoData)
//    })
//  }

//chart
Status = ['Active', 'Manual Dial', 'Callback','Break', 'Training', 'Meeting with customer'];  
  data = [8, 5, 1, 3, 2, 0];  
  Color = ['rgb(0, 227, 150)','rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887']
  DoughnutChart = []; 
  BarChart = []; 
  LineChart = [];
  CustomLine=[]

  //data
    uploadForm: FormGroup;  
 
    arrayBuffer:any;
    file:File;
    DataTable = [];
    ResultDataSuccess = [];
    ResultDataFailed = [];
    selectedFile='';
    ExcelArray;

    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            profile: ['']
          });

         // this.getCallInfo();
  //charts

  this.DoughnutChart = new Chart('canvasDoughnut', {  
    type: 'doughnut',    //line //
    data: {  
      labels: this.Status,  

      datasets: [  
        {  
          data: this.AgentStatus,  
          borderColor: 'white',  
          backgroundColor: this.Color,  
        }  
      ]  
    },  
    options: {   
      //responsive: true,
      maintainAspectRatio: false,
     legend: {  display: true, position: 'right',
      labels: {fontColor: 'rgb(0,0,0)'}
     },  
      scales: {  
        xAxes: [{ display: false }],  
        yAxes: [{ display: false }],  
      },
     
    }  
  });  

  //Bar Graph
  
  this.BarChart = new Chart('canvasBar', {  
    type: 'bar',    //line //
    data: {  
      labels: this.Status,  

      datasets: [  
        {  
          data: this.data,  
          borderColor: 'white',  
          backgroundColor: this.Color,  
        }  
      ]  
    },  
    options: {   
      //responsive: true,
      events: ['click'],
      maintainAspectRatio: false,
     legend: {  display: true  },  
      scales: {  
        xAxes: [{ display: true,  stacked: true,
          barPercentage: 0.5, //2,//0.5
          barThickness: 15,
          maxBarThickness: 15,
          minBarLength: 2,
          gridLines: {
             // offsetGridLines: false //true
             display: false,
             
          } }],  
        yAxes: [{ display: true,  stacked: true, 
         //  ticks: { precision:0 }//to replace decimal values from y-axis
         ticks: {
         beginAtZero: true,
         steps: 10,
         stepValue: 5,
         max: 10
      },
      gridLines: {
     //   drawBorder: false,
        display: false,
    }
        }],  
      },  
   
    //--------------------------
    tooltips: {
      enabled: true
  },
  hover: {
      animationDuration: 1
  },
  animation: {
      duration: 1,
      onComplete: function () {
          var chartInstance = this.chart,
              ctx = chartInstance.ctx;
          ctx.textAlign = 'center';
          ctx.fillStyle = "rgb(211,211,211)";
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);

              });
          });
      }
    }
    //--------------------------  
  },
  });

  //For line graph
  this.LineChart = new Chart('canvasLine', {  
    type: 'line',    //line //
    data: {  
      labels: this.Status,  

      datasets: [  
        {  
          data: this.data,  
          borderColor: 'white',  
        //  backgroundColor: this.Color,  
        }  
      ]  
    },  
    options: {   
      responsive: true,
      maintainAspectRatio: false,
     legend: {  display: true  },  
      scales: {  
        xAxes: [{ display: false }],   
        yAxes: [{ display: true }],  
      }  
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: Math.round,
        font: {
          weight: 'bold'
        }
      }
    }  
  });
//-----------------------
this.CustomLine =new Chart('myChart', {
type: 'line',
data: {
  labels: [1,2,3,4,5,6,7,8,9,10], // your labels array  ,11,12,13,14,15
  datasets: [
    {
      data:[8, 5, 1, 3, 2, 0,12,9,3,21,19,11,15,18,19], // your data array
      borderColor: '#00AEFF',
      fill: false
    },
    {  //[8, 5, 1, 3, 2, 0]; 
      data: [7, 6, 2, 5, 0, 2,5,9,3,12,14,5,17,12,5,14,15],
      borderColor: '#FF0000',
      fill: false,
      //backgroundColor: "rgb(234, 243, 246);",
    }
  ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        steps: 5,
        stepValue: 5,
        max: 20
     },
     gridLines: {
      drawBorder: false,
    },
    }],
  }
}
});
//----------------------------------------------
this.BarChart = new Chart('doubleBarChart', {  
type: 'bar',
data: {
  labels: this.BarChartlabel,//["September 1", "SAugust 31", "August 30", "August 29", "August 28", "August 27", "August 26"],  //this.callInfoLabel,// ["1900", "1950", "1999", "2050", "3000"],
  datasets: [
    {
      label: "Successful Call ",
      backgroundColor: "#00AEFF",
      data: this.data1Success,//this.callInfoData,//[133,221,783,2478, 572, 1099]
    },
    {
      label: "No answer",
      backgroundColor: "#ffc107",
      data: this.callTimeOut
    },
    {
      label: "Busy",
      backgroundColor: "#20c997",
      data: this.callBusy
    },

     {
      label: "Unsuccessful Call",
      backgroundColor: "#FF0000",
      data: this.data2Unsuccess
    }
  ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  barValueSpacing: 20,
  title: {
    display: true,
    text: 'Call Status'
  },
  scales: {  
    xAxes: [{ display: true,  
      barPercentage: 2, //2,//0.5
      barThickness: 15,
      maxBarThickness: 15,
      minBarLength: 2,
      gridLines: {
         // offsetGridLines: false //true
         display: false,
         
      } }],  
    yAxes: [{ display: true,
     //  ticks: { precision:0 }//to replace decimal values from y-axis
     ticks: {
     beginAtZero: true,

  },
  gridLines: {
 //   drawBorder: false,
  //  display: false,
}
    }],  
  },
}
});


    }

    callApi(){
       // call hangup Inf0
   this.service.getAllCallHangupInfo().subscribe((data)=>{
     console.log('Call Hangup Info',data);
     if(data['success'] = true){
       this.CallDisconnedtedByCustomer = data['message']['CallDisconnedtedByCustomer'];
       this.CallDisconnedtedByAgent = data['message']['CallDisconnedtedByAgent'];
       this.CallDisconnedtedByPlivo =data['message']['CallDisconnedtedByPlivo'];
       this.CallFailed = data['message']['CallFailed'];
       this.successfullCall = data['message']['successfullCall'];
     }
   })    

        // campaign details: 
   this.service.getAllCampaignStatus().subscribe((data)=>{
    console.log('Campaign Details:',data);

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
        this.ngOnInit();
      }
    }
  })

  this.service.getAllAgnetStatus().subscribe((data)=>{
    //debugger;
    console.log('Agent status; ',data)
    if(data['success'] == true){
      if(data['statusObj']){
        this.AgentStatus[0] = parseInt(data['statusObj'].active)
        this.AgentStatus[1] = parseInt(data['statusObj'].manual)
        this.AgentStatus[2] = parseInt(data['statusObj'].callback)
       this.agentOnBreak = this.AgentStatus[3] = parseInt(data['statusObj'].Break);
        this.AgentStatus[4] = 0 // Training 
        this.AgentStatus[5] = 0 // Meeting with customer
      }
      let notOnCall = data['AgentStatus'].forEach((data)=>{
        if((data['status'] == "active") && (data['currentstatus'] == "NotOnCall") ){
          this.agentWaitingForCall += 1;
        }
        if(((data['status'] == "active") && (data['currentstatus'] == "OnCall")) || ((data['status'] == "manual") && (data['currentstatus'] == "OnCall"))){
          this.customerOnCall += 1;
        }
      })
      console.log(this.AgentStatus);
      this.ngOnInit();
    }
  })

 this.service.getRunningCampaignDetails().subscribe((data)=>{
  // debugger;
   console.log('Running Campaing Details: ',data);
   if(data['success'] == true){
     if(data['campaignStatus']){
     this.RunningCampaignDetails = data['campaignStatus'];
     this.RunningCampaignDetails['customerCalled'] = data['campaignStatus']['resumeCounter'];
     this.RunningCampaignDetails['customerRemaining'] = ( parseInt(data['campaignStatus']['totalCustomer']) -parseInt(data['campaignStatus']['resumeCounter'])); 

     }
   }
 })  

    let data ={ week: true}
   this.service.getAdminDashboardCallInfo(data).subscribe((data)=>{
    // debugger;
     console.log('Dashboard:',data);
     if(data['success'] == true){
     for(let i= 0, j=data['ArrayData'].length - 1; j >= 0; i++, j--){
      this.BarChartlabel.push(data['ArrayData'][j]['day']);
      this.data1Success.push(data['ArrayData'][j]['successful']);
      this.data2Unsuccess.push(data['ArrayData'][j]['unsuccssful']);
      this.callTimeOut.push(data['ArrayData'][j]['noAnswer']);
      this.callBusy.push(data['ArrayData'][j]['callBusy']);
      //debugger;
      this.ngOnInit();
      }
     }
     console.log('Label:',this.BarChartlabel);
     console.log('Data success:',this.data1Success); // this.data2Success
     console.log('Data unsuccess:',this.data2Unsuccess); 

   })

   this.service.getTodaysCallDetails().subscribe((data)=>{
     debugger;
     console.log('Todays call Detailes: ',data);
     if(data['success']== true){
      if(data['message']){
        this.TodayCallDisconnedtedByAgent = data['message']['CallDisconnedtedByAgent'];
        this.TodayCallDisconnedtedByCustomer = data['message']['CallDisconnedtedByCustomer'];
        this.TodayCallDisconnedtedByPlivo = data['message']['CallDisconnedtedByPlivo'];
        this.TodayCallFailed = data['message']['CallFailed'];
        this.TodaysuccessfullCall = data['message']['successfullCall'];
        this.TodayfeedbackSubmitted = data['feedbackSubmitted'];

      }
     }else{
       console.log('false');
     }
   })
   

    }


}
