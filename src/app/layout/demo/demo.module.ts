import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@NgModule({
    imports: [CommonModule, DemoRoutingModule,FormsModule,MaterialModule],
    declarations: [ DemoComponent ]
})
export class DemoModule {}