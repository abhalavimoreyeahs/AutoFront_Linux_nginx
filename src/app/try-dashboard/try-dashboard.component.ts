//import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

//for calendar
import { Component, ViewChild ,OnInit} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { AutoDialService } from '../autoDialer.service';
// import { DialPad } 'bc.AngularKeypad';

//For piechart
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

//For progress bar
import { NgProgress } from '@ngx-progressbar/core'

@Component({
  selector: 'app-try-dashboard',
  templateUrl: './try-dashboard.component.html',
  styleUrls: ['./try-dashboard.component.css']
})
export class TryDashboardComponent implements OnInit {

  //progress bar
percentage:string = "";

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private httpClient: HttpClient, public progress: NgProgress, public service: AutoDialService) {
      //Progress Bar
      // this.progress.start();
      // setTimeout(()=>{
      //   this.progress.done();
      // }, 2000);
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

  //----------------Calendar---------------------------------------------------------------------------
  
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    alert(arg.date);
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  //For charts

  
  Status = ['Active', 'Manual Dial', 'Callback','Break', 'Training', 'Meeting with customer'];  
  data = [8, 5, 1, 3, 2, 0];  
  Color = ['rgb(0, 227, 150)','rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887']
  DoughnutChart = []; 
  BarChart = []; 
  LineChart = [];
  CustomLine=[]
  ngOnInit() {

    this.DoughnutChart = new Chart('canvasDoughnut', {  
      type: 'doughnut',    //line //
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
       legend: {  display: true, position: 'right',
        labels: {fontColor: 'rgb(0,0,0)'}
       },  
        scales: {  
          xAxes: [{ display: false }],  
          yAxes: [{ display: false }],  
        },
           //--------------------------
      tooltips: {
        enabled: true
    },

      //--------------------------  
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
    labels: ["1900", "1950", "1999", "2050", "3000"],
    datasets: [
      {
        label: "InBound Call",
        backgroundColor: "#00AEFF",
        data: [133,221,783,2478, 572, 1099]
      }, {
        label: "OutBound Call",
        backgroundColor: "#FF0000",
        data: [408,547,675,734, 222, 581]
      }
    ]
  },
  options: {
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
//progress bar

progressBar(){
 
}

}

export class Data {  
  PlayerName :string;  
  Run:string;  
} 

