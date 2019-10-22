import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './adminDashboard-routing';
import { AdminDashboardComponent } from './adminDashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@NgModule({
    imports: [CommonModule, AdminDashboardRoutingModule,FormsModule,MaterialModule],
    declarations: [ AdminDashboardComponent ]
})
export class AdminDashboardModule {}
