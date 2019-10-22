import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentFeedbackRoutingModule } from './agentfeedback-routing.module';
import { AgentFeedbackComponent } from './agentfeedback.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, AgentFeedbackRoutingModule,FormsModule, MaterialModule, ReactiveFormsModule],
    entryComponents:[
        AgentFeedbackComponent
       ],
    declarations: [ AgentFeedbackComponent ]
})
export class AgentFeedbackModule {}