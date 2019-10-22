import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent, CampingDialogBox } from './campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CampaignRoutingModule,FormsModule, MaterialModule, ReactiveFormsModule],
    entryComponents:[ CampaignComponent , CampingDialogBox],
    declarations: [ CampaignComponent , CampingDialogBox]
})
export class CampaignModule {}
