import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CustomerMeetRoutingModule } from './customerMeet-routing.module';
import { CustomerMeetComponent } from './customerMeet.component';
import { MaterialModule } from '../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        CustomerMeetRoutingModule
    ],
    declarations: [CustomerMeetComponent]
})
export class CustomerMeetModule {}
