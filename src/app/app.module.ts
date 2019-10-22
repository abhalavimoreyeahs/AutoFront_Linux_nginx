import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialog } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import { AmazingTimePickerModule } from 'amazing-time-picker';

//font awesome 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//date time pick
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
     SignUpComponent,
   // MyDialogComponent,
    //TryDashboardComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    //date time pick
    OwlDateTimeModule, 
         OwlNativeDateTimeModule,
  //  NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ScheduleModule ,
    AmazingTimePickerModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates:false
    }),
    LayoutModule,
  //  MatDialog,
  ],
  providers: [ AgendaService, DayService, WeekService, WorkWeekService, MonthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
