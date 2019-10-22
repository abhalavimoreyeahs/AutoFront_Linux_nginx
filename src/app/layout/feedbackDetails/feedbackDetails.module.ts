import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackDetailsRoutingModule } from './feedbackDetails-routing.module';
import { FeedbackDetailsComponent } from './feedbackDetails.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, FeedbackDetailsRoutingModule,FormsModule, MaterialModule],
    entryComponents:[
        FeedbackDetailsComponent
       ],
    declarations: [ FeedbackDetailsComponent ]
})
export class FeedBackDetailsModule {}