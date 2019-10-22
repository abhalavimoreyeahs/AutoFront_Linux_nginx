import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AgentDashboardRoutingModule } from './agent-dashboard-routing';
import { AgentDashboardComponent } from './agent-dashboard.component';
import { MaterialModule } from '../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        AgentDashboardRoutingModule
    ],
    declarations: [AgentDashboardComponent]
})
export class AgentDashboardModule {}
