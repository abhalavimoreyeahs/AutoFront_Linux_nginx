import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TryDashboardRoutingModule } from './try-dashboard-routing.module';
import { TryDashboardComponent } from './try-dashboard.component';
import { MaterialModule } from '../material/material.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

//For progress Bar
import { NgProgressModule } from '@ngx-progressbar/core'

//For calendar
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
  //      BrowserAnimationsModule,
        MaterialModule,
        TryDashboardRoutingModule,
        MatProgressBarModule,
        FullCalendarModule,
        NgProgressModule
    ],
    declarations: [TryDashboardComponent]
})
export class TryDashboardModule {}
