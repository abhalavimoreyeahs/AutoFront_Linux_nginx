import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AgentService } from '../../shared/services/agent';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */

  ActiveCallStatus = { totalCalls: 0, successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy:0 }
  ActiveCallStatusPercentage = { successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy:0 }


  constructor(private breakpointObserver: BreakpointObserver, private service : AgentService) {
    
  }

  ngOnInit(){

    let agentId = localStorage.getItem('PlivoUserId');
    agentId = agentId.concat('@phone.plivo.com');

    let data =  { agentPlivoId: agentId}

    this.service.getAgentCallStatus(data).subscribe((data)=>{
      debugger;
      console.log(data);
      if(data['success']== true) {
        this.ActiveCallStatus.totalCalls = data['message']['totalCalls'];
        this.ActiveCallStatus.successfulCalls = data['message']['successful'];
        this.ActiveCallStatus.unsuccessfulCalls = data['message']['unsuccssful'];
        this.ActiveCallStatus.noAnswer = data['message']['noAnswer'];
        this.ActiveCallStatus.callBusy = data['message']['callBusy'];
 
        // Call Status in percentage
        this.ActiveCallStatusPercentage.successfulCalls = ( (this.ActiveCallStatus.successfulCalls * 100)/this.ActiveCallStatus.totalCalls );
        this.ActiveCallStatusPercentage.unsuccessfulCalls = ( (this.ActiveCallStatus.unsuccessfulCalls * 100)/this.ActiveCallStatus.totalCalls ); 
        this.ActiveCallStatusPercentage.noAnswer = ( (this.ActiveCallStatus.noAnswer * 100)/this.ActiveCallStatus.totalCalls ); 
        this.ActiveCallStatusPercentage.callBusy = ( (this.ActiveCallStatus.callBusy * 100)/this.ActiveCallStatus.totalCalls );  
      }
      
    })
  }

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

  AgentStatus = [
    {value: '0', name: 'Active'},
    {value: '1', name: 'Callback'},
    {value: '2', name: 'Manual Dial'},
    {value: '3', name: 'Break'},
    {value: '4', name: 'Training'},
    {value: '5', name: 'Meeting With Customer'}
  ];
}
