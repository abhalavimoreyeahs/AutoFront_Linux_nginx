import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCampaignRoutingModule } from './newCampaign-routing.module';
import { NewCampaignComponent } from './newCampaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, NewCampaignRoutingModule,FormsModule,ReactiveFormsModule, MaterialModule],
    entryComponents:[ NewCampaignComponent ],
    declarations: [ NewCampaignComponent ]
})
export class NewCampaignModule {}
