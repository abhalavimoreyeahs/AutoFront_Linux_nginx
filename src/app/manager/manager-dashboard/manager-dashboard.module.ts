import { NgModule } from '@angular/core';
import { ChartistModule } from 'ng-chartist';


import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { ManagerDashboardComponent } from './manager-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@NgModule({
    imports: [CommonModule, ManagerDashboardRoutingModule,FormsModule,MaterialModule, ChartistModule],
    declarations: [ ManagerDashboardComponent ]
})
export class ManagerDashboardModule {}
