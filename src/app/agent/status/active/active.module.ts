import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ActiveRoutingModule } from './active-routing.module';
import { ActiveComponent, FeedBackComponent, CreateEventComponent  } from './active.component';
import { MaterialModule } from '../../../material/material.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

//dialog box
import { MyDialogModule } from './my-dialog/my-dialog.module'
import { MyDialogComponent } from './my-dialog/my-dialog.component';

//for calendar
import { FullCalendarModule } from '@fullcalendar/angular'; //For Calendar


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // BrowserAnimationsModule,
        MyDialogModule,
        MaterialModule,
        ActiveRoutingModule,
        FullCalendarModule
    ],
    entryComponents:[
      MyDialogComponent,
      FeedBackComponent,
      CreateEventComponent
     ],
    declarations: [ActiveComponent, FeedBackComponent, CreateEventComponent]
})
export class ActiveModule {}
