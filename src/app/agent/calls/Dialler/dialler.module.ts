import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DiallerRoutingModule } from './dialler-routing.module';
import { DiallerComponent } from './dialler.component';
import { MaterialModule } from '../../../material/material.module';
import {ScheduleModule, AgendaService, DayService, DragAndDropService, ResizeService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        DiallerRoutingModule,
        ScheduleModule
    ],
    providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService],
    declarations: [DiallerComponent]
})
export class DiallerModule {}
