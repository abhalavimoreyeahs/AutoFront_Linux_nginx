import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ManualDialRoutingModule } from './manualDial-routing.module';
import { ManualDialComponent } from './manualDial.component';
import { MaterialModule } from '../../../material/material.module';
import { FullCalendarModule } from '@fullcalendar/angular'; //For Calendar
import { FeedBackComponent } from './manualDial.component';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        ManualDialRoutingModule,
        FullCalendarModule
    ],
    entryComponents:[  
        FeedBackComponent,
       ],
    declarations: [ManualDialComponent,FeedBackComponent]
})
export class ManualDialModule {}
