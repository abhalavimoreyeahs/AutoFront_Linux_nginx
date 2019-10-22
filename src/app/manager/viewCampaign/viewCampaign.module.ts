import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { ViewCampaignRoutingModule } from './viewCampaign-routing.module';
import { ViewCampaignComponent } from './viewCampaign.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@NgModule({
    imports: [CommonModule, ViewCampaignRoutingModule,FormsModule,MaterialModule],
    declarations: [ ViewCampaignComponent ]
})
export class ViewCampaignModule {}