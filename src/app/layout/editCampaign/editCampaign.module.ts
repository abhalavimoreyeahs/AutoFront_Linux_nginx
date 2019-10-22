import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { EditCampaignRoutingModule } from './editCampaign-routing';
import { EditCampaignComponent } from './editCampaign.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@NgModule({
    imports: [CommonModule, EditCampaignRoutingModule,FormsModule,MaterialModule],
    declarations: [ EditCampaignComponent ]
})
export class EditCampaignModule {}