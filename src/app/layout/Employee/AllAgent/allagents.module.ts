import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllAgentsRoutingModule } from './allagents-routing.module';
import { AllAgentsComponent } from './allagents.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
    imports: [CommonModule, AllAgentsRoutingModule,FormsModule, MaterialModule],
    declarations: [ AllAgentsComponent ]
})
export class AllAgentsModule {}
