import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callStatus',
  templateUrl: './callStatus.component.html',
  styleUrls: ['./callStatus.component.css']
})
export class CallStatusComponent {
  /** Based on the screen size, switch from standard to one column per row */
 

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  AgentStatus = [
    {value: '0', name: 'Active'},
    {value: '1', name: 'Callback'},
    {value: '2', name: 'Manual Dial'},
    {value: '3', name: 'Break'},
    {value: '4', name: 'Training'},
    {value: '5', name: 'Meeting With Customer'}
  ];

  status(e){
    alert(e.target.data);
    console.log(e.target.data);
  }

  changed(e){
    alert(e);
    console.log(e);
    // event comes as parameter, you'll have to find selectedData manually
    // by using e.target.data
}
data='select Status';
dataChanged(newObj) {

}
}
