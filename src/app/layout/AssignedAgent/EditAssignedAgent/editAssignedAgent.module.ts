import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAssignedAgentRoutingModule } from './editAssignedAgent-routing.module';
import { EditAssignedAgentComponent } from './editAssignedAgent.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
    imports: [CommonModule, EditAssignedAgentRoutingModule,FormsModule, MaterialModule],
    declarations: [ EditAssignedAgentComponent ]
})
export class EditAssignedAgentModule {}
