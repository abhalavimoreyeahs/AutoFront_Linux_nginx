import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ScheduledCallRoutingModule } from './scheduledCall-routing.module';
import { ScheduledCallComponent } from './scheduledCall.component';
import { MaterialModule } from '../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        ScheduledCallRoutingModule
    ],
    declarations: [ScheduledCallComponent]
})
export class ScheduledCallModule {}