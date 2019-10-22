import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, EmployeeRoutingModule,FormsModule, MaterialModule],
    declarations: [ EmployeeComponent ]
})
export class EmployeeModule {}
