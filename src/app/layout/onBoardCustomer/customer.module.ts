import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CustomerRoutingModule,FormsModule, MaterialModule],
    declarations: [ CustomerComponent ]
})
export class CustomerModule {}
