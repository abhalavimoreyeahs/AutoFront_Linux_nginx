import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignedAgentRoutingModule } from './assignedAgent-routing.module';
import { AssignedAgentComponent } from './assignedAgent.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
    imports: [CommonModule, AssignedAgentRoutingModule,FormsModule, MaterialModule],
    declarations: [ AssignedAgentComponent ]
})
export class AssignedAgentModule {}
